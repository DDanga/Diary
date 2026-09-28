const invoke = window.__TAURI__?.core?.invoke;

const COVER_COLORS = [
  // тёплые
  "#c96f4a", "#b03a1d", "#8a4230", "#d98d5f", "#e0a61b", "#f5dfa9",
  // зелёные
  "#a8a845", "#8f9d7a", "#5f7f52", "#3f5d46", "#7fa88a",
  // синие
  "#7fb2e5", "#4a8fb5", "#2f5d7a", "#3b4a6b",
  // сиреневые и розовые
  "#a97fb4", "#7a5f9e", "#d4708c", "#e0a8b8",
  // нейтральные
  "#f3ece0", "#c8bda9", "#7a7268", "#4a443d", "#2b2925",
];

const I18N = {
  en: {
    myDiaries: "My Diaries",
    newDiary: "+ New diary",
    backToShelf: "← Shelf",
    backToEntry: "← To entry",
    backToDreams: "← To dreams",
    backToLetters: "← To letters",
    entriesBtn: "Entries",
    settingsBtn: "Settings",
    ratingTab: "Rating",
    allAttachments: "All attachments",
    allAttachmentsTitle: "🖇 All attachments",
    allEntries: "All entries",
    save: "Save",
    saved: "Saved ✓",
    attachments: "Attachments",
    addImage: "+ Image",
    noEntries: "No entries yet — fill in today's page.",
    noAttachments: "No attachments yet — add an image on today's page.",
    noRated: "No rated entries yet.",
    startToday: "start today",
    entriesCount: "entries",
    diarySettings: "Diary settings",
    titleField: "Title",
    subtitleField: "Subtitle (on the cover)",
    ratingLabelField: "Rating name (e.g. Happiness rating)",
    coverColor: "Cover color",
    customColor: "Custom colour",
    questionsField: "Daily questions (one per line)",
    deleteDiary: "Delete diary",
    saveSettings: "Save settings",
    deleteConfirm: "Delete diary \"{title}\" with all entries?",
    untitled: "Untitled",
    question: "Question",
    defaultQuestion: "How was your day?",
    dayRating: "Day rating",
    font: "Font",
    size: "Size",
    small: "Small",
    normal: "Normal",
    large: "Large",
    huge: "Huge",
    customFont: "Custom font…",
    customFontPrompt: "Font name (as installed on this computer):",
    mood: "Mood",
    streak: "Streak",
    best: "best",
    days: "days",
    chooseType: "What kind of diary?",
    typeDaily: "Daily diary",
    typeDailyDesc: "Questions of the day, ratings, moods",
    typeDreams: "Dream list",
    typeDreamsDesc: "Wishes and dreams, mark them when they come true",
    typeLetters: "Letters to the future",
    typeLettersDesc: "Sealed letters that open on a chosen date",
    dreamsTitle: "✨ My dreams",
    addDream: "+ Dream",
    dreamPlaceholder: "I dream of…",
    cameTrue: "Came true!",
    cameTrueOn: "Came true",
    undo: "Undo",
    noDreams: "No dreams yet — write down the first one.",
    lettersTitle: "✉ Letters to the future",
    subjectPlaceholder: "Subject (optional)",
    letterPlaceholder: "Write a letter to your future self…",
    openOn: "Open on",
    seal: "Seal the letter",
    sealedUntil: "Sealed until",
    openLetter: "Open the letter",
    writtenOn: "Written on",
    readyToOpen: "Ready to open!",
    noLetters: "No letters yet — write the first one.",
    pickDate: "Choose an opening date in the future.",
    emptyLetter: "The letter is empty.",
    deleteLetter: "Delete this letter?",
    deleteDream: "Delete this dream?",
    lettersReady: "letters ready to open",
    ok: "OK",
    cancel: "Cancel",
    pinField: "PIN code",
    setPin: "Set PIN",
    changePin: "Change PIN",
    removePin: "Remove PIN",
    enterPin: "Enter PIN",
    newPin: "New PIN",
    repeatPin: "Repeat PIN",
    appLock: "App lock",
    yearAgo: "A year ago today",
    monthAgo: "A month ago today",
    randomMemory: "A random memory",
    anotherMemory: "Another memory",
    noMemories: "No memories yet — they appear once you have past entries.",
    edit: "Edit",
    saveAsPdf: "Save as PDF",
    delete: "Delete",
    deleteEntryConfirm: "Delete the entry for {date}?",
    themes: "Themes",
    createOwn: "Create your own",
    builderTitle: "Theme builder",
    colorsSection: "Colors",
    fontsSection: "Fonts",
    imagesSection: "Images",
    colorDesk: "Background",
    colorPaper: "Paper",
    colorInk: "Text",
    colorInkSoft: "Secondary text",
    colorLine: "Lines & borders",
    colorAccent: "Accent",
    colorBar: "Top bar",
    colorBarInk: "Top bar text",
    colorBtn: "Buttons",
    colorBtnInk: "Button text",
    colorField: "Input fields",
    colorFieldInk: "Text in fields",
    groupBase: "Base",
    groupUi: "Interface",
    colorGold: "Gold accents",
    fontMain: "Interface font",
    fontDisplay: "Display font (headers, dates)",
    imgBg: "App background",
    imgPaper: "Page paper",
    imgBand: "Cover band",
    imgPolaroid: "Polaroid frame",
    coverOf: "Cover:",
    chooseFile: "Choose…",
    removeFile: "Remove",
    saveTheme: "Save theme",
    defaultFont: "Default",
    customThemeName: "My theme",
    rename: "Rename",
    themeName: "Theme name",
    themeSavedTo: "Theme file saved to:",
    importTheme: "Import theme",
    invalidTheme: "This file is not a Diary theme.",
    deleteThemeConfirm: "Delete theme \"{name}\"?",
    chartMonth: "Month",
    chartYear: "Year",
    exportedOn: "Exported",
    printHint: "In the print window choose \"Microsoft Print to PDF\" (or \"Save as PDF\") as the printer.",
    dreamsPdfTitle: "Dreams",
    lettersPdfTitle: "Letters",
    sealedLetterLine: "Sealed letter",
    rename: "Rename",
    importTheme: "Load a theme file",
    deleteThemeConfirm: "Delete theme \"{title}\"?",
    themeName: "Theme name",
    openEntry: "Open entry",
    attachmentsWord: "attachments",
    newDiaryTitle: "New diary",
  },
  ru: {
    myDiaries: "Мои дневники",
    newDiary: "+ Новый дневник",
    backToShelf: "← На полку",
    backToEntry: "← К записи",
    backToDreams: "← К снам",
    backToLetters: "← К письмам",
    entriesBtn: "Записи",
    settingsBtn: "Настроить",
    ratingTab: "Рейтинг",
    allAttachments: "Все вложения",
    allAttachmentsTitle: "🖇 Все вложения",
    allEntries: "Все записи",
    save: "Сохранить",
    saved: "Сохранено ✓",
    attachments: "Вложения",
    addImage: "+ Картинка",
    noEntries: "Записей пока нет — заполни страницу сегодняшнего дня.",
    noAttachments: "Вложений пока нет — добавь картинку на странице дня.",
    noRated: "Оценённых записей пока нет.",
    startToday: "начни сегодня",
    entriesCount: "записей",
    diarySettings: "Настройки дневника",
    titleField: "Название",
    subtitleField: "Подзаголовок (на обложке)",
    ratingLabelField: "Название рейтинга (напр. Рейтинг счастья)",
    coverColor: "Цвет обложки",
    customColor: "Свой цвет",
    questionsField: "Вопросы дня (каждый с новой строки)",
    deleteDiary: "Удалить дневник",
    saveSettings: "Сохранить настройки",
    deleteConfirm: "Удалить дневник «{title}» со всеми записями?",
    untitled: "Без названия",
    question: "Вопрос",
    defaultQuestion: "Как прошёл день?",
    dayRating: "Рейтинг дня",
    font: "Шрифт",
    size: "Размер",
    small: "Мелкий",
    normal: "Обычный",
    large: "Крупный",
    huge: "Большой",
    customFont: "Свой шрифт…",
    customFontPrompt: "Название шрифта (как он установлен на компьютере):",
    mood: "Настроение",
    streak: "Стрик",
    best: "рекорд",
    days: "дней",
    chooseType: "Какой это будет дневник?",
    typeDaily: "Ежедневник",
    typeDailyDesc: "Вопросы дня, рейтинги, настроения",
    typeDreams: "Список мечт",
    typeDreamsDesc: "Желания и мечты, отмечай сбывшиеся",
    typeLetters: "Письма в будущее",
    typeLettersDesc: "Запечатанные письма, которые откроются в нужный день",
    dreamsTitle: "✨ Мои мечты",
    addDream: "+ Мечта",
    dreamPlaceholder: "Я мечтаю…",
    cameTrue: "Сбылась!",
    cameTrueOn: "Сбылась",
    undo: "Вернуть",
    noDreams: "Мечт пока нет — запиши первую.",
    lettersTitle: "✉ Письма в будущее",
    subjectPlaceholder: "Тема (необязательно)",
    letterPlaceholder: "Напиши письмо себе в будущее…",
    openOn: "Открыть",
    seal: "Запечатать письмо",
    sealedUntil: "Запечатано до",
    openLetter: "Открыть письмо",
    writtenOn: "Написано",
    readyToOpen: "Можно открывать!",
    noLetters: "Писем пока нет — напиши первое.",
    pickDate: "Выбери дату открытия в будущем.",
    emptyLetter: "Письмо пустое.",
    deleteLetter: "Удалить это письмо?",
    deleteDream: "Удалить эту мечту?",
    lettersReady: "писем можно открыть",
    ok: "OK",
    cancel: "Отмена",
    pinField: "Пин-код",
    setPin: "Установить пин",
    changePin: "Сменить пин",
    removePin: "Убрать пин",
    enterPin: "Введи пин-код",
    newPin: "Новый пин-код",
    repeatPin: "Повтори пин-код",
    appLock: "Замок приложения",
    yearAgo: "Год назад в этот день",
    monthAgo: "Месяц назад в этот день",
    randomMemory: "Случайное воспоминание",
    anotherMemory: "Другое воспоминание",
    noMemories: "Воспоминаний пока нет — они появятся, когда накопятся записи.",
    edit: "Редактировать",
    saveAsPdf: "Сохранить как PDF",
    delete: "Удалить",
    deleteEntryConfirm: "Удалить запись за {date}?",
    themes: "Темы",
    createOwn: "Создать свою",
    builderTitle: "Конструктор темы",
    colorsSection: "Цвета",
    fontsSection: "Шрифты",
    imagesSection: "Картинки",
    colorDesk: "Фон",
    colorPaper: "Бумага",
    colorInk: "Текст",
    colorInkSoft: "Второстепенный текст",
    colorLine: "Линии и рамки",
    colorAccent: "Акцент",
    colorBar: "Шапка",
    colorBarInk: "Текст шапки",
    colorBtn: "Кнопки",
    colorBtnInk: "Текст кнопок",
    colorField: "Поля ввода",
    colorFieldInk: "Текст в полях",
    groupBase: "Основные",
    groupUi: "Интерфейс",
    colorGold: "Золотые акценты",
    fontMain: "Шрифт интерфейса",
    fontDisplay: "Акцентный шрифт (заголовки, даты)",
    imgBg: "Фон приложения",
    imgPaper: "Бумага страниц",
    imgBand: "Манжетка обложек",
    imgPolaroid: "Рамка полароида",
    coverOf: "Обложка:",
    chooseFile: "Выбрать…",
    removeFile: "Убрать",
    saveTheme: "Сохранить тему",
    defaultFont: "По умолчанию",
    customThemeName: "Моя тема",
    rename: "Переименовать",
    themeName: "Название темы",
    themeSavedTo: "Файл темы сохранён:",
    importTheme: "Загрузить тему",
    invalidTheme: "Этот файл — не тема Diary.",
    deleteThemeConfirm: "Удалить тему «{name}»?",
    chartMonth: "Месяц",
    chartYear: "Год",
    exportedOn: "Экспортировано",
    printHint: "В окне печати выбери принтером «Microsoft Print to PDF» (или «Сохранить как PDF»).",
    dreamsPdfTitle: "Мечты",
    lettersPdfTitle: "Письма",
    sealedLetterLine: "Запечатанное письмо",
    rename: "Переименовать",
    importTheme: "Загрузить файл темы",
    deleteThemeConfirm: "Удалить тему «{title}»?",
    themeName: "Название темы",
    openEntry: "Открыть запись",
    attachmentsWord: "вложения",
    newDiaryTitle: "Новый дневник",
  },
};

