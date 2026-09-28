# Design Guide

How to change the look of Diary. The guide goes from the easiest options, which work in the
running app, to the ones that need editing the source and rebuilding.

| What you want to change | How | Rebuild? |
|---|---|---|
| Colors and fonts | 🎨 → theme builder | No |
| Images and icons | builder, or PNG files in `assets/` | No |
| Cover color of a diary | Diary → Settings → cover color | No |
| Layout, sizes, animation | `src/styles.css` | Yes |
| Interface texts, translations | `src/app.js` → `I18N` | Yes |
| App icon (taskbar, shortcut) | `npm run tauri icon` | Yes |

---

## 1. Themes (no rebuild)

The **🎨** button on the shelf opens the theme picker. It has 8 presets (*Warm Paper, Ink & Paper,
Midnight, Rose, Sage, Ocean, Lavender, Coffee*) and your own themes. **+ Create your own** opens
the builder with a live preview.

Right-click a theme for more actions:
- presets: **Edit** (creates your own copy) and **Save to file**
- your own themes: **Rename**, **Edit**, **Save to file** and **Delete**

### Theme colors

| Key | CSS variable | Where it shows |
|---|---|---|
| **Base** | | |
| `desk` | `--desk` | App background behind everything |
| `paper` | `--paper` | Pages, dialogs, menus |
| `ink` | `--ink` | Main text |
| `inkSoft` | `--ink-soft` | Secondary text: dates, hints, previews |
| `line` | `--line` | Borders and dividers |
| `accent` | `--accent` | Primary buttons, active states |
| `gold` | `--gold` | Foil titles on covers, labels |
| **Interface** | | |
| `bar` / `barInk` | `--bar` / `--bar-ink` | Header bar and its text |
| `btn` / `btnInk` | `--btn` / `--btn-ink` | Header buttons and their text |
| `field` / `fieldInk` | `--field` / `--field-ink` | Input fields and their text |

If a theme has no *Interface* colors, which is the case for themes made before they existed, those
colors are mixed from the base ones automatically (`fillDerived` in `app.js`).

### Fonts

The builder has two font settings:
- **Interface font:** everything by default.
- **Display font:** shelf and book titles, page dates, cover titles, polaroid captions.

Both lists show the fonts installed on the computer. A font that isn't installed on another PC falls
back to the system font there.

### Theme files

**Save to file** writes `themes/<name>.json` next to the exe. To import a theme, click **+** in
the theme picker and pick a `.json` file. The format looks like this:

```json
{
  "app": "diary-theme",
  "v": 1,
  "name": "My theme",
  "colors": {
    "desk": "#ede9e1", "paper": "#fdfbf6", "ink": "#3a3530", "inkSoft": "#8a8178",
    "line": "#e3ddd2", "accent": "#c96f4a", "gold": "#b9974e",
    "bar": "#a9a59e", "barInk": "#fdfbf6", "btn": "#f7f5ef", "btnInk": "#3a3530",
    "field": "#fdfbf6", "fieldInk": "#3a3530"
  },
  "fontMain": "",
  "fontDisplay": ""
}
```

The 7 base colors are required. The interface colors and fonts are optional.

---

## 2. Images and icons (no rebuild)

On startup the app looks for an `assets` folder next to the exe (it creates the folder on first run).
- If a file with the right name is there, it replaces the built-in one.
- If it isn't, the default is used: a built-in image, an emoji, or a plain color.

There are two ways to fill the folder:
- **From the builder.** The *Images* section has background, paper, band, polaroid frame and a cover
  for each diary. The app copies the chosen file into `assets/` itself.
- **By hand.** Drop in a PNG with the right name and restart the app.

Both ways do the same thing.

```
Diary.exe
assets/
├── bg.png
├── paper.png
├── band.png
├── polaroid.png
├── covers/
│   └── <diary_id>.png
└── icons/
    ├── logo.png
    ├── dice.png
    ├── clip.png
    ├── rating-tab.png
    ├── rate_<diary_id>.png
    ├── mood_1.png … mood_8.png
    ├── envelope.png
    ├── lock.png
    ├── arrow-left.png
    ├── arrow-right.png
    └── close.png
```

Only `.png` files are loaded. Names may use only Latin letters, digits, `_`, `-` and `.`.

### Backgrounds and surfaces

