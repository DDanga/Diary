#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs;
use std::path::PathBuf;
use tauri::Manager;

fn data_file(app: &tauri::AppHandle) -> Result<PathBuf, String> {
    // портативный режим: папка data рядом с exe (там же, где assets и themes)
    if let Ok(exe) = std::env::current_exe() {
        if let Some(exe_dir) = exe.parent() {
            let dir = exe_dir.join("data");
            if fs::create_dir_all(&dir).is_ok() {
                let path = dir.join("data.json");
                // разовый перенос старых данных из AppData
                if !path.exists() {
                    if let Ok(appdir) = app.path().app_data_dir() {
                        let old = appdir.join("data.json");
                        if old.exists() {
                            let _ = fs::copy(&old, &path);
                        }
                    }
                }
                return Ok(path);
            }
        }
    }
    // запасной путь, если рядом с exe писать нельзя (например, Program Files)
    let dir = app.path().app_data_dir().map_err(|e| e.to_string())?;
    fs::create_dir_all(&dir).map_err(|e| e.to_string())?;
    Ok(dir.join("data.json"))
}

#[tauri::command]
fn load_data(app: tauri::AppHandle) -> Result<String, String> {
    let path = data_file(&app)?;
    if path.exists() {
        fs::read_to_string(&path).map_err(|e| e.to_string())
    } else {
        Ok(String::new())
    }
}

#[tauri::command]
fn save_data(app: tauri::AppHandle, json: String) -> Result<(), String> {
    let path = data_file(&app)?;
    let tmp = path.with_extension("json.tmp");
    fs::write(&tmp, json).map_err(|e| e.to_string())?;
    fs::rename(&tmp, &path).map_err(|e| e.to_string())?;
    Ok(())
}

fn external_assets_dir() -> Option<PathBuf> {
    let exe = std::env::current_exe().ok()?;
    Some(exe.parent()?.join("assets"))
}

#[tauri::command]
fn load_external_assets() -> Result<String, String> {
    use std::collections::HashMap;
    let mut map: HashMap<String, String> = HashMap::new();

    let dir = match external_assets_dir() {
        Some(d) => d,
        None => return Ok("{}".into()),
    };
    let _ = fs::create_dir_all(dir.join("covers"));
    let _ = fs::create_dir_all(dir.join("icons"));

    let mut add = |rel: String, path: PathBuf| {
        if let Ok(bytes) = fs::read(&path) {
            map.insert(rel, b64(&bytes));
        }
    };

    for name in ["bg.png", "paper.png", "band.png", "polaroid.png"] {
        add(name.to_string(), dir.join(name));
    }
    for sub in ["icons", "covers"] {
        if let Ok(entries) = fs::read_dir(dir.join(sub)) {
            for e in entries.flatten() {
                let fname = e.file_name().to_string_lossy().to_string();
                if fname.to_lowercase().ends_with(".png") {
                    add(format!("{}/{}", sub, fname), e.path());
                }
            }
        }
    }
    serde_json::to_string(&map).map_err(|e| e.to_string())
}

fn valid_asset_name(name: &str) -> bool {
    let ok_root = ["bg.png", "paper.png", "band.png", "polaroid.png"].contains(&name);
    let ok_sub = (name.starts_with("icons/") || name.starts_with("covers/"))
        && name.ends_with(".png")
        && !name.contains("..")
        && name.chars().all(|c| c.is_ascii_alphanumeric() || "/_-.".contains(c));
    ok_root || ok_sub
}

#[tauri::command]
fn save_asset(name: String, b64data: String) -> Result<(), String> {
    if !valid_asset_name(&name) {
        return Err("invalid asset name".into());
    }
    let dir = external_assets_dir().ok_or("no assets dir")?;
    let path = dir.join(&name);
    if let Some(parent) = path.parent() {
        fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }
    let bytes = b64_decode(&b64data).ok_or("invalid base64")?;
    fs::write(&path, bytes).map_err(|e| e.to_string())
}

#[tauri::command]
fn delete_asset(name: String) -> Result<(), String> {
    if !valid_asset_name(&name) {
        return Err("invalid asset name".into());
    }
    let dir = external_assets_dir().ok_or("no assets dir")?;
    let path = dir.join(&name);
    if path.exists() {
        fs::remove_file(&path).map_err(|e| e.to_string())?;
    }
    Ok(())
}

#[tauri::command]
fn save_theme_file(filename: String, json: String) -> Result<String, String> {
    let ok = filename.ends_with(".json")
        && !filename.contains("..")
        && filename
            .chars()
            .all(|c| c.is_ascii_alphanumeric() || "_-. ".contains(c));
    if !ok {
        return Err("invalid file name".into());
    }
    let exe = std::env::current_exe().map_err(|e| e.to_string())?;
    let dir = exe.parent().ok_or("no exe dir")?.join("themes");
    fs::create_dir_all(&dir).map_err(|e| e.to_string())?;
    let path = dir.join(&filename);
    fs::write(&path, json).map_err(|e| e.to_string())?;
    Ok(path.to_string_lossy().to_string())
}

fn b64_decode(s: &str) -> Option<Vec<u8>> {
    let val = |c: u8| -> Option<u32> {
        match c {
            b'A'..=b'Z' => Some((c - b'A') as u32),
            b'a'..=b'z' => Some((c - b'a') as u32 + 26),
            b'0'..=b'9' => Some((c - b'0') as u32 + 52),
            b'+' => Some(62),
            b'/' => Some(63),
            _ => None,
        }
    };
    let bytes: Vec<u8> = s.bytes().filter(|&c| c != b'\n' && c != b'\r').collect();
    let mut out = Vec::with_capacity(bytes.len() / 4 * 3);
    for chunk in bytes.chunks(4) {
        if chunk.len() < 2 {
            return None;
        }
        let pad = chunk.iter().filter(|&&c| c == b'=').count();
        let mut n: u32 = 0;
        for (i, &c) in chunk.iter().enumerate() {
            let v = if c == b'=' { 0 } else { val(c)? };
            n |= v << (18 - 6 * i);
        }
        out.push((n >> 16) as u8);
        if pad < 2 && chunk.len() > 2 {
            out.push((n >> 8) as u8);
        }
        if pad < 1 && chunk.len() > 3 {
            out.push(n as u8);
        }
    }
    Some(out)
}

fn b64(data: &[u8]) -> String {
    const T: &[u8] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let mut out = String::with_capacity((data.len() + 2) / 3 * 4);
    for chunk in data.chunks(3) {
        let b = [chunk[0], *chunk.get(1).unwrap_or(&0), *chunk.get(2).unwrap_or(&0)];
        let n = ((b[0] as u32) << 16) | ((b[1] as u32) << 8) | b[2] as u32;
        out.push(T[(n >> 18) as usize & 63] as char);
        out.push(T[(n >> 12) as usize & 63] as char);
        out.push(if chunk.len() > 1 { T[(n >> 6) as usize & 63] as char } else { '=' });
        out.push(if chunk.len() > 2 { T[n as usize & 63] as char } else { '=' });
    }
    out
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            load_data,
            save_data,
            load_external_assets,
            save_asset,
            delete_asset,
            save_theme_file
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