const SYMBOL_GROUPS = [
  ["Stars", "★ ☆ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ⋆ ✵ ✶ ✷ ✸ ✹ ❋"],
  ["Sparkles", "✨ ⋆ ˚ ｡ ⭒ ⭑ ✧ ˖ ° ✦ ⊹ ࿐ ๋ ࣭ ⭑"],
  ["Hearts", "♡ ♥ ❤ ❥ ❦ ❧ ღ ᥫ᭡ ୨୧ ❣ 🖤 🤍 💗 💕"],
  ["Arrows", "→ ← ↑ ↓ ⇒ ⇐ ⇑ ⇓ ↗ ↘ ↖ ↙ ⇾ ⇽ ➜ ➔ ➤ ➢ ⟶ ⟵"],
  ["Curved arrows", "↪ ↩ ↺ ↻ ⤴ ⤵ ↰ ↱ ↲ ↳ ⮕ ⤷ ⤶ ➥ ➦"],
  ["Flowers", "✿ ❀ ❁ ✾ ❃ ❋ ✽ ❊ ⚘ ❦ ❧ 🌸 🌷 🌼"],
  ["Plants", "🌿 🍃 🍀 🌱 🌾 ☘ 🍂 🍁 🪴 🌵"],
  ["Moon & sky", "☾ ☽ ✩ ⋆ ☁ ☀ ⭐ 🌙 🌘 🌕 ☄ 💫"],
  ["Weather", "☀ ☁ ☂ ☔ ❄ ☃ ⛄ ⚡ 🌈 🌤 🌧 🌩"],
  ["Snowflakes", "❄ ❅ ❆ ✻ ✼ ❉ ❊ ✽ ✾ ✿ ❋"],
  ["Music", "♪ ♫ ♩ ♬ ♭ ♮ ♯ 𝄞 🎵 🎶 🎧 ℗"],
  ["Checks", "✓ ✔ ☑ ✗ ✘ ☒ ⍻ 🗸"],
  ["Bullets", "• ◦ ‣ ∙ · ⁃ ○ ● ◉ ◎ ⦿ ⊙ ⊚"],
  ["Diamonds", "◆ ◇ ❖ ⬥ ⬦ ⬧ ⬨ ⌑ ◈ ⟡ ᛭"],
  ["Squares", "■ □ ▪ ▫ ◾ ◽ ▣ ▤ ▥ ▦ ▧ ▨ ▩ ⬚"],
  ["Triangles", "▲ △ ▼ ▽ ◀ ◁ ▶ ▷ ◢ ◣ ◤ ◥ ‣ ⯈"],
  ["Circles", "○ ● ◐ ◑ ◒ ◓ ◔ ◕ ⊕ ⊖ ⊗ ⊘ ⊙ ◍ ◌"],
  ["Dividers", "─ ━ ═ ┄ ┅ ┈ ┉ ﹏ 〜 ～ ⎯ ⌁ ⌇"],
  ["Corners", "┌ ┐ └ ┘ ╔ ╗ ╚ ╝ ⌜ ⌝ ⌞ ⌟ ﹂ ﹁ ⌈ ⌉ ⌊ ⌋"],
  ["Frames", "╭ ╮ ╰ ╯ ═ ║ ╠ ╣ ╦ ╩ ╬"],
  ["Brackets", "« » ‹ › 〈 〉 《 》 「 」 『 』 【 】 〔 〕 ❪ ❫ ❮ ❯"],
  ["Quotes", "“ ” ‘ ’ „ ‟ ❝ ❞ ❛ ❜ 〝 〞"],
  ["Asterisks", "* ⁎ ⁑ ⁂ ✢ ✣ ✤ ✥ ✱ ✲ ✳ ✴ ❈"],
  ["Crosses", "✕ ✖ ✚ ✛ ✜ ✝ ✞ ✟ ☨ ☦ † ‡ ⨯"],
  ["Attention", "! ¡ ⚠ ‼ ⁉ ❗ ❕ ⚡ 🔔 📌 📍"],
  ["Questions", "? ¿ ⁇ ⁈ ⁉ ❓ ❔ ﹖"],
  ["Hands", "☜ ☞ ☝ ☟ ✌ ✍ 👆 👇 👈 👉 🤍 🫶"],
  ["Faces", "☺ ☻ ツ シ ヅ 〠 ꈍ ᴗ ꈍ ⍢ ⍤ ⍥"],
  ["Kaomoji parts", "◕ ◔ ◡ ﹏ ω ﻌ ᵕ ˘ ᴗ ㅅ ﹃ ﹄ ᗜ"],
  ["Animals", "🐈 🐕 🐦 🦋 🐝 🐞 🐾 🦢 🐚 🕊"],
  ["Sea", "🌊 🐚 ⚓ 🐳 🐬 🦑 ⛵ 🧜 ˖°𓇼"],
  ["Fire & light", "🔥 🕯 💡 ✨ ☄ 🎇 🎆 ⚡"],
  ["Cozy", "☕ 🍵 🍰 🧸 🕯 🍪 🥐 🫖 🍯"],
  ["Time", "⏰ ⌛ ⏳ ⌚ 🕐 🕑 🕒 🕓 ⧖ ⧗"],
  ["Writing", "✎ ✏ ✒ 🖊 🖋 📖 📚 📝 🗒 ✍ 📜"],
  ["Mail", "✉ 📩 📨 📮 ☎ ✆ 📞 📬"],
  ["Space", "☉ ☽ ☿ ♀ ♂ ♃ ♄ ♅ ♆ ♇ 🪐 🌌"],
  ["Zodiac", "♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓"],
  ["Games", "♠ ♣ ♥ ♦ ♤ ♧ ♡ ♢ 🎲 🃏 ♔ ♕ ♖ ♗ ♘ ♙"],
  ["Math", "∞ ± × ÷ ≈ ≠ ≤ ≥ √ ∑ ∫ π Δ Ω ∂ ∅ ∈ ∴"],
  ["Currency", "$ € £ ¥ ₽ ₩ ¢ ₿ ¤ ₴ ₸"],
  ["Signs", "№ § ¶ © ® ™ ℠ ℮ ℅"],
  ["Circled digits", "① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩ ⓪ ➊ ➋ ➌ ➍ ➎"],
  ["Circled letters", "ⓐ ⓑ ⓒ ⓓ ⓔ Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ ⓜ ⓝ"],
  ["Roman", "Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅹ Ⅺ Ⅻ"],
  ["Blocks", "░ ▒ ▓ █ ▄ ▀ ▌ ▐ ▖ ▗ ▘ ▝ ▚ ▞"],
  ["Braille", "⠁ ⠃ ⠉ ⠙ ⠑ ⣿ ⣷ ⣯ ⣟ ⡿ ⢿ ⠛ ⠿"],
  ["Waves", "꒰ ꒱ ꒷ ꒦ ⌒ ୨ ୧ ⌣ ᨒ ᨏ 𓂃 𓈒"],
  ["Eastern", "㊗ ㊙ 〶 〄 卍 ࿊ ࿋ ࿌ ࿅ ჻"],
  ["Misc", "☮ ☯ ⚛ ♻ ⚜ 🔱 ⚔ 🗝 🎐 🎀 🩰 🪞"],
];

const DEFAULT_DATA = {
  settings: { lang: "en" },
  notebooks: [
    {
      id: "observe",
      title: "Self-observation",
      subtitle: "What mattered, where attention and energy went",
      color: "#c96f4a",
      ratingLabel: "Day rating",
      questions: [
        "What took most of your attention today?",
        "What gave you energy, and what drained it?",
        "Who did you talk to and how did it feel?",
      ],
      entries: {},
    },
    {
      id: "gratitude",
      title: "Gratitude diary",
      subtitle: "Noticing the good even on hard days",
      color: "#7fb2e5",
      ratingLabel: "Gratitude rating",
      questions: [
        "What are you grateful for today?",
        "Which moment of the day is worth remembering?",
        "Who or what made the day easier?",
      ],
      entries: {},
    },
    {
      id: "facts",
      title: "Facts about me",
      subtitle: "Getting to know myself, one question a day",
      color: "#e0a61b",
      ratingLabel: "Day rating",
      questions: ["Question of the day: what did I learn about myself?"],
      entries: {},
    },
  ],
};

const THEME_VARS = ["desk", "paper", "ink", "inkSoft", "line", "accent", "gold",
  "bar", "barInk", "btn", "btnInk", "field", "fieldInk"];
const CSS_VAR_NAMES = {
  desk: "--desk", paper: "--paper", ink: "--ink", inkSoft: "--ink-soft",
  line: "--line", accent: "--accent", gold: "--gold",
  bar: "--bar", barInk: "--bar-ink",          // шапка и её текст
  btn: "--btn", btnInk: "--btn-ink",          // кнопки шапки
  field: "--field", fieldInk: "--field-ink",  // поля ввода
};

// у старых тем этих цветов нет — выводим их из основных
function fillDerived(colors) {
  const c = { ...colors };
  c.bar ||= mixHex(c.ink, c.desk, 0.62);
  c.barInk ||= c.paper;
  c.btn ||= mixHex(c.paper, c.desk, 0.35);
  c.btnInk ||= c.ink;
  c.field ||= c.paper;
  c.fieldInk ||= c.ink;
  return c;
}

function mixHex(a, b, k) {
  const p = (h) => [1, 3, 5].map((i) => parseInt(String(h).slice(i, i + 2), 16));
  try {
    const x = p(a), y = p(b);
    return "#" + x.map((v, i) => Math.round(v + (y[i] - v) * k).toString(16).padStart(2, "0")).join("");
  } catch (e) { return a; }
}

const THEMES = {
  warm: { name: "Warm Paper", colors: { desk: "#ede9e1", paper: "#fdfbf6", ink: "#3a3530", inkSoft: "#8a8178", line: "#e3ddd2", accent: "#c96f4a", gold: "#b9974e" } },
  mono: { name: "Ink & Paper", colors: { desk: "#f1f1ef", paper: "#ffffff", ink: "#1c1c1c", inkSoft: "#767676", line: "#dcdcdc", accent: "#1c1c1c", gold: "#5a5a5a" } },
  midnight: { name: "Midnight", colors: { desk: "#1d1b22", paper: "#27242e", ink: "#ece7dd", inkSoft: "#9a94a6", line: "#3a3743", accent: "#d98d5f", gold: "#c9a86a" } },
  rose: { name: "Rose", colors: { desk: "#f6e8ea", paper: "#fdf6f7", ink: "#4a3538", inkSoft: "#a3868b", line: "#ecd5d9", accent: "#d4708c", gold: "#c99a4e" } },
  sage: { name: "Sage", colors: { desk: "#e7ebe2", paper: "#f7f9f3", ink: "#33402f", inkSoft: "#7f8b78", line: "#d5ddcd", accent: "#6f8f5f", gold: "#a89a4e" } },
  ocean: { name: "Ocean", colors: { desk: "#e3ecf0", paper: "#f8fbfc", ink: "#2c3e48", inkSoft: "#7c93a0", line: "#d0dee5", accent: "#4a8fb5", gold: "#b9974e" } },
  lavender: { name: "Lavender", colors: { desk: "#ebe6f2", paper: "#faf8fd", ink: "#3d3548", inkSoft: "#8f86a0", line: "#ddd4ea", accent: "#8a6fc9", gold: "#9a7fc0" } },
  coffee: { name: "Coffee", colors: { desk: "#e8e0d5", paper: "#f8f3ea", ink: "#3c2f26", inkSoft: "#8d7c6c", line: "#ddd0c0", accent: "#8a6448", gold: "#b9974e" } },
};

