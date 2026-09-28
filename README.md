<div align="center">

<img src="src/assets/icons/logo.png" width="72" alt="Diary logo">

# Diary

**A cozy, fully offline journaling app for Windows.**

A shelf of notebooks for daily questions, a dream list, and letters to your future self.
Everything stays in one JSON file next to the app. No accounts, no cloud, no telemetry.

[![Build](../../actions/workflows/build.yml/badge.svg)](../../actions/workflows/build.yml)
![Platform](https://img.shields.io/badge/platform-Windows-4a8fb5)
![Tauri](https://img.shields.io/badge/Tauri-2-c96f4a)
![License](https://img.shields.io/badge/license-MIT-e0a61b)

[**⬇ Download**](../../releases/latest) · [Features](#-features) · [Themes & skinning](#-make-it-yours) · [Your data](#-your-data) · [Build](#-building-from-source)

</div>

---

<!-- Screenshots: put PNGs into docs/screenshots/ and uncomment.
<p align="center">
  <img src="docs/screenshots/shelf.png"   width="32%" alt="Bookshelf">
  <img src="docs/screenshots/page.png"    width="32%" alt="Daily page">
  <img src="docs/screenshots/themes.png"  width="32%" alt="Theme builder">
</p>
-->

## ✨ Features

### A bookshelf of notebooks

Every notebook is a book on a shelf, with a colored fabric cover, a paper band carrying its title
and subtitle, and a live counter (entries, fulfilled dreams, letters). Click one to open it;
right-click for **Edit / Save as PDF / Delete**. When you add a new notebook you pick one of three kinds:

| | Type | What it's for |
|---|---|---|
| 📖 | **Daily diary** | Your own set of questions, answered once a day |
| ✨ | **Dream list** | Wishes you write down and later mark with **Came true**, which records the date |
| ✉ | **Letters to the future** | Sealed letters that stay locked until the date you choose |

The first launch comes with three example diaries (*Self-observation*, *Gratitude diary*,
*Facts about me*). You can rename, rewrite or delete any of them.

### Daily diary

- **Your questions.** Each diary has its own list, one question per line in the settings.
- **Rich-text answers.** Bold, italic, underline and strikethrough, font family (system fonts
  through the Local Font Access API, with a built-in fallback list), size, color, and a
  **✦ symbols panel with 50 groups** of decorative Unicode characters (stars, hearts, frames, kaomoji parts, zodiac…).
- **Day rating 1–10** with a label you name per diary ("Gratitude rating", "Energy"…).
- **Mood sticker.** Eight moods, each replaceable with your own PNG.
- **🔥 Streak.** Current run of consecutive days plus your personal best.
- **Photo attachments.** Images are downscaled to 1280 px and kept inside the entry.
  They open in a polaroid-style lightbox with a spring swipe (← → and Esc work).

### Looking back

- **Entries.** A month calendar where filled days take the diary's cover color and show the day's
  mood sticker. Below it is a list of all entries with previews; click to expand, right-click to
  **edit, export to PDF or delete** a past day.
- **🖇 Attachments.** A gallery of every photo in the diary.
- **🏆 Rating.** A chart of the rating by month (daily values with mood stickers) or by year
  (monthly averages), plus every rated day sorted from best to worst. Click one to jump to it.
- **🎲 Random memory** on the shelf. It shows the entry from *exactly a year ago* or *a month ago*
  if one exists, otherwise a random past day. Locked diaries are never shown there.
- **← Back to entry.** One button from any section (Entries, Rating, Attachments, Settings) back to
  today's page, so you don't have to leave the book and type the PIN again.

### Letters to the future

Write a letter with the same rich-text editor, give it a subject, and pick an open date in the
built-in date picker (default is 30 days ahead). A letter can't be read until that day.
When one is ready, a pulsing envelope with a counter appears on the notebook's cover.

### Privacy

- **🔒 App PIN.** Asked on every launch (on-screen pad or keyboard).
- **Per-diary PIN.** Protects individual notebooks, marked with a lock on the cover. The PIN is
  also required before exporting that diary to PDF.

> **Honest note:** the PIN is a privacy latch against casual eyes, not encryption.
> `data.json` is plain text, so anyone with access to the file can read it.

### Export

**Save as PDF** works for a single entry or a whole notebook (dreams with their status, opened
letters in full, sealed ones as a line with their open date). It uses the system print dialog;
choose *Microsoft Print to PDF*.

## 🎨 Make it yours

**Themes.** The 🎨 button on the shelf offers 8 presets (*Warm Paper, Ink & Paper, Midnight, Rose,
Sage, Ocean, Lavender, Coffee*) and any number of your own. Right-click a theme to
edit, rename, save to file or delete it.

**Theme builder.** It has a live preview and covers:
- **Base colors:** desk, paper, ink, soft ink, lines, accent, gold foil
- **Interface colors:** header bar and its text, header buttons and their text, input fields and their text.
  These are derived automatically from the base colors until you set them, so older themes keep working.
- **Fonts:** interface font and display font (headers, dates, cover titles)
- **Images:** app background, paper texture, cover band, polaroid frame, and a cover picture for each notebook

**Sharing themes.** *Save* writes `themes/<name>.json` next to the exe. The **+** button imports
a theme file someone sent you.

**Cover colors.** There are 24 preset colors grouped by family, plus a custom color picker.

**Skinning without rebuilding.** Every image in the app is looked up in an `assets` folder next to
the exe first: background, paper, band, polaroid frame, covers, logo, rating/clip/lock/envelope
icons, mood stickers and lightbox arrows. Drop in a PNG with the right name and restart.
If a file is missing, the built-in default is used. File names and recommended sizes are listed in
**[DESIGN_GUIDE.md](DESIGN_GUIDE.md)**.

**Language.** The interface is available in English and Russian, switched with one button on the shelf.

## 📥 Installation

Download from [Releases](../../releases/latest) (or from the artifacts of the latest
[build run](../../actions/workflows/build.yml)):

| File | What it is |
|---|---|
| `diary.exe` | **Portable.** Put it in any folder you can write to and run it. |
| `Diary_<version>_x64_en-US.msi` | Classic MSI installer |
| `Diary_<version>_x64-setup.exe` | NSIS installer |

Requires Windows 10/11 with the Microsoft Edge **WebView2** runtime. Windows 11 ships with it,
and the installers fetch it when needed.

> **SmartScreen** may warn about an unknown publisher, because the exe isn't signed with a paid
> certificate. Click **More info → Run anyway**.

## 💾 Your data

Diary is **portable**. Everything lives next to the executable:

```
Diary/
├── diary.exe
├── data/
│   └── data.json      ← all notebooks, entries, photos, settings
├── assets/            ← optional custom images (created on first run)
└── themes/            ← exported theme files
```

- **Backup:** copy the `data` folder. **Move to another PC:** copy the whole folder.
- Writes are atomic (a temp file is written first, then renamed), so a crash mid-save can't
  leave you with a half-written file.
- **Upgrading from older versions:** data from `%APPDATA%\app.diary.desktop\data.json` is copied
  into `data/` automatically on first run.
- If the exe sits somewhere read-only, such as `Program Files` after an MSI install, Diary falls back
  to `%APPDATA%\app.diary.desktop\`.

## 🔨 Building from source

**Requirements:** [Node.js](https://nodejs.org) LTS, [Rust](https://rustup.rs), and the
[Tauri prerequisites for Windows](https://v2.tauri.app/start/prerequisites/)
(MSVC Build Tools + WebView2).

```bash
git clone https://github.com/DDanga/diary.git
cd diary
npm install
npm run tauri build
```

Output:
- `src-tauri/target/release/diary.exe`: the portable exe
- `src-tauri/target/release/bundle/msi/` and `bundle/nsis/`: the installers

Notes:
- `npm run tauri dev` works too, but the dev build keeps its own data in
  `src-tauri/target/debug/data/`, separate from the release build's `target/release/data/`.
- **Moved or renamed the project folder?** Run `cargo clean` inside `src-tauri` before building.
  Cargo caches absolute paths and the build will fail otherwise.
- The MSI bundler accepts numeric versions only (`1.10.1`, not `1.10.1-beta`).
- CI: [`.github/workflows/build.yml`](.github/workflows/build.yml) builds the exe and both
  installers on every push to `main` and uploads them as artifacts.

## 🧰 How it's built

[Tauri 2](https://tauri.app) + vanilla HTML/CSS/JS. There's no framework and no bundler, and the
frontend is three files.

```
src/
├── index.html       all screens: shelf, book pages, dialogs, lightbox, builder
├── styles.css       design, themed through CSS variables (--desk, --paper, --ink, --bar, --btn…)
├── app.js           app logic, i18n (en/ru), themes, rich-text editor, chart, PDF export
└── assets/          built-in default images
src-tauri/
├── src/main.rs      Rust commands: load/save data, external assets, theme files
└── tauri.conf.json
```

The Rust side is small and dependency-light (only `tauri`, `serde`, `serde_json`). It reads and
writes `data.json`, serves images from the external `assets` folder, and writes theme files.
Asset and theme names are validated against path traversal.

Want to translate the UI? All strings are in the `I18N` object at the top of `src/app.js`.
Copy the `en` block and extend the language toggle.

## 📄 License

[MIT](LICENSE)