| File | Size | Default | Purpose |
|---|---|---|---|
| `bg.png` | 1920×1200+ | built-in | App background, stretched to cover the window |
| `paper.png` | 1440×1800 | built-in | Page texture. Keep it light, the text sits on it |
| `band.png` | 800×320 | built-in | Paper band across the bottom of every cover |
| `polaroid.png` | 600×700 | CSS frame | Polaroid frame in the lightbox and gallery. The photo sits in the middle, so leave a wide bottom margin for the date caption |

### Covers

| File | Size | Purpose |
|---|---|---|
| `covers/<diary_id>.png` | 800×850 | Cover picture of one diary |

- **Diary id.** The default diaries use `observe`, `gratitude` and `facts`. New diaries get ids like
  `nb_1720000000000`; the builder shows every diary by name, so you don't need to look up ids.
- **Layout.** The top ~62% is visible (the title is drawn over it). The bottom 38% is hidden by the band.
- **No file:** the cover is filled with the diary's cover color (24 presets + custom color in its settings).

### Icons (96×96, transparent PNG unless noted)

| File | Replaces | Where it shows |
|---|---|---|
| `icons/logo.png` (256×256) | built-in logo | Next to "My Diaries" on the shelf |
| `icons/dice.png` | 🎲 | Random memory button |
| `icons/clip.png` | 🖇 | Attachments button and marker on entries with photos |
| `icons/rating-tab.png` | 🏆 | Rating page button |
| `icons/rate_<diary_id>.png` | ★ | Rating icon of one diary |
| `icons/mood_1.png` … `mood_8.png` | 😊 🥰 😌 😐 😢 😡 😴 🤩 | Mood stickers in the picker, calendar, entries list and chart |
| `icons/envelope.png` | ✉ | Sealed letters and the "ready to open" badge on covers |
| `icons/lock.png` | 🔒 | Badge on covers of PIN-protected diaries |
| `icons/arrow-left.png`, `arrow-right.png`, `close.png` | ‹ › ✕ | Lightbox controls |

---

## 3. Styles (rebuild required)

Everything is in `src/styles.css`.

| What | Where |
|---|---|
| Default palette | `:root` at the top of the file. It's used before a theme is applied; themes override it |
| Corner radii, book shadow | `--radius-book`, `--radius-ui`, `--shadow-book` in `:root` |
| Buttons | `.btn`, `.btn-primary`, `.btn-ghost`, `.btn-danger` |
| Book on the shelf | `.book` (proportions, radius, hover lift), `.book-band` (band height), `.book-foil` (cover title: spacing, case, emboss) |
| Headers | `.shelf-header`, `.book-header` (glass bar) |
| Panels | `.toolbar`, `.symbols-panel`, `.rating-popover`, `.ctx` (context menu) |
| Polaroid look | `.lb-polaroid`, `.clip-polaroid` (tilt, shadows) |
| Lightbox swipe | `transition` in `.lb-track`. The `cubic-bezier(.32, 1.25, .32, 1)` overshoot sets the spring |
| PIN pad | `.pin-pad button`, `.pin-dot` |

Keep the book hover as a plain `translateY`. Adding `rotate` or `scale` makes the text on the band blurry.

---

## 4. Texts and languages (rebuild required)

- **Interface strings:** the `I18N` object at the top of `src/app.js`, with an `en` and a `ru` dictionary.
- **Change a label:** edit it in both dictionaries.
- **Add a language:** copy a dictionary under a new code (for example `de`) and extend `toggleLang()`,
  which currently switches between `en` and `ru`.
- **Default diaries** (titles and questions for a fresh install) live in `DEFAULT_DATA`.
- **Decorative symbols** in the editor's ✦ panel live in `SYMBOL_GROUPS`.
- **Editor font list:** the app first uses the system list through the Local Font Access API.
  If that's unavailable, it falls back to `FALLBACK_FONTS` in `src/app.js`.

---

## 5. App icon (rebuild required)

The exe icon is baked in at build time. Make one 512×512 PNG, then run:

```bash
npm run tauri icon path/to/icon.png
npm run tauri build
```

This regenerates everything in `src-tauri/icons/`.

---

## Where data lives

Diary is portable: `data/data.json` next to the exe holds all notebooks, entries, photos and
settings. Custom images are in `assets/` and exported themes in `themes/`. Copy the whole folder
to back it up or move it.

The PIN is a privacy latch, not encryption: `data.json` is plain text.