function findCustomTheme(id) {
  return (data.settings.themes || []).find((th) => th.id === id);
}

function effectiveTheme() {
  const custom = findCustomTheme(data.settings.theme);
  if (custom) return custom;
  return { colors: { ...(THEMES[data.settings.theme] || THEMES.warm).colors } };
}

function applyTheme(theme) {
  const root = document.documentElement;
  const colors = fillDerived(theme?.colors || THEMES.warm.colors);
  for (const key of THEME_VARS)
    if (colors[key]) root.style.setProperty(CSS_VAR_NAMES[key], colors[key]);
  if (theme?.fontMain) root.style.setProperty("--font-main", theme.fontMain);
  else root.style.removeProperty("--font-main");
  if (theme?.fontDisplay) root.style.setProperty("--font-display", theme.fontDisplay);
  else root.style.removeProperty("--font-display");
}

const MOODS = ["😊", "🥰", "😌", "😐", "😢", "😡", "😴", "🤩"];

let data = null;
let currentBook = null;
let externalAssets = {};
let lastEditor = null;
let todayImages = [];
let todayRating = null;
let todayMood = null;
let calMonth = null;
let lbIndex = 0;
let lbCount = 0;

function t(key, vars) {
  const lang = data?.settings?.lang || "en";
  let s = I18N[lang][key] ?? I18N.en[key] ?? key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, v);
  return s;
}

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  document.querySelectorAll("[data-title-i18n]").forEach((el) => (el.title = t(el.dataset.titleI18n)));
  const lang = data?.settings?.lang || "en";
  $("#btn-lang").textContent = lang === "en" ? "RU" : "EN";
  document.documentElement.lang = lang;
}

async function toggleLang() {
  data.settings.lang = data.settings.lang === "en" ? "ru" : "en";
  await saveData();
  applyLang();
  if (currentBook) {
    renderPage(currentPage);
  } else {
    renderShelf();
  }
}

async function loadExternalAssets() {
  if (!invoke) return;
  try {
    const raw = await invoke("load_external_assets");
    const map = JSON.parse(raw || "{}");
    for (const [name, b64] of Object.entries(map)) {
      externalAssets[name] = `data:image/png;base64,${b64}`;
    }
  } catch (e) { console.error(e); }
  applyExternalAssets();
}

function assetUrl(name) {
  return externalAssets[name] || `assets/${name}`;
}

function applyExternalAssets() {
  document.body.style.backgroundImage =
    externalAssets["bg.png"] ? `url('${externalAssets["bg.png"]}')` : "";
  document.querySelectorAll(".paper").forEach((p) =>
    (p.style.backgroundImage =
      externalAssets["paper.png"] ? `url('${externalAssets["paper.png"]}')` : ""));
  if (externalAssets["icons/logo.png"]) {
    const logo = document.querySelector(".logo-img");
    if (logo) { logo.src = externalAssets["icons/logo.png"]; logo.style.display = ""; }
  }
  let st = document.getElementById("polaroid-style");
  if (!st) {
    st = document.createElement("style");
    st.id = "polaroid-style";
    document.head.appendChild(st);
  }
  st.textContent = externalAssets["polaroid.png"]
    ? `.lb-polaroid, .clip-polaroid { background-image: url('${externalAssets["polaroid.png"]}'); background-size: 100% 100%; }`
    : "";
  setBtnIcon("#lb-prev", "icons/arrow-left.png");
  setBtnIcon("#lb-next", "icons/arrow-right.png");
  setBtnIcon("#lb-close", "icons/close.png");
  setBtnIcon("#btn-clips", "icons/clip.png");
  setBtnIcon("#btn-rating-tab", "icons/rating-tab.png");
  setBtnIcon("#btn-memory", "icons/dice.png");
}

function setBtnIcon(sel, assetName) {
  if (!externalAssets[assetName]) return;
  const btn = document.querySelector(sel);
  if (btn) btn.innerHTML =
    `<img src="${externalAssets[assetName]}" alt="" style="width:60%;height:60%;object-fit:contain;vertical-align:middle;">`;
}

function clipIconHtml(count) {
  if (externalAssets["icons/clip.png"])
    return `<img class="h-clip" src="${externalAssets["icons/clip.png"]}" title="${t("attachments")} (${count})" alt="" style="width:16px;height:16px;object-fit:contain;">`;
  return `<span class="h-clip" title="${t("attachments")} (${count})">🖇</span>`;
}

function ratingIconHtml(nb) {
  const custom = externalAssets[`icons/rate_${nb.id}.png`];
  if (custom)
    return `<img src="${custom}" alt="" style="width:18px;height:18px;object-fit:contain;vertical-align:middle;">`;
  return "★";
}

function moodIconHtml(idx, size = 18) {
  if (idx == null) return "—";
  const custom = externalAssets[`icons/mood_${idx + 1}.png`];
  if (custom)
    return `<img src="${custom}" alt="" style="width:${size}px;height:${size}px;object-fit:contain;vertical-align:middle;">`;
  return MOODS[idx] ?? "—";
}

async function loadData() {
  try {
    if (invoke) {
      const raw = await invoke("load_data");
      if (raw && raw.trim()) { data = JSON.parse(raw); migrate(); return; }
    } else {
      const raw = localStorage.getItem("diary");
      if (raw) { data = JSON.parse(raw); migrate(); return; }
    }
  } catch (e) { console.error(e); }
  data = structuredClone(DEFAULT_DATA);
  migrate();
  await saveData();
}

function migrate() {
  if (!data.settings) data.settings = { lang: "en" };
  if (!data.settings.lang) data.settings.lang = "en";
  if (!data.settings.theme) data.settings.theme = "warm";
  if (!data.settings.themes) data.settings.themes = [];
  if (data.settings.customTheme) {
    const id = "custom_" + Date.now();
    data.settings.themes.push({ id, name: "My theme", ...data.settings.customTheme });
    if (data.settings.theme === "custom") data.settings.theme = id;
    delete data.settings.customTheme;
  }
  for (const nb of data.notebooks) {
    if (!nb.type) nb.type = "daily";
    if (!nb.ratingLabel) nb.ratingLabel = t("dayRating");
    if (nb.type === "dreams" && !nb.dreams) nb.dreams = [];
    if (nb.type === "letters" && !nb.letters) nb.letters = [];
  }
}

async function saveData() {
  const json = JSON.stringify(data, null, 2);
  try {
    if (invoke) await invoke("save_data", { json });
    else localStorage.setItem("diary", json);
  } catch (e) { console.error(e); }
}

const $ = (sel) => document.querySelector(sel);
const todayKey = () => new Date().toISOString().slice(0, 10);
const fmtDate = (key) =>
  new Date(key + "T12:00:00").toLocaleDateString(
    data?.settings?.lang === "ru" ? "ru-RU" : "en-US",
    { weekday: "long", day: "numeric", month: "long", year: "numeric" });

function normalizeEntry(entry) {
  if (!entry) return { answers: {}, images: [], rating: null, mood: null };
  if (entry.answers || entry.images || entry.rating !== undefined)
    return {
      answers: entry.answers || {},
      images: entry.images || [],
      rating: entry.rating ?? null,
      mood: entry.mood ?? null,
    };
  return { answers: entry, images: [], rating: null, mood: null };
}

function coverStyle(nb) {
  const url = assetUrl(`covers/${nb.id}.png`);
  return `background-image: url('${url}'), linear-gradient(${nb.color}, ${nb.color});`;
}

function bandStyle() {
  const ext = externalAssets["band.png"];
  return ext ? `background-image: url('${ext}');` : "";
}

function lockIconHtml() {
  if (externalAssets["icons/lock.png"])
    return `<img src="${externalAssets["icons/lock.png"]}" alt="🔒" style="width:15px;height:15px;object-fit:contain;vertical-align:middle;">`;
  return "🔒";
}

function renderShelf() {
  $("#shelf-date").textContent = fmtDate(todayKey());
  const shelf = $("#shelf");
  shelf.innerHTML = "";

  for (const nb of data.notebooks) {
    const type = nb.type || "daily";
    let countLine;
    if (type === "dreams") {
      const total = (nb.dreams || []).length;
      const done = (nb.dreams || []).filter((d) => d.fulfilled).length;
      countLine = total ? `✨ ${done} / ${total}` : t("startToday");
    } else if (type === "letters") {
      const total = (nb.letters || []).length;
      countLine = total ? `✉ ${total}` : t("startToday");
    } else {
      const count = Object.keys(nb.entries).length;
      countLine = count ? t("entriesCount") + ": " + count : t("startToday");
    }
    const ready = type === "letters" ? lettersReadyCount(nb) : 0;
    const badge = ready
      ? `<div class="book-badge" title="${ready} ${t("lettersReady")}">${envelopeHtml()}<span>${ready}</span></div>`
      : "";
    const lock = nb.pin ? `<div class="book-lock">${lockIconHtml()}</div>` : "";
    const el = document.createElement("div");
    el.className = "book";
    el.style.cssText = coverStyle(nb);
    el.innerHTML = `
      ${badge}${lock}
      <div class="book-foil">${escapeHtml(nb.title)}</div>
      <div class="book-band" style="${bandStyle()}">
        <div class="band-title">${escapeHtml(nb.title)}</div>
        <div class="band-sub">${escapeHtml(nb.subtitle || "")}</div>
        <div class="band-count">${countLine}</div>
      </div>`;
    el.onclick = () => openBook(nb.id);
    el.oncontextmenu = (e) => {
      e.preventDefault();
      showCtx(e.clientX, e.clientY, [
        { label: t("edit"), fn: async () => {
            const opened = await openBook(nb.id);
            if (opened === false) return;
            showPage("edit");
            renderEdit();
          } },
        { label: t("saveAsPdf"), fn: async () => {
            if (nb.pin) {
              const ok = await requestPin("verify", nb.pin);
              if (!ok) return;
            }
            exportDiaryPdf(nb);
          } },
        { label: t("delete"), danger: true, fn: () => deleteDiaryById(nb.id) },
      ]);
    };
    shelf.appendChild(el);
  }

  const add = document.createElement("div");
  add.className = "book-add";
  add.textContent = t("newDiary");
  add.onclick = openTypeChooser;
  shelf.appendChild(add);
}

async function openBook(id) {
  const nb = data.notebooks.find((n) => n.id === id);
  if (!nb) return false;
  if (nb.pin) {
    const ok = await requestPin("verify", nb.pin);
    if (!ok) return false;
  }
  currentBook = nb;
  $("#shelf-screen").classList.add("hidden");
  $("#book-screen").classList.remove("hidden");
  const daily = (currentBook.type || "daily") === "daily";
  $("#btn-rating-tab").style.display = daily ? "" : "none";
  $("#btn-clips").style.display = daily ? "" : "none";
  $("#btn-history").style.display = daily ? "" : "none";
  const start = mainPageOf(currentBook);
  showPage(start);
  renderPage(start);
}

let currentPage = "today";

function renderPage(name) {
  const map = {
    today: renderToday,
    history: () => renderHistory(),
    clips: renderClips,
    rating: renderRatingPage,
    edit: renderEdit,
    dreams: renderDreams,
    letters: renderLetters,
  };
  map[name]?.();
}

function showPage(name) {
  currentPage = name;
  for (const p of ["today", "history", "edit", "clips", "rating", "dreams", "letters"])
    $("#page-" + p).classList.toggle("hidden", p !== name);
  $("#book-title").textContent = currentBook.title;
  $("#book-subtitle").textContent = currentBook.subtitle || "";
  // из любого раздела можно вернуться к записи, не выходя на полку
  const home = mainPageOf(currentBook);
  const btn = $("#btn-today");
  btn.classList.toggle("hidden", name === home);
  btn.textContent = home === "today" ? t("backToEntry")
    : home === "dreams" ? t("backToDreams") : t("backToLetters");
}

// главная страница дневника зависит от его типа
function mainPageOf(nb) {
  const type = nb?.type || "daily";
  return type === "daily" ? "today" : type;
}

function goToEntry() {
  const home = mainPageOf(currentBook);
  showPage(home);
  renderPage(home);
}

let editKey = null;

function renderToday(key) {
  editKey = key || todayKey();
  $("#paper-date").textContent = fmtDate(editKey);
  const list = $("#questions-list");
  list.innerHTML = "";
  const entry = normalizeEntry(currentBook.entries[editKey]);
  todayImages = [...entry.images];
  todayRating = entry.rating;
  todayMood = entry.mood;

  currentBook.questions.forEach((q, i) => {
    const block = document.createElement("div");
    block.className = "q-block";
    block.innerHTML = `<div class="q-text">${escapeHtml(q)}</div>`;
    const ed = document.createElement("div");
    ed.className = "editor";
    ed.contentEditable = "true";
    ed.dataset.qi = i;
    ed.innerHTML = entry.answers[i] || "";
    ed.addEventListener("focus", () => (lastEditor = ed));
    block.appendChild(ed);
    list.appendChild(block);
  });

  renderRatingButton();
  renderAttachments();
  $("#symbols-panel").classList.add("hidden");
  $("#rating-popover").classList.add("hidden");
  $("#save-status").textContent = "";
}

let modalResolve = null;

function showModal({ message, input = false, confirmOnly = false, preset = "" }) {
  return new Promise((resolve) => {
    modalResolve = resolve;
    $("#modal-msg").textContent = message;
    const inp = $("#modal-input");
    inp.classList.toggle("hidden", !input);
    inp.value = preset;
    inp.placeholder = "";
    $("#modal-cancel").style.display = confirmOnly ? "none" : "";
    $("#modal-cancel").textContent = t("cancel");
    $("#modal-ok").textContent = t("ok");
    $("#modal").classList.remove("hidden");
    if (input) setTimeout(() => inp.focus(), 50);
  });
}

function closeModal(result) {
  $("#modal").classList.add("hidden");
  if (modalResolve) { modalResolve(result); modalResolve = null; }
}

const appAlert = (message) => showModal({ message, confirmOnly: true });
const appConfirm = async (message) => (await showModal({ message })) === true;
async function appPrompt(message, preset = "") {
  const res = await showModal({ message, input: true, preset });
  return res === true ? $("#modal-input").value.trim() : null;
}

function themeCtxItems(id, theme, isPreset) {
  const items = [];
  if (!isPreset)
    items.push({ label: t("rename"), fn: () => renameTheme(id) });
  items.push({ label: t("edit"), fn: () => openBuilder(isPreset ? null : id, theme) });
  items.push({ label: t("save"), fn: () => exportTheme(theme) });
  if (!isPreset)
    items.push({ label: t("delete"), danger: true, fn: () => deleteTheme(id) });
  return items;
}

function openThemePicker() {
  applyLang();
  const grid = $("#theme-grid");
  grid.innerHTML = "";

  const entries = Object.entries(THEMES).map(([id, th]) => [id, th, true]);
  for (const th of data.settings.themes || []) entries.push([th.id, th, false]);

  for (const [id, theme, isPreset] of entries) {
    const c = theme.colors;
    const b = document.createElement("button");
    b.className = "theme-swatch" + (data.settings.theme === id ? " active" : "");
    const dots = [c.desk, c.paper, c.ink, c.accent, c.gold]
      .map((col) => `<span class="sw-c" style="background:${col}"></span>`)
      .join("");
    b.innerHTML = `
      <span class="sw-name">${escapeHtml(theme.name)}</span>
      <span class="sw-dots">${dots}</span>`;
    b.onclick = async () => {
      data.settings.theme = id;
      await saveData();
      applyTheme(effectiveTheme());
      openThemePicker();
    };
    b.oncontextmenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      showCtx(e.clientX, e.clientY, themeCtxItems(id, theme, isPreset));
    };
    grid.appendChild(b);
  }

  const create = document.createElement("button");
  create.className = "theme-swatch theme-create";
  create.innerHTML = `<span class="sw-plus">+</span><span class="sw-name">${t("createOwn")}</span>`;
  create.onclick = () => openBuilder(null, null);
  grid.appendChild(create);

  $("#theme-overlay").classList.remove("hidden");
}

async function renameTheme(id) {
  const th = findCustomTheme(id);
  if (!th) return;
  const name = await appPrompt(t("themeName"), th.name);
  if (!name) return;
  th.name = name;
  await saveData();
  openThemePicker();
}

async function deleteTheme(id) {
  const th = findCustomTheme(id);
  if (!th) return;
  if (!(await appConfirm(t("deleteThemeConfirm", { name: th.name })))) return;
  data.settings.themes = data.settings.themes.filter((x) => x.id !== id);
  if (data.settings.theme === id) data.settings.theme = "warm";
  await saveData();
  applyTheme(effectiveTheme());
  openThemePicker();
}

async function exportTheme(theme) {
  const payload = {
    app: "diary-theme",
    v: 1,
    name: theme.name,
    colors: theme.colors,
    fontMain: theme.fontMain || "",
    fontDisplay: theme.fontDisplay || "",
  };
  const safe = (theme.name || "theme").replace(/[^A-Za-z0-9 _-]/g, "").trim() || "theme";
  if (!invoke) return;
  try {
    const path = await invoke("save_theme_file", {
      filename: safe + ".json",
      json: JSON.stringify(payload, null, 2),
    });
    appAlert(t("themeSavedTo") + "\n" + path);
  } catch (e) { console.error(e); }
}

async function importThemeFile(file) {
  try {
    const text = await file.text();
    const th = JSON.parse(text);
    const BASE_VARS = ["desk", "paper", "ink", "inkSoft", "line", "accent", "gold"];
    if (th.app !== "diary-theme" || !th.colors || !BASE_VARS.every((k) => th.colors[k]))
      return appAlert(t("invalidTheme"));
    const id = "custom_" + Date.now();
    data.settings.themes.push({
      id,
      name: th.name || t("customThemeName"),
      colors: th.colors,
      fontMain: th.fontMain || "",
      fontDisplay: th.fontDisplay || "",
    });
    data.settings.theme = id;
    await saveData();
    applyTheme(effectiveTheme());
    openThemePicker();
  } catch (e) {
    console.error(e);
    appAlert(t("invalidTheme"));
  }
}

let builderState = null;

function fillFontSelect(sel, fonts, current) {
  sel.innerHTML = "";
  const def = document.createElement("option");
  def.value = "";
  def.textContent = t("defaultFont");
  sel.appendChild(def);
  for (const f of fonts) {
    const o = document.createElement("option");
    o.value = f;
    o.textContent = f;
    o.style.fontFamily = f;
    sel.appendChild(o);
  }
  sel.value = current && fonts.includes(current) ? current : current ? (() => {
    const o = document.createElement("option");
    o.value = current;
    o.textContent = current;
    sel.appendChild(o);
    return current;
  })() : "";
}

async function openBuilder(editId, baseTheme) {
  $("#theme-overlay").classList.add("hidden");
  const base = baseTheme || effectiveTheme();
  builderState = {
    id: editId || null,
    name: editId ? (findCustomTheme(editId)?.name || "") : "",
    colors: { ...base.colors },
    fontMain: base.fontMain || "",
    fontDisplay: base.fontDisplay || "",
  };

  const colorsBox = $("#b-colors");
  colorsBox.innerHTML = "";
  const labels = {
    desk: "colorDesk", paper: "colorPaper", ink: "colorInk", inkSoft: "colorInkSoft",
    line: "colorLine", accent: "colorAccent", gold: "colorGold",
    bar: "colorBar", barInk: "colorBarInk", btn: "colorBtn", btnInk: "colorBtnInk",
    field: "colorField", fieldInk: "colorFieldInk",
  };
  // цвета интерфейса могли не сохраниться в старой теме — подставляем
  builderState.colors = fillDerived(builderState.colors);

  const groups = [
    ["groupBase", ["desk", "paper", "ink", "inkSoft", "line", "accent", "gold"]],
    ["groupUi", ["bar", "barInk", "btn", "btnInk", "field", "fieldInk"]],
  ];
  for (const [titleKey, keys] of groups) {
    const head = document.createElement("div");
    head.className = "b-subhead";
    head.textContent = t(titleKey);
    colorsBox.appendChild(head);
    for (const key of keys) {
      const row = document.createElement("div");
      row.className = "b-color-row";
      row.innerHTML = `<span>${t(labels[key])}</span>`;
      const inp = document.createElement("input");
      inp.type = "color";
      inp.value = builderState.colors[key];
      inp.oninput = () => {
        builderState.colors[key] = inp.value;
        applyTheme(builderState);
      };
      row.appendChild(inp);
      colorsBox.appendChild(row);
    }
  }

  let fonts = FALLBACK_FONTS;
  try {
    if (window.queryLocalFonts) {
      const list = await window.queryLocalFonts();
      const families = [...new Set(list.map((f) => f.family))].sort();
      if (families.length) fonts = families;
    }
  } catch (e) { console.error(e); }
  fillFontSelect($("#b-font-main"), fonts, builderState.fontMain);
  fillFontSelect($("#b-font-display"), fonts, builderState.fontDisplay);
  $("#b-font-main").onchange = (e) => {
    builderState.fontMain = e.target.value;
    applyTheme(builderState);
  };
  $("#b-font-display").onchange = (e) => {
    builderState.fontDisplay = e.target.value;
    applyTheme(builderState);
  };

  renderBuilderImages();
  applyLang();
  $("#builder").classList.remove("hidden");
}

function renderBuilderImages() {
  const box = $("#b-images");
  box.innerHTML = "";
  const rows = [
    ["bg.png", t("imgBg")],
    ["paper.png", t("imgPaper")],
    ["band.png", t("imgBand")],
    ["polaroid.png", t("imgPolaroid")],
  ];
  for (const nb of data.notebooks)
    rows.push([`covers/${nb.id}.png`, `${t("coverOf")} ${nb.title}`]);

  for (const [name, label] of rows) {
    const row = document.createElement("div");
    row.className = "b-img-row";
    const has = !!externalAssets[name];
    row.innerHTML = `
      ${has ? `<img class="b-img-thumb" src="${externalAssets[name]}" alt="">` : `<span class="b-img-thumb"></span>`}
      <span class="b-img-name">${escapeHtml(label)}</span>`;
    const choose = document.createElement("button");
    choose.className = "btn btn-ghost";
    choose.textContent = t("chooseFile");
    choose.onclick = () => pickAssetImage(name);
    row.appendChild(choose);
    if (has && invoke) {
      const rm = document.createElement("button");
      rm.className = "btn btn-danger";
      rm.textContent = t("removeFile");
      rm.onclick = async () => {
        try { await invoke("delete_asset", { name }); } catch (e) { console.error(e); }
        delete externalAssets[name];
        applyExternalAssets();
        renderBuilderImages();
      };
      row.appendChild(rm);
    }
    box.appendChild(row);
  }
}

function pickAssetImage(name) {
  const input = $("#b-file");
  input.onchange = async () => {
    const file = input.files[0];
    input.value = "";
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = async () => {
        const maxSide = name === "bg.png" ? 1920 : 1440;
        const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = Math.round(img.width * scale);
        c.height = Math.round(img.height * scale);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        const dataUrl = c.toDataURL("image/png");
        if (invoke) {
          try {
            await invoke("save_asset", { name, b64data: dataUrl.split(",")[1] });
          } catch (err) { console.error(err); }
        }
        externalAssets[name] = dataUrl;
        applyExternalAssets();
        renderBuilderImages();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

async function saveBuilder() {
  let name = builderState.name;
  if (!name) {
    name = await appPrompt(t("themeName"), t("customThemeName"));
    if (!name) return;
  }
  const theme = {
    id: builderState.id || "custom_" + Date.now(),
    name,
    colors: { ...builderState.colors },
    fontMain: builderState.fontMain,
    fontDisplay: builderState.fontDisplay,
  };
  const idx = data.settings.themes.findIndex((x) => x.id === theme.id);
  if (idx >= 0) data.settings.themes[idx] = theme;
  else data.settings.themes.push(theme);
  data.settings.theme = theme.id;
  await saveData();
  applyTheme(effectiveTheme());
  $("#builder").classList.add("hidden");
  renderShelf();
}

function cancelBuilder() {
  applyTheme(effectiveTheme());
  $("#builder").classList.add("hidden");
}

function showCtx(x, y, items) {
  const menu = $("#ctx-menu");
  menu.innerHTML = "";
  for (const item of items) {
    const b = document.createElement("button");
    b.textContent = item.label;
    if (item.danger) b.classList.add("danger");
    b.onclick = () => { hideCtx(); item.fn(); };
    menu.appendChild(b);
  }
  menu.classList.remove("hidden");
  const rect = menu.getBoundingClientRect();
  menu.style.left = Math.min(x, window.innerWidth - rect.width - 8) + "px";
  menu.style.top = Math.min(y, window.innerHeight - rect.height - 8) + "px";
}

function hideCtx() {
  $("#ctx-menu").classList.add("hidden");
}

async function deleteDiaryById(id) {
  const nb = data.notebooks.find((n) => n.id === id);
  if (!nb) return;
  if (nb.pin) {
    const ok = await requestPin("verify", nb.pin);
    if (!ok) return;
  }
  if (!(await appConfirm(t("deleteConfirm", { title: nb.title })))) return;
  data.notebooks = data.notebooks.filter((n) => n.id !== id);
  await saveData();
  renderShelf();
}

async function deleteEntry(key) {
  if (!(await appConfirm(t("deleteEntryConfirm", { date: fmtDate(key) })))) return;
  delete currentBook.entries[key];
  await saveData();
  renderHistory();
}

let pinState = null;

function requestPin(mode, expected, allowCancel = true) {
  return new Promise((resolve) => {
    pinState = { mode, expected, stage: mode === "set" ? "new" : "verify", first: "", value: "", resolve };
    $("#pin-title").textContent = mode === "set" ? t("newPin") : t("enterPin");
    $("#pin-cancel").style.display = allowCancel ? "" : "none";
    $("#pin-cancel").textContent = t("cancel");
    buildPinPad();
    renderPinDots();
    $("#pin-screen").classList.remove("hidden");
  });
}

function buildPinPad() {
  const pad = $("#pin-pad");
  pad.innerHTML = "";
  for (const key of ["1","2","3","4","5","6","7","8","9","","0","⌫"]) {
    const b = document.createElement("button");
    b.textContent = key;
    if (!key) b.style.visibility = "hidden";
    b.onclick = () => pinKey(key);
    pad.appendChild(b);
  }
}

function renderPinDots() {
  const dots = $("#pin-dots");
  dots.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    const d = document.createElement("span");
    d.className = "pin-dot" + (i < pinState.value.length ? " on" : "");
    dots.appendChild(d);
  }
}

function pinKey(key) {
  if (!pinState) return;
  if (key === "⌫") pinState.value = pinState.value.slice(0, -1);
  else if (/^\d$/.test(key) && pinState.value.length < 4) pinState.value += key;
  renderPinDots();
  if (pinState.value.length < 4) return;

  const v = pinState.value;
  if (pinState.stage === "verify") {
    if (v === pinState.expected) return closePin(true);
    return pinShake();
  }
  if (pinState.stage === "new") {
    pinState.first = v;
    pinState.value = "";
    pinState.stage = "repeat";
    $("#pin-title").textContent = t("repeatPin");
    renderPinDots();
    return;
  }
  if (pinState.stage === "repeat") {
    if (v === pinState.first) return closePin(v);
    pinState.value = "";
    pinState.stage = "new";
    pinState.first = "";
    $("#pin-title").textContent = t("newPin");
    return pinShake(true);
  }
}

function pinShake(keepOpen) {
  const panel = document.querySelector(".pin-panel");
  panel.classList.remove("shake");
  void panel.offsetWidth;
  panel.classList.add("shake");
  if (!keepOpen) { pinState.value = ""; renderPinDots(); }
}

function closePin(result) {
  $("#pin-screen").classList.add("hidden");
  const resolve = pinState?.resolve;
  pinState = null;
  resolve?.(result);
}

async function toggleAppPin() {
  if (!data.settings.pin) {
    const pin = await requestPin("set");
    if (pin) { data.settings.pin = pin; await saveData(); renderLockButton(); }
    return;
  }
  const ok = await requestPin("verify", data.settings.pin);
  if (!ok) return;
  applyLang();
  $("#pin-menu").classList.remove("hidden");
}

function renderLockButton() {
  $("#btn-lock").textContent = data.settings.pin ? "🔒" : "🔓";
}

function dateKeyShift(years, months) {
  const d = new Date();
  d.setFullYear(d.getFullYear() + years);
  d.setMonth(d.getMonth() + months);
  return d.toISOString().slice(0, 10);
}

function memoryCandidates() {
  const out = [];
  for (const nb of data.notebooks) {
    if (nb.pin || (nb.type || "daily") !== "daily") continue;
    for (const key of Object.keys(nb.entries)) {
      if (key >= todayKey()) continue;
      const entry = normalizeEntry(nb.entries[key]);
      const text = Object.values(entry.answers).map(stripHtml).join(" · ");
      if (text.trim()) out.push({ nb, key, text });
    }
  }
  return out;
}

let memoryPick = null;

function openMemory(forceRandom) {
  const all = memoryCandidates();
  if (!all.length) return appAlert(t("noMemories"));

  let pick = null;
  let label = t("randomMemory");
  if (!forceRandom) {
    const yearKey = dateKeyShift(-1, 0);
    const monthKey = dateKeyShift(0, -1);
    pick = all.find((c) => c.key === yearKey);
    if (pick) label = t("yearAgo");
    else {
      pick = all.find((c) => c.key === monthKey);
      if (pick) label = t("monthAgo");
    }
  }
  if (!pick) {
    const pool = all.length > 1 && memoryPick
      ? all.filter((c) => !(c.nb.id === memoryPick.nb.id && c.key === memoryPick.key))
      : all;
    pick = pool[Math.floor(Math.random() * pool.length)];
  }
  memoryPick = pick;

  $("#memory-label").textContent = label;
  $("#memory-title").textContent = `${pick.nb.title} · ${fmtDate(pick.key)}`;
  $("#memory-text").textContent = pick.text;
  $("#memory-overlay").classList.remove("hidden");
}

function dateKeyOffset(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function calcStreak(nb) {
  let current = 0;
  const offset = nb.entries[todayKey()] ? 0 : -1;
  while (nb.entries[dateKeyOffset(offset - current)]) current++;

  let best = 0;
  let run = 0;
  let prev = null;
  for (const key of Object.keys(nb.entries).sort()) {
    if (prev) {
      const d = new Date(prev + "T12:00:00");
      d.setDate(d.getDate() + 1);
      run = d.toISOString().slice(0, 10) === key ? run + 1 : 1;
    } else run = 1;
    best = Math.max(best, run);
    prev = key;
  }
  return { current, best: Math.max(best, current) };
}

function renderStreak() {
  const { current, best } = calcStreak(currentBook);
  $("#streak-row").innerHTML = current || best
    ? `🔥 ${t("streak")}: <b>${current}</b> ${t("days")} · ${t("best")}: <b>${best}</b>`
    : "";
}

function renderCalendar() {
  if (!calMonth) {
    const now = new Date();
    calMonth = [now.getFullYear(), now.getMonth()];
  }
  const [year, month] = calMonth;
  const lang = data.settings.lang === "ru" ? "ru-RU" : "en-US";
  $("#cal-title").textContent = new Date(year, month, 1)
    .toLocaleDateString(lang, { month: "long", year: "numeric" });

  const grid = $("#cal-grid");
  grid.innerHTML = "";
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startWeekday = (new Date(year, month, 1).getDay() + 6) % 7;

  for (let i = 0; i < startWeekday; i++)
    grid.appendChild(document.createElement("div"));

  for (let day = 1; day <= daysInMonth; day++) {
    const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const entry = currentBook.entries[key] ? normalizeEntry(currentBook.entries[key]) : null;
    const cell = document.createElement("div");
    cell.className = "cal-day" + (entry ? " filled" : "") + (key === todayKey() ? " today" : "");
    if (entry) {
      cell.style.background = currentBook.color;
      cell.innerHTML = entry.mood != null ? moodIconHtml(entry.mood, 15) : String(day);
      cell.title = fmtDate(key);
      cell.onclick = () => renderHistory(key);
    } else {
      cell.textContent = day;
    }
    grid.appendChild(cell);
  }
}

function renderRatingButton() {
  $("#rating-icon").innerHTML = ratingIconHtml(currentBook);
  $("#rating-label").textContent = currentBook.ratingLabel || t("dayRating");
  $("#rating-value").textContent = todayRating ?? "—";
  $("#mood-value").innerHTML = moodIconHtml(todayMood);
  renderStreak();
}

function initMoodPopover() {
  const pop = $("#mood-popover");
  pop.innerHTML = "";
  MOODS.forEach((_, i) => {
    const b = document.createElement("button");
    b.innerHTML = moodIconHtml(i, 20);
    b.className = todayMood === i ? "active" : "";
    b.onclick = () => {
      todayMood = todayMood === i ? null : i;
      pop.classList.add("hidden");
      renderRatingButton();
    };
    pop.appendChild(b);
  });
}

function initRatingPopover() {
  const pop = $("#rating-popover");
  pop.innerHTML = "";
  for (let n = 1; n <= 10; n++) {
    const b = document.createElement("button");
    b.textContent = n;
    b.className = todayRating === n ? "active" : "";
    b.onclick = () => {
      todayRating = todayRating === n ? null : n;
      pop.classList.add("hidden");
      renderRatingButton();
    };
    pop.appendChild(b);
  }
}

async function saveToday() {
  const answers = {};
  let has = false;
  document.querySelectorAll("#questions-list .editor").forEach((ed) => {
    const html = ed.innerHTML.trim();
    const empty = !ed.textContent.trim() && !ed.querySelector("img");
    if (html && !empty) { answers[ed.dataset.qi] = html; has = true; }
  });
  if (has || todayImages.length || todayRating != null || todayMood != null)
    currentBook.entries[editKey] = { answers, images: todayImages, rating: todayRating, mood: todayMood };
  else delete currentBook.entries[editKey];
  await saveData();
  renderStreak();
  $("#save-status").textContent = t("saved");
  setTimeout(() => ($("#save-status").textContent = ""), 2500);
}

function renderAttachments() {
  const grid = $("#attach-grid");
  grid.innerHTML = "";
  todayImages.forEach((src, i) => {
    const el = document.createElement("div");
    el.className = "attach-thumb";
    el.innerHTML = `<img src="${src}" alt=""><button class="x">✕</button>`;
    el.querySelector(".x").onclick = () => { todayImages.splice(i, 1); renderAttachments(); };
    el.querySelector("img").onclick = () => openLightbox(todayImages, i, editKey);
    grid.appendChild(el);
  });
}

function attachFiles(files) {
  for (const file of files) {
    if (!file.type.startsWith("image/")) continue;
    const reader = new FileReader();
    reader.onload = (e) => {
      shrinkImage(e.target.result, 1280, (small) => {
        todayImages.push(small);
        renderAttachments();
      });
    };
    reader.readAsDataURL(file);
  }
}

function shrinkImage(dataUrl, maxSide, cb) {
  const img = new Image();
  img.onload = () => {
    const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
    if (scale === 1) return cb(dataUrl);
    const c = document.createElement("canvas");
    c.width = Math.round(img.width * scale);
    c.height = Math.round(img.height * scale);
    c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
    cb(c.toDataURL("image/jpeg", 0.85));
  };
  img.onerror = () => cb(dataUrl);
  img.src = dataUrl;
}

const FALLBACK_FONTS = [
  "Arial", "Arial Black", "Bahnschrift", "Book Antiqua", "Calibri", "Cambria",
  "Candara", "Comic Sans MS", "Consolas", "Constantia", "Corbel",
  "Courier New", "Ebrima", "Franklin Gothic Medium", "Gabriola", "Garamond",
  "Georgia", "Impact", "Ink Free", "Lucida Console", "Lucida Sans Unicode",
  "Malgun Gothic", "Microsoft Sans Serif", "MV Boli", "Palatino Linotype",
  "Segoe Print", "Segoe Script", "Segoe UI", "Sitka", "Sylfaen",
  "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana",
];

let fontsLoaded = false;

function populateFonts(fonts) {
  const sel = $("#tb-font");
  sel.querySelectorAll("option:not(:first-child)").forEach((o) => o.remove());
  const custom = document.createElement("option");
  custom.value = "__custom__";
  custom.textContent = t("customFont");
  sel.appendChild(custom);
  for (const f of fonts) {
    const o = document.createElement("option");
    o.value = f;
    o.textContent = f;
    o.style.fontFamily = f;
    sel.appendChild(o);
  }
}

async function loadSystemFonts() {
  if (fontsLoaded) return;
  fontsLoaded = true;
  let fonts = FALLBACK_FONTS;
  try {
    if (window.queryLocalFonts) {
      const list = await window.queryLocalFonts();
      const families = [...new Set(list.map((f) => f.family))].sort();
      if (families.length) fonts = families;
    }
  } catch (e) { console.error(e); }
  populateFonts(fonts);
}

function execOnEditor(fn) {
  if (lastEditor) lastEditor.focus();
  fn();
}

function initToolbar() {
  document.querySelectorAll(".tb[data-cmd]").forEach((btn) => {
    btn.addEventListener("mousedown", (e) => e.preventDefault());
    btn.onclick = () => execOnEditor(() => document.execCommand(btn.dataset.cmd));
  });
  $("#tb-font").addEventListener("mousedown", loadSystemFonts);
  $("#tb-font").onchange = async (e) => {
    let font = e.target.value;
    if (font === "__custom__") font = (await appPrompt(t("customFontPrompt"))) || "";
    if (font) execOnEditor(() => document.execCommand("fontName", false, font));
    e.target.value = "";
  };
  $("#tb-size").onchange = (e) => {
    if (e.target.value) execOnEditor(() => document.execCommand("fontSize", false, e.target.value));
    e.target.value = "";
  };
  $("#tb-color").oninput = (e) =>
    execOnEditor(() => document.execCommand("foreColor", false, e.target.value));
  $("#tb-clear").onclick = () =>
    execOnEditor(() => document.execCommand("removeFormat"));
  $("#tb-symbols").onclick = () => {
    const p = $("#symbols-panel");
    p.classList.toggle("hidden");
    if (!p.classList.contains("hidden") && !p.dataset.ready) initSymbols();
  };
}

function initSymbols() {
  const tabs = $("#symbols-tabs");
  const grid = $("#symbols-grid");
  $("#symbols-panel").dataset.ready = "1";

  const showGroup = (idx) => {
    tabs.querySelectorAll("button").forEach((b, i) =>
      b.classList.toggle("active", i === idx));
    grid.innerHTML = "";
    for (const ch of SYMBOL_GROUPS[idx][1].split(" ").filter(Boolean)) {
      const b = document.createElement("button");
      b.textContent = ch;
      b.addEventListener("mousedown", (e) => e.preventDefault());
      b.onclick = () => insertSymbol(ch);
      grid.appendChild(b);
    }
  };

  SYMBOL_GROUPS.forEach(([name], i) => {
    const b = document.createElement("button");
    b.textContent = name;
    b.onclick = () => showGroup(i);
    tabs.appendChild(b);
  });
  showGroup(0);
}

function insertSymbol(ch) {
  if (!lastEditor) {
    lastEditor = document.querySelector("#questions-list .editor");
    if (!lastEditor) return;
  }
  lastEditor.focus();
  document.execCommand("insertText", false, ch);
}

function openLightbox(images, startIdx, dateKey) {
  const track = $("#lb-track");
  track.innerHTML = "";
  images.forEach((src) => {
    const slide = document.createElement("div");
    slide.className = "lb-slide";
    slide.innerHTML = `
      <div class="lb-polaroid">
        <img src="${src}" alt="">
        <div class="lb-caption">${fmtDate(dateKey)}</div>
      </div>`;
    track.appendChild(slide);
  });
  lbIndex = startIdx || 0;
  lbCount = images.length;
  const arrows = lbCount > 1 ? "" : "none";
  $("#lb-prev").style.display = arrows;
  $("#lb-next").style.display = arrows;
  $("#lightbox").classList.remove("hidden");
  updateLightbox(true);
}

function updateLightbox(instant) {
  const track = $("#lb-track");
  if (instant) track.style.transition = "none";
  track.style.transform = `translateX(${-lbIndex * 100}%)`;
  if (instant) requestAnimationFrame(() => (track.style.transition = ""));
  track.querySelectorAll(".lb-slide").forEach((s, i) =>
    s.classList.toggle("active", i === lbIndex));
}

function lbMove(dir) {
  lbIndex = (lbIndex + dir + lbCount) % lbCount;
  updateLightbox();
}

function closeLightbox() {
  $("#lightbox").classList.add("hidden");
}

function renderClips() {
  const grid = $("#clips-grid");
  grid.innerHTML = "";
  const keys = Object.keys(currentBook.entries).sort().reverse();
  let any = false;
  for (const key of keys) {
    const entry = normalizeEntry(currentBook.entries[key]);
    entry.images.forEach((src) => {
      any = true;
      const p = document.createElement("div");
      p.className = "clip-polaroid";
      p.title = t("openEntry");
      p.innerHTML = `<img src="${src}" alt=""><div class="clip-date">${fmtDate(key)}</div>`;
      p.onclick = () => { showPage("history"); renderHistory(key); };
      grid.appendChild(p);
    });
  }
  if (!any) grid.innerHTML = `<p class="muted">${t("noAttachments")}</p>`;
}

let chartMode = "month";
let chartCursor = null;

function initChartCursor() {
  const now = new Date();
  chartCursor = chartMode === "month"
    ? [now.getFullYear(), now.getMonth()]
    : now.getFullYear();
}

function chartShift(dir) {
  if (chartMode === "month") {
    chartCursor[1] += dir;
    if (chartCursor[1] < 0) { chartCursor[1] = 11; chartCursor[0]--; }
    if (chartCursor[1] > 11) { chartCursor[1] = 0; chartCursor[0]++; }
  } else {
    chartCursor += dir;
  }
  renderChart();
}

function chartPoints() {
  const lang = data.settings.lang === "ru" ? "ru-RU" : "en-US";
  if (chartMode === "month") {
    const [year, month] = chartCursor;
    const title = new Date(year, month, 1).toLocaleDateString(lang, { month: "long", year: "numeric" });
    const days = new Date(year, month + 1, 0).getDate();
    const points = [];
    for (let d = 1; d <= days; d++) {
      const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const raw = currentBook.entries[key];
      const entry = raw ? normalizeEntry(raw) : null;
      points.push({ label: String(d), value: entry?.rating ?? null, mood: entry?.mood ?? null });
    }
    return { title, points };
  }
  const year = chartCursor;
  const points = [];
  for (let m = 0; m < 12; m++) {
    const prefix = `${year}-${String(m + 1).padStart(2, "0")}-`;
    const vals = Object.entries(currentBook.entries)
      .filter(([k]) => k.startsWith(prefix))
      .map(([, e]) => normalizeEntry(e).rating)
      .filter((r) => r != null);
    const avg = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null;
    points.push({
      label: new Date(year, m, 1).toLocaleDateString(lang, { month: "short" }),
      value: avg != null ? Math.round(avg * 10) / 10 : null,
      mood: null,
    });
  }
  return { title: String(year), points };
}

function renderChart() {
  $("#chart-month").classList.toggle("btn-primary", chartMode === "month");
  $("#chart-year").classList.toggle("btn-primary", chartMode === "year");
  const { title, points } = chartPoints();
  $("#chart-title").textContent = title;

  const W = 640, H = 220;
  const padL = 30, padR = 12, padT = 12, padB = points.some((p) => p.mood != null) ? 40 : 24;
  const innerW = W - padL - padR, innerH = H - padT - padB;
  const n = points.length;
  const x = (i) => padL + (n > 1 ? (i * innerW) / (n - 1) : innerW / 2);
  const y = (v) => padT + innerH - ((v - 1) / 9) * innerH;

  let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="rating-chart">`;
  for (const g of [1, 4, 7, 10]) {
    svg += `<line x1="${padL}" y1="${y(g)}" x2="${W - padR}" y2="${y(g)}" class="ch-grid"/>`;
    svg += `<text x="${padL - 8}" y="${y(g) + 4}" class="ch-axis" text-anchor="end">${g}</text>`;
  }

  const segments = [];
  let seg = [];
  points.forEach((p, i) => {
    if (p.value != null) seg.push([x(i), y(p.value)]);
    else if (seg.length) { segments.push(seg); seg = []; }
  });
  if (seg.length) segments.push(seg);
  for (const sg of segments) {
    if (sg.length > 1)
      svg += `<polyline points="${sg.map((pt) => pt.join(",")).join(" ")}" class="ch-line"/>`;
  }
  points.forEach((p, i) => {
    if (p.value != null) {
      svg += `<circle cx="${x(i)}" cy="${y(p.value)}" r="4" class="ch-dot">` +
             `<title>${p.label}: ${p.value}</title></circle>`;
    }
    const showLabel = n <= 12 || i % 5 === 0 || i === n - 1;
    if (showLabel)
      svg += `<text x="${x(i)}" y="${H - (padB - 16)}" class="ch-axis" text-anchor="middle">${p.label}</text>`;
    if (p.mood != null && MOODS[p.mood])
      svg += `<text x="${x(i)}" y="${H - 4}" class="ch-mood" text-anchor="middle">${MOODS[p.mood]}</text>`;
  });
  svg += "</svg>";

  const hasAny = points.some((p) => p.value != null);
  $("#chart-box").innerHTML = hasAny ? svg : `<p class="muted">${t("noRated")}</p>`;
}

function printAndClear(html) {
  const area = $("#print-area");
  area.innerHTML = html;
  appAlert(t("printHint")).then(() => {
    window.print();
    area.innerHTML = "";
  });
}

function entryPrintHtml(nb, key) {
  const entry = normalizeEntry(nb.entries[key]);
  let html = `<div class="p-entry">
    <div class="p-date">${fmtDate(key)}</div>`;
  const meta = [];
  if (entry.rating != null) meta.push(`${escapeHtml(nb.ratingLabel || t("dayRating"))}: ${entry.rating}/10`);
  if (entry.mood != null && MOODS[entry.mood]) meta.push(MOODS[entry.mood]);
  if (meta.length) html += `<div class="p-meta">${meta.join(" · ")}</div>`;
  for (const [qi, ans] of Object.entries(entry.answers)) {
    html += `<div class="p-q">${escapeHtml(nb.questions[qi] || t("question") + " " + (Number(qi) + 1))}</div>
             <div class="p-a">${ans}</div>`;
  }
  if (entry.images.length) {
    html += `<div class="p-imgs">` +
      entry.images.map((src) => `<img src="${src}">`).join("") + `</div>`;
  }
  return html + "</div>";
}

function diaryPrintHeader(nb) {
  return `<div class="p-cover">
    <div class="p-title">${escapeHtml(nb.title)}</div>
    ${nb.subtitle ? `<div class="p-sub">${escapeHtml(nb.subtitle)}</div>` : ""}
    <div class="p-exported">${t("exportedOn")} · ${fmtDate(todayKey())}</div>
  </div>`;
}

function exportEntryPdf(nb, key) {
  printAndClear(diaryPrintHeader(nb) + entryPrintHtml(nb, key));
}

function exportDiaryPdf(nb) {
  let html = diaryPrintHeader(nb);
  const type = nb.type || "daily";
  if (type === "daily") {
    for (const key of Object.keys(nb.entries).sort())
      html += entryPrintHtml(nb, key);
  } else if (type === "dreams") {
    html += `<div class="p-entry"><div class="p-date">${t("dreamsPdfTitle")}</div>`;
    for (const d of nb.dreams || []) {
      html += `<div class="p-dream">${d.fulfilled ? "✓" : "○"} ${escapeHtml(d.text)}
        <span class="p-meta-inline">${d.fulfilled
          ? `${t("cameTrueOn")} · ${fmtDate(d.fulfilled)}`
          : fmtDate(d.created)}</span></div>`;
    }
    html += "</div>";
  } else if (type === "letters") {
    html += `<div class="p-entry"><div class="p-date">${t("lettersPdfTitle")}</div>`;
    for (const l of [...(nb.letters || [])].sort((a, b) => a.created.localeCompare(b.created))) {
      if (l.opened) {
        html += `<div class="p-q">${escapeHtml(l.subject || "✉")} — ${t("writtenOn")} ${fmtDate(l.created)}</div>
                 <div class="p-a">${l.html}</div>`;
      } else {
        html += `<div class="p-dream">🔒 ${t("sealedLetterLine")}${l.subject ? ": " + escapeHtml(l.subject) : ""}
          <span class="p-meta-inline">${t("sealedUntil")} ${fmtDate(l.openDate)}</span></div>`;
      }
    }
    html += "</div>";
  }
  printAndClear(html);
}

function renderRatingPage() {
  initChartCursor();
  renderChart();
  $("#rating-page-title").textContent =
    "🏆 " + (currentBook.ratingLabel || t("dayRating"));
  const list = $("#rating-list");
  list.innerHTML = "";
  const rated = Object.entries(currentBook.entries)
    .map(([key, e]) => [key, normalizeEntry(e)])
    .filter(([, e]) => e.rating != null)
    .sort((a, b) => b[1].rating - a[1].rating || b[0].localeCompare(a[0]));

  if (!rated.length) {
    list.innerHTML = `<p class="muted">${t("noRated")}</p>`;
    return;
  }
  for (const [key, entry] of rated) {
    const preview = Object.values(entry.answers).map(stripHtml).join(" · ");
    const item = document.createElement("div");
    item.className = "rating-item";
    item.innerHTML = `
      <span class="r-score">${entry.rating}</span>
      <span class="h-date">${fmtDate(key)}</span>
      <span class="h-preview">${escapeHtml(preview)}</span>`;
    item.onclick = () => { showPage("history"); renderHistory(key); };
    list.appendChild(item);
  }
}

function renderHistory(openKey) {
  renderCalendar();
  const list = $("#history-list");
  list.innerHTML = "";
  const keys = Object.keys(currentBook.entries).sort().reverse();
  if (!keys.length) {
    list.innerHTML = `<p class="muted">${t("noEntries")}</p>`;
    return;
  }
  for (const key of keys) {
    const entry = normalizeEntry(currentBook.entries[key]);
    const previewText = Object.values(entry.answers)
      .map(stripHtml).join(" · ") || (entry.images.length ? t("attachmentsWord") : "");
    const item = document.createElement("div");
    item.className = "history-item";
    const clip = entry.images.length ? clipIconHtml(entry.images.length) : "";
    const score = entry.rating != null
      ? `<span class="h-score">${entry.rating}</span>` : "";
    const mood = entry.mood != null
      ? `<span class="h-mood">${moodIconHtml(entry.mood, 16)}</span>` : "";
    item.innerHTML = `<span class="h-date">${fmtDate(key)}${score}${mood}${clip}</span>
                      <span class="h-preview">${escapeHtml(previewText)}</span>`;
    const detail = document.createElement("div");
    detail.className = "history-answer hidden";
    for (const [qi, ans] of Object.entries(entry.answers)) {
      const qDiv = document.createElement("div");
      qDiv.className = "q-text";
      qDiv.textContent = currentBook.questions[qi] || t("question") + " " + (Number(qi) + 1);
      const aDiv = document.createElement("div");
      aDiv.className = "a-text";
      aDiv.innerHTML = ans;
      detail.appendChild(qDiv);
      detail.appendChild(aDiv);
    }
    for (const src of entry.images) {
      const img = document.createElement("img");
      img.className = "h-img";
      img.src = src;
      img.onclick = (e) => { e.stopPropagation(); openLightbox(entry.images, entry.images.indexOf(src), key); };
      detail.appendChild(img);
    }
    item.onclick = () => detail.classList.toggle("hidden");
    item.oncontextmenu = (e) => {
      e.preventDefault();
      showCtx(e.clientX, e.clientY, [
        { label: t("edit"), fn: () => { showPage("today"); renderToday(key); } },
        { label: t("saveAsPdf"), fn: () => exportEntryPdf(currentBook, key) },
        { label: t("delete"), danger: true, fn: () => deleteEntry(key) },
      ]);
    };
    const clipEl = item.querySelector(".h-clip");
    if (clipEl) clipEl.onclick = (e) => {
      e.stopPropagation();
      openLightbox(entry.images, 0, key);
    };
    list.appendChild(item);
    list.appendChild(detail);
    if (openKey === key) {
      detail.classList.remove("hidden");
      setTimeout(() => item.scrollIntoView({ behavior: "smooth", block: "center" }), 60);
    }
  }
}

function renderDreams() {
  $("#dream-input").placeholder = t("dreamPlaceholder");
  const list = $("#dreams-list");
  list.innerHTML = "";
  const dreams = currentBook.dreams || [];
  if (!dreams.length) {
    list.innerHTML = `<p class="muted">${t("noDreams")}</p>`;
    return;
  }
  const sorted = [...dreams].sort((a, b) =>
    (!!a.fulfilled - !!b.fulfilled) || b.created.localeCompare(a.created));
  for (const dream of sorted) {
    const card = document.createElement("div");
    card.className = "dream-card" + (dream.fulfilled ? " fulfilled" : "");
    card.innerHTML = `
      <div class="dream-text">${escapeHtml(dream.text)}</div>
      <div class="dream-meta">
        ${dream.fulfilled
          ? `<span class="dream-done">✓ ${t("cameTrueOn")} · ${fmtDate(dream.fulfilled)}</span>`
          : `<span class="muted">${fmtDate(dream.created)}</span>`}
      </div>
      <div class="dream-actions">
        <button class="btn btn-ghost d-toggle">${dream.fulfilled ? t("undo") : t("cameTrue")}</button>
        <button class="btn btn-danger d-del">✕</button>
      </div>`;
    card.querySelector(".d-toggle").onclick = async () => {
      dream.fulfilled = dream.fulfilled ? null : todayKey();
      await saveData();
      renderDreams();
    };
    card.querySelector(".d-del").onclick = async () => {
      if (!(await appConfirm(t("deleteDream")))) return;
      currentBook.dreams = currentBook.dreams.filter((d) => d.id !== dream.id);
      await saveData();
      renderDreams();
    };
    list.appendChild(card);
  }
}

async function addDream() {
  const text = $("#dream-input").value.trim();
  if (!text) return;
  currentBook.dreams = currentBook.dreams || [];
  currentBook.dreams.push({
    id: "d_" + Date.now(),
    text,
    created: todayKey(),
    fulfilled: null,
  });
  $("#dream-input").value = "";
  await saveData();
  renderDreams();
}

let dpMonth = null;
let letterOpenDate = null;

function renderLetters() {
  $("#letter-subject").placeholder = t("subjectPlaceholder");
  const ed = $("#letter-editor");
  ed.dataset.placeholder = t("letterPlaceholder");
  if (!letterOpenDate || letterOpenDate <= todayKey()) letterOpenDate = dateKeyOffset(30);
  $("#letter-date-btn").textContent = fmtDate(letterOpenDate);
  $("#dp-popover").classList.add("hidden");

  const list = $("#letters-list");
  list.innerHTML = "";
  const letters = currentBook.letters || [];
  if (!letters.length) {
    list.innerHTML = `<p class="muted">${t("noLetters")}</p>`;
    return;
  }
  const sorted = [...letters].sort((a, b) => a.openDate.localeCompare(b.openDate));
  for (const letter of sorted) {
    const ready = letter.openDate <= todayKey();
    const el = document.createElement("div");
    el.className = "letter-card" +
      (letter.opened ? " opened" : ready ? " ready" : " sealed");

    if (letter.opened) {
      el.innerHTML = `
        <div class="letter-head">
          <span class="letter-env">📖</span>
          <b>${escapeHtml(letter.subject || t("openLetter"))}</b>
          <button class="btn btn-danger l-del">✕</button>
        </div>
        <div class="muted">${t("writtenOn")} ${fmtDate(letter.created)}</div>
        <div class="letter-body">${letter.html}</div>`;
    } else if (ready) {
      el.innerHTML = `
        <div class="letter-head">
          <span class="letter-env">${envelopeHtml()}</span>
          <b>${escapeHtml(letter.subject || "✉")}</b>
          <span class="letter-ready">${t("readyToOpen")}</span>
        </div>
        <div class="muted">${t("writtenOn")} ${fmtDate(letter.created)}</div>
        <button class="btn btn-primary l-open">${t("openLetter")}</button>`;
      el.querySelector(".l-open").onclick = async () => {
        letter.opened = true;
        await saveData();
        renderLetters();
      };
    } else {
      el.innerHTML = `
        <div class="letter-head">
          <span class="letter-env">${envelopeHtml()}</span>
          <b>${escapeHtml(letter.subject || "✉")}</b>
        </div>
        <div class="muted">🔒 ${t("sealedUntil")} ${fmtDate(letter.openDate)}</div>`;
    }
    const del = el.querySelector(".l-del");
    if (del) del.onclick = async () => {
      if (!(await appConfirm(t("deleteLetter")))) return;
      currentBook.letters = currentBook.letters.filter((l) => l.id !== letter.id);
      await saveData();
      renderLetters();
    };
    list.appendChild(el);
  }
}

async function sealLetter() {
  const ed = $("#letter-editor");
  const html = ed.innerHTML.trim();
  if (!ed.textContent.trim()) return appAlert(t("emptyLetter"));
  if (!letterOpenDate || letterOpenDate <= todayKey()) return appAlert(t("pickDate"));
  currentBook.letters = currentBook.letters || [];
  currentBook.letters.push({
    id: "l_" + Date.now(),
    subject: $("#letter-subject").value.trim(),
    html,
    created: todayKey(),
    openDate: letterOpenDate,
    opened: false,
  });
  ed.innerHTML = "";
  $("#letter-subject").value = "";
  await saveData();
  renderLetters();
}

function renderDatepicker() {
  if (!dpMonth) {
    const d = new Date(letterOpenDate + "T12:00:00");
    dpMonth = [d.getFullYear(), d.getMonth()];
  }
  const [year, month] = dpMonth;
  const lang = data.settings.lang === "ru" ? "ru-RU" : "en-US";
  $("#dp-title").textContent = new Date(year, month, 1)
    .toLocaleDateString(lang, { month: "long", year: "numeric" });

  const grid = $("#dp-grid");
  grid.innerHTML = "";
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
  const min = dateKeyOffset(1);

  for (let i = 0; i < startWeekday; i++)
    grid.appendChild(document.createElement("div"));

  for (let day = 1; day <= daysInMonth; day++) {
    const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const cell = document.createElement("div");
    cell.textContent = day;
    if (key < min) {
      cell.className = "cal-day dp-disabled";
    } else {
      cell.className = "cal-day dp-pick" + (key === letterOpenDate ? " dp-selected" : "");
      cell.onclick = () => {
        letterOpenDate = key;
        $("#letter-date-btn").textContent = fmtDate(key);
        $("#dp-popover").classList.add("hidden");
      };
    }
    grid.appendChild(cell);
  }
}

function envelopeHtml() {
  if (externalAssets["icons/envelope.png"])
    return `<img src="${externalAssets["icons/envelope.png"]}" alt="✉" style="width:20px;height:20px;object-fit:contain;vertical-align:middle;">`;
  return "✉";
}

function lettersReadyCount(nb) {
  return (nb.letters || []).filter((l) => !l.opened && l.openDate <= todayKey()).length;
}

function renderEdit() {
  const daily = (currentBook.type || "daily") === "daily";
  $("#daily-fields").style.display = daily ? "" : "none";
  $("#daily-fields-2").style.display = daily ? "" : "none";
  $("#btn-diary-pin").textContent = currentBook.pin ? t("changePin") : t("setPin");
  $("#btn-diary-pin-remove").style.display = currentBook.pin ? "" : "none";
  $("#edit-title").value = currentBook.title;
  $("#edit-subtitle").value = currentBook.subtitle || "";
  $("#edit-rating-label").value = currentBook.ratingLabel || "";
  $("#edit-questions").value = currentBook.questions.join("\n");
  const row = $("#color-row");
  row.innerHTML = "";
  const mark = (el) => {
    row.querySelectorAll(".color-dot, .color-custom").forEach((d) => d.classList.remove("selected"));
    el.classList.add("selected");
  };
  for (const c of COVER_COLORS) {
    const dot = document.createElement("div");
    dot.className = "color-dot" + (c === currentBook.color ? " selected" : "");
    dot.style.background = c;
    dot.onclick = () => { currentBook.color = c; mark(dot); };
    row.appendChild(dot);
  }

  // свой цвет: пипетка прямо в ряду
  const own = document.createElement("label");
  const isCustom = !COVER_COLORS.includes(currentBook.color);
  own.className = "color-custom" + (isCustom ? " selected" : "");
  own.title = t("customColor");
  own.style.background = isCustom ? currentBook.color : "";
  const pick = document.createElement("input");
  pick.type = "color";
  pick.value = currentBook.color || "#c96f4a";
  pick.oninput = () => {
    currentBook.color = pick.value;
    own.style.background = pick.value;
    mark(own);
  };
  own.appendChild(pick);
  row.appendChild(own);
}

async function saveEdit() {
  currentBook.title = $("#edit-title").value.trim() || t("untitled");
  currentBook.subtitle = $("#edit-subtitle").value.trim();
  currentBook.ratingLabel = $("#edit-rating-label").value.trim() || t("dayRating");
  currentBook.questions = $("#edit-questions").value
    .split("\n").map((s) => s.trim()).filter(Boolean);
  if (!currentBook.questions.length) currentBook.questions = [t("defaultQuestion")];
  await saveData();
  const start = (currentBook.type || "daily") === "daily" ? "today" : currentBook.type;
  showPage(start);
  renderPage(start);
}

function openTypeChooser() {
  applyLang();
  $("#type-chooser").classList.remove("hidden");
}

async function addNotebook(type) {
  if (!["daily", "dreams", "letters"].includes(type)) type = "daily";
  const nb = {
    id: "nb_" + Date.now(),
    type,
    title: t("newDiaryTitle"),
    subtitle: "",
    color: COVER_COLORS[data.notebooks.length % COVER_COLORS.length],
    ratingLabel: t("dayRating"),
    questions: [t("defaultQuestion")],
    entries: {},
  };
  if (type === "dreams") nb.dreams = [];
  if (type === "letters") nb.letters = [];
  data.notebooks.push(nb);
  await saveData();
  openBook(nb.id);
  showPage("edit");
  renderEdit();
}

async function deleteNotebook() {
  if (!(await appConfirm(t("deleteConfirm", { title: currentBook.title })))) return;
  data.notebooks = data.notebooks.filter((n) => n.id !== currentBook.id);
  await saveData();
  backToShelf();
}

function backToShelf() {
  currentBook = null;
  lastEditor = null;
  $("#book-screen").classList.add("hidden");
  $("#shelf-screen").classList.remove("hidden");
  renderShelf();
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (m) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

function stripHtml(html) {
  const d = document.createElement("div");
  d.innerHTML = html;
  return d.textContent || "";
}

window.addEventListener("DOMContentLoaded", async () => {
  await loadData();
  applyTheme(effectiveTheme());
  await loadExternalAssets();
  applyLang();
  if (data.settings.pin) await requestPin("verify", data.settings.pin, false);
  renderLockButton();
  renderShelf();
  initToolbar();

  $("#btn-lang").onclick = toggleLang;
  $("#btn-lock").onclick = toggleAppPin;
  $("#pin-cancel").onclick = () => closePin(false);
  $("#pin-menu").addEventListener("click", (e) => {
    if (e.target.id === "pin-menu") $("#pin-menu").classList.add("hidden");
  });
  $("#pin-menu-change").onclick = async () => {
    $("#pin-menu").classList.add("hidden");
    const pin = await requestPin("set");
    if (pin) { data.settings.pin = pin; await saveData(); }
  };
  $("#pin-menu-remove").onclick = async () => {
    $("#pin-menu").classList.add("hidden");
    data.settings.pin = null;
    await saveData();
    renderLockButton();
  };
  $("#btn-diary-pin").onclick = async () => {
    if (currentBook.pin) {
      const ok = await requestPin("verify", currentBook.pin);
      if (!ok) return;
    }
    const pin = await requestPin("set");
    if (pin) { currentBook.pin = pin; await saveData(); renderEdit(); }
  };
  $("#btn-diary-pin-remove").onclick = async () => {
    const ok = await requestPin("verify", currentBook.pin);
    if (!ok) return;
    currentBook.pin = null;
    await saveData();
    renderEdit();
  };
  $("#btn-memory").onclick = () => openMemory();
  $("#memory-again").onclick = () => openMemory(true);
  $("#memory-open").onclick = async () => {
    if (!memoryPick) return;
    $("#memory-overlay").classList.add("hidden");
    const opened = await openBook(memoryPick.nb.id);
    if (opened === false) return;
    showPage("history");
    renderHistory(memoryPick.key);
  };
  $("#memory-overlay").addEventListener("click", (e) => {
    if (e.target.id === "memory-overlay") $("#memory-overlay").classList.add("hidden");
  });
  document.addEventListener("keydown", (e) => {
    if ($("#pin-screen").classList.contains("hidden")) return;
    if (/^\d$/.test(e.key)) pinKey(e.key);
    if (e.key === "Backspace") pinKey("⌫");
  });

  $("#btn-theme").onclick = openThemePicker;
  $("#theme-overlay").addEventListener("click", (e) => {
    if (e.target.id === "theme-overlay") $("#theme-overlay").classList.add("hidden");
  });
  $("#btn-import-theme").onclick = () => $("#theme-file").click();
  $("#theme-file").onchange = (e) => {
    const file = e.target.files[0];
    e.target.value = "";
    if (file) importThemeFile(file);
  };
  $("#b-save").onclick = saveBuilder;
  $("#b-cancel").onclick = cancelBuilder;
  $("#builder").addEventListener("click", (e) => {
    if (e.target.id === "builder") cancelBuilder();
  });
  document.addEventListener("click", hideCtx);
  document.addEventListener("contextmenu", (e) => {
    if (!e.target.closest(".book, .history-item, .theme-swatch, #ctx-menu")) hideCtx();
  });
  window.addEventListener("blur", hideCtx);
  document.querySelectorAll("#type-chooser .type-option").forEach((btn) => {
    btn.onclick = () => {
      $("#type-chooser").classList.add("hidden");
      addNotebook(btn.dataset.type);
    };
  });
  $("#type-chooser").addEventListener("click", (e) => {
    if (e.target.id === "type-chooser") $("#type-chooser").classList.add("hidden");
  });
  $("#btn-add-dream").onclick = addDream;
  $("#dream-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") addDream();
  });
  $("#btn-seal").onclick = sealLetter;
  $("#letter-editor").addEventListener("focus", function () { lastEditor = this; });
  $("#letter-date-btn").onclick = () => {
    dpMonth = null;
    renderDatepicker();
    $("#dp-popover").classList.toggle("hidden");
  };
  $("#dp-prev").onclick = () => {
    dpMonth[1]--;
    if (dpMonth[1] < 0) { dpMonth[1] = 11; dpMonth[0]--; }
    renderDatepicker();
  };
  $("#dp-next").onclick = () => {
    dpMonth[1]++;
    if (dpMonth[1] > 11) { dpMonth[1] = 0; dpMonth[0]++; }
    renderDatepicker();
  };
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".letter-date-label"))
      $("#dp-popover")?.classList.add("hidden");
  });

  $("#modal-ok").onclick = () => closeModal(true);
  $("#modal-cancel").onclick = () => closeModal(false);
  $("#modal-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") closeModal(true);
  });
  $("#modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") closeModal(false);
  });
  $("#btn-back").onclick = backToShelf;
  $("#btn-save").onclick = saveToday;
  $("#btn-history").onclick = () => { showPage("history"); renderHistory(); };
  $("#btn-today").onclick = goToEntry;
  $("#btn-edit").onclick = () => { showPage("edit"); renderEdit(); };
  $("#btn-save-edit").onclick = saveEdit;
  $("#btn-delete").onclick = deleteNotebook;
  $("#btn-attach").onclick = () => $("#attach-input").click();
  $("#attach-input").onchange = (e) => { attachFiles(e.target.files); e.target.value = ""; };
  $("#btn-clips").onclick = () => { showPage("clips"); renderClips(); };
  $("#btn-rating-tab").onclick = () => { showPage("rating"); renderRatingPage(); };

  $("#rating-btn").onclick = () => {
    initRatingPopover();
    $("#mood-popover").classList.add("hidden");
    $("#rating-popover").classList.toggle("hidden");
  };
  $("#mood-btn").onclick = () => {
    initMoodPopover();
    $("#rating-popover").classList.add("hidden");
    $("#mood-popover").classList.toggle("hidden");
  };
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".rating-row")) {
      $("#rating-popover")?.classList.add("hidden");
      $("#mood-popover")?.classList.add("hidden");
    }
  });

  $("#chart-month").onclick = () => { chartMode = "month"; initChartCursor(); renderChart(); };
  $("#chart-year").onclick = () => { chartMode = "year"; initChartCursor(); renderChart(); };
  $("#chart-prev").onclick = () => chartShift(-1);
  $("#chart-next").onclick = () => chartShift(1);

  $("#cal-prev").onclick = () => {
    calMonth[1]--;
    if (calMonth[1] < 0) { calMonth[1] = 11; calMonth[0]--; }
    renderCalendar();
  };
  $("#cal-next").onclick = () => {
    calMonth[1]++;
    if (calMonth[1] > 11) { calMonth[1] = 0; calMonth[0]++; }
    renderCalendar();
  };

  $("#lb-close").onclick = closeLightbox;
  $("#lb-prev").onclick = () => lbMove(-1);
  $("#lb-next").onclick = () => lbMove(1);
  $("#lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft" && lbCount > 1) lbMove(-1);
    if (e.key === "ArrowRight" && lbCount > 1) lbMove(1);
  });
});
