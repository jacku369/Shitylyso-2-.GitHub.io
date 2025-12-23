let currentFilter = "love";
let suggestionsVisible = false;
let nameInputTimer = null;

const suggestionsData = {
  love: [
    "⋆𐙚:͢I:͢L:͢♡:͢V:͢E:͢y:͢o:͢u𓏧𓅚",
    "►►❇︎˖°M̶o̶m̶-D̶a̶d̶°˖☂ ‹𝟹",
    "►►►𝙹𝚘𝚢𝚊 °°✰",
    "☘︎ 𝙰𝚗𝚐𝚎𝚕 ҩᴜᥱ֟፝ᥱɴ⋆˙⟡࿐",
    "☁️𝒮𝓌𝑒𝑒𝓉 𝒞𝓁☁️𝓊𝒹☁️"
  ],
  gamer: [
    "𝚾-Ꮮᴏʀᴅ 亗",
    "ɪᴍ • F ᴀ ɴ ɪ •々",
    "𝑴ꫝ𝑹𝑪𝑶 모 ꤪꤨꤪ",
    "Ƭ͢ɴ ⋆ｂａｂｕ☂",
    "៚ɪ ᴛ ᴀ ᴄ ʜ ɪ ❶❶"
  ],
  fancy: [
    "ꫝ𝛈𝛋𝛖sʜ  ??",
    "𝙲𝚁𝙰𝚉𝚈 βσყ ×͜×",
    "आदिवासी ෴",
    "ᛖᚱ Vιяυѕ ⚠"
  ],
  font: [
    "ᴅ ɪ ᴍ ⌔ ɴ ᴅ",
    "𝐂 🂱 𝐑 𝐃",
    "ᝰ 𝘢 𝘷 𝘦",
    "𝘚𝘗ΞΞ𝘋",
    "ꫝυяα"
  ]
};

// UPDATED: Now styles are organized by category as arrays
const stylesByCategory = {
  love: [
    {
      name: "love_style_1",
      prefix: "✿ ᴍʀ !╣",
      suffix: "╠! ✿",
      map: {
        a: "ꫝ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "𝖎", j: "ᴊ",
        k: "ᴋ", l: "ℓ", m: "ᴍ", n: "𝛈", o: "Ꭷ", p: "ᴘ", q: "𝛗", r: "ʀ",
        s: "ꜱ", t: "ᴛ", u: "ꪽ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
      }
    },
      
  {
    name: "love_style_5",
    prefix: "˗ˏˋ🐼ﮩ٨ـ",
    suffix: "ـﮩ٨ـ🐼ˎˊ˗",
    map: {
      a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
      k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
      u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ"
    }
  },
  
  {
    name: "love_style_6",
    prefix: "˗ˏˋ🐾𐙚",
    suffix: "𐙚🐾ˎˊ˗࿐",
    map: {
      a: "Δ", b: "β", c: "C", d: "Đ", e: "Σ", f: "Ϝ", g: "Ꮆ", h: "Ħ", i: "I", j: "J",
      k: "К", l: "Ꮭ", m: "M", n: "П", o: "Ø", p: "Ƥ", q: "Ǫ", r: "Ŗ", s: "Ѕ", t: "Ͳ",
      u: "Ц", v: "Ѵ", w: "Ш", x: "X", y: "Ψ", z: "Ẕ"
    }
  },
  
  {
    name: "love_style_7",
    prefix: "𐙚✨˚",
    suffix: "˚✨𐙚 ツ",
    map: {
      a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
      k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
      u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷"
    }
  },
  
  {
    name: "love_style_8",
    prefix: "𓆜⋆˚࿔⊹ ࣪",
    suffix: " 𓆝⋆.˚﹏𓊝₊˚⊹",
    map: {
      a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
      k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
      u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ"
    }
  },
  
  {
    name: "love_style_9",
    prefix: "̤̮ 🅝 ̤̮🅐 ̤̮🅜 ̤̮🅔 ",
    suffix: " ✔",
    map: {
      a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
      k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
      u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
    }
  },
    
    {
      name: "love_style_2",
      prefix: "❤️ ",
      suffix: " ❤️",
      map: {
        a: "α", b: "ɓ", c: "ƈ", d: "ɗ", e: "ҽ", f: "ϝ", g: "ɠ", h: "ɦ", i: "ι", j: "ʝ",
        k: "ƙ", l: "ʅ", m: "ɱ", n: "ɳ", o: "σ", p: "ρ", q: "ϙ", r: "ɾ",
        s: "ʂ", t: "ƚ", u: "υ", v: "ʋ", w: "ɯ", x: "x", y: "ყ", z: "ȥ"
      }
    }
  ],
  gamer: [
    {
      name: "gamer_style_1",
      prefix: "—͟͞͞★ ",
      suffix: " ✓",
      map: {
        a: "ꫝ", b: "𝘉", c: "Ͻ", d: "𝘋", e: "Ξ", f: "𝘍", g: "𝘎", h: "𝘏", i: "Ί", j: "𝘑",
        k: "𝘒", l: "𝘓", m: "𝘔", n: "𝘕", o: "Ꮎ", p: "𝘗", q: "𝘘", r: "𝘙",
        s: "𝘚", t: "𝘛", u: "Ü", v: "𝘝", w: "𝘞", x: "𝘟", y: "Y", z: "Ż"
      }
    },
    {
      name: "gamer_style_2",
      prefix: "🎮 ",
      suffix: " 🎮",
      map: {
        a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
        k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ",
        s: "ꜱ", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
      }
    }
  ],
  fancy: [
    {
      name: "fancy_style_1",
      prefix: "𝐿𝑖𝑣𝑒 !! ┊",
      suffix: " ◕⃝┊˚࿔⊹",
      map: {
        a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "ƒ", g: "𝚐", h: "𝚑", i: "𝚒", j: "נ",
        k: "𝚔", l: "ℓ", m: "𝚖", n: "η", o: "𝚘", p: "𝚙", q: "զ", r: "я",
        s: "𝚜", t: "τ", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "ƶ"
      }
    },
    
  {
    name: "fancy_style_3",
    prefix: "T͢N͢ ☯",
    suffix: "メ࿐",
    map: {
      a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
      k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
      u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
    }
  },
  
  {
    name: "fancy_style_4",
    prefix: "ᴏᴘ メ",
    suffix: "メ࿐",
    map: {
      a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
      k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
      u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
    }
  },
  
  {
    name: "fancy_style_5",
    prefix: "₦₲ ",
    suffix: " ™",
    map: {
      a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
      k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
      u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
    }
  },
  
  {
    name: "fancy_style_6",
    prefix: "𝚼𝚻_",
    suffix: " ✔",
    map: {
      a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
      k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
      u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ"
    }
  },
  
  {
    name: "fancy_style_7",
    prefix: "༒",
    suffix: " ✿˚₊࿐ ᵒᵖ",
    map: {
      a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
      k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
      u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
    }
  },
    {
      name: "fancy_style_2",
      prefix: "✨ ",
      suffix: " ✨",
      map: {
        a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "𝑒", f: "𝒻", g: "𝑔", h: "𝒽", i: "𝒾", j: "𝒿",
        k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "𝑜", p: "𝓅", q: "𝓆", r: "𝓇",
        s: "𝓈", t: "𝓉", u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓏"
      }
    }
  ],
  font: [
    {
      name: "font_style_1",
      prefix: "",
      suffix: "",
      map: {
        a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
        k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁",
        s: "🅂", t: "🅃", u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
      }
    },
    {
      name: "font_style_2",
      prefix: "",
      suffix: "",
      map: {
        a: "𝗔", b: "𝗕", c: "𝗖", d: "𝗗", e: "𝗘", f: "𝗙", g: "𝗚", h: "𝗛", i: "𝗜", j: "𝗝",
        k: "𝗞", l: "𝗟", m: "𝗠", n: "𝗡", o: "𝗢", p: "𝗣", q: "𝗤", r: "𝗥",
        s: "𝗦", t: "𝗧", u: "𝗨", v: "𝗩", w: "𝗪", x: "𝗫", y: "𝗬", z: "𝗭"
      }
    }
  ]
};

const symbolsData = {
  frames: [
    { symbol: "꧁", name: "Left Frame" },
    { symbol: "꧂", name: "Right Frame" },
    { symbol: "❮", name: "Left Arrow" },
    { symbol: "❯", name: "Right Arrow" },
    { symbol: "︻", name: "Left Gun" },
    { symbol: "︼", name: "Right Gun" },
    { symbol: "⫷", name: "Left Triple" },
    { symbol: "⫸", name: "Right Triple" },
    { symbol: "《", name: "Left Book" },
    { symbol: "》", name: "Right Book" },
    { symbol: "«", name: "Left Double" },
    { symbol: "»", name: "Right Double" },
    { symbol: "【", name: "Left Bracket" },
    { symbol: "】", name: "Right Bracket" },
    { symbol: "〖", name: "Left White" },
    { symbol: "〗", name: "Right White" },
    { symbol: "『", name: "Left Corner" },
    { symbol: "』", name: "Right Corner" },
    { symbol: "❰", name: "Heavy Left" },
    { symbol: "❱", name: "Heavy Right" }
  ],
  tech: [
    { symbol: "░", name: "Light Shade" },
    { symbol: "▒", name: "Medium Shade" },
    { symbol: "▓", name: "Dark Shade" },
    { symbol: "█", name: "Full Block" },
    { symbol: "▲", name: "Up Triangle" },
    { symbol: "▼", name: "Down Triangle" },
    { symbol: "◆", name: "Diamond" },
    { symbol: "▣", name: "Square with Dot" },
    { symbol: "◈", name: "Diamond in Square" },
    { symbol: "◉", name: "Fisheye" },
    { symbol: "◊", name: "Lozenge" },
    { symbol: "■", name: "Black Square" },
    { symbol: "□", name: "White Square" },
    { symbol: "▪", name: "Black Small Square" },
    { symbol: "▫", name: "White Small Square" }
  ],
  gun: [
    { symbol: "︻デ═一★彡", name: "Star Gun" },
    { symbol: "︻╦╤─ ▸▹", name: "PARAFAL" },
    { symbol: "︻デ═一", name: "Simple Gun" },
    { symbol: "︻╦̵̵͇̿̿̿̿╤──", name: "AKM" },
    { symbol: "├ ┱ ⋯", name: "MP40" },
    { symbol: "︻デ═一✷✷", name: "Flower Gun" }
  ],
  cute: [
    { symbol: "☺︎", name: "Smiley" },
    { symbol: "☃︎", name: "Snowman" },
    { symbol: "💗᪲᪲᪲", name: "Hearts" }
  ]
};

// Function to add new styles dynamically
function addNewStyle(category, styleName, prefix, suffix, charMap) {
  if (!stylesByCategory[category]) {
    stylesByCategory[category] = [];
  }
  
  // Check if style already exists
  const exists = stylesByCategory[category].find(s => s.name === styleName);
  if (exists) {
    console.log(`Style "${styleName}" already exists in ${category}`);
    return false;
  }
  
  const newStyle = {
    name: styleName,
    prefix: prefix,
    suffix: suffix,
    map: charMap
  };
  
  stylesByCategory[category].push(newStyle);
  console.log(`New style "${styleName}" added to ${category}`);
  
  // If this category is currently selected, regenerate styles
  if (currentFilter === category) {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
      generateStyles();
    }
  }
  
  return true;
}

// Function to get random order of styles
function getRandomizedStyles(category) {
  const styles = stylesByCategory[category] || [];
  // Create a copy of the array
  const shuffled = [...styles];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  setupEventListeners();
  loadSymbols('frames');
  
  // Add some example new styles (you can remove these or add your own)
  addNewStyle('love', 'love_style_3', '💝 ', ' 💝', {
    a: "å", b: "ß", c: "ç", d: "∂", e: "ê", f: "ƒ", g: "g", h: "h", i: "î", j: "j",
    k: "k", l: "l", m: "m", n: "ñ", o: "ø", p: "p", q: "q", r: "r",
    s: "§", t: "†", u: "û", v: "v", w: "w", x: "x", y: "ÿ", z: "z"
  });
  
  addNewStyle('gamer', 'gamer_style_3', '[PLAYER] ', '', {
    a: "α", b: "β", c: "ς", d: "δ", e: "ε", f: "ғ", g: "ɢ", h: "н", i: "ι", j: "ʝ",
    k: "κ", l: "ʟ", m: "м", n: "ɴ", o: "σ", p: "ρ", q: "q", r: "я",
    s: "s", t: "τ", u: "υ", v: "ν", w: "ω", x: "χ", y: "у", z: "z"
  });
});

function setupEventListeners() {
  // Auto-generate when typing
  document.getElementById('nameInput').addEventListener('input', function() {
    clearTimeout(nameInputTimer);
    nameInputTimer = setTimeout(() => {
      if (this.value.trim().length > 0) {
        generateStyles();
      }
    }, 300);
  });
  
  // Symbol picker button
  document.getElementById('symbolPickerBtn').addEventListener('click', openSymbolModal);
  
  // Scroll to top button
  const scrollBtn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Close modal when clicking outside
  document.getElementById('symbolModal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeSymbolModal();
    }
  });
}

function convert(name, map) {
  return name.toLowerCase().split("").map(ch => map[ch] || ch).join("");
}

function generateStyles() {
  const name = document.getElementById('nameInput').value.trim();
  const result = document.getElementById('result');
  const resultsCount = document.getElementById('resultsCount');
  
  result.innerHTML = "";
  
  if (!name) {
    result.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-magic"></i>
        <p>Enter your name to see magical styles!</p>
      </div>
    `;
    resultsCount.textContent = "0";
    return;
  }
  
  // Get randomized styles for current category
  const styles = getRandomizedStyles(currentFilter);
  
  if (!styles || styles.length === 0) {
    result.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-exclamation-circle"></i>
        <p>No styles available for this category.</p>
      </div>
    `;
    resultsCount.textContent = "0";
    return;
  }
  
  // Generate each style
  styles.forEach(style => {
    const styled = style.prefix + convert(name, style.map) + style.suffix;
    
    const div = document.createElement('div');
    div.className = `style-box ${currentFilter}`;
    div.innerHTML = `
      <span class="style-text">${styled}</span>
      <button class="copy-btn" onclick="copyText('${styled.replace(/'/g, "\\'")}')">
        <i class="fas fa-copy"></i> Copy
      </button>
    `;
    result.appendChild(div);
  });
  
  // Update results count
  resultsCount.textContent = styles.length;
}

function selectCategory(type) {
  currentFilter = type;
  
  // Update active tab
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === type) {
      btn.classList.add('active');
    }
  });
  
  // Hide suggestions when switching categories
  if (suggestionsVisible) {
    toggleSuggestions();
  }
  
  // Auto-generate if there's a name
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    generateStyles();
  } else {
    // Clear results if no name
    document.getElementById('result').innerHTML = `
      <div class="empty-state">
        <i class="fas fa-magic"></i>
        <p>Enter your name to see ${type} styles!</p>
      </div>
    `;
    document.getElementById('resultsCount').textContent = "0";
  }
}

function toggleSuggestions() {
  const suggestionsSection = document.getElementById('suggestionsSection');
  const toggleBtn = document.querySelector('.toggle-suggestions-btn');
  
  if (!suggestionsVisible) {
    // Show suggestions
    suggestionsSection.classList.add('show');
    
    const currentSuggestions = suggestionsData[currentFilter] || [];
    
    if (currentSuggestions.length === 0) {
      suggestionsSection.innerHTML = '<p class="no-suggestions">No suggestions available for this category.</p>';
      return;
    }
    
    let html = `<h3 class="suggestions-title"><i class="fas fa-lightbulb"></i> ${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)} Name Suggestions</h3>`;
    html += `<div class="suggestions-grid">`;
    
    currentSuggestions.forEach(suggestion => {
      html += `
        <div class="suggestion-box ${currentFilter}">
          <span class="suggestion-text">${suggestion}</span>
          <button class="suggestion-copy-btn" onclick="copyText('${suggestion.replace(/'/g, "\\'")}')">
            <i class="fas fa-copy"></i> Copy
          </button>
        </div>
      `;
    });
    
    html += `</div>`;
    suggestionsSection.innerHTML = html;
    
    toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Suggestions';
    suggestionsVisible = true;
  } else {
    // Hide suggestions
    suggestionsSection.classList.remove('show');
    toggleBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Show Name Suggestions';
    suggestionsVisible = false;
  }
}

function openSymbolModal() {
  document.getElementById('symbolModal').classList.add('show');
}

function closeSymbolModal() {
  document.getElementById('symbolModal').classList.remove('show');
}

function openSymbolTab(tabName) {
  // Update active tab
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(tabName)) {
      btn.classList.add('active');
    }
  });
  
  // Load symbols for this tab
  loadSymbols(tabName);
}

function loadSymbols(category) {
  const symbolsGrid = document.getElementById('symbolsGrid');
  const symbols = symbolsData[category] || [];
  
  if (symbols.length === 0) {
    symbolsGrid.innerHTML = '<p class="no-symbols">No symbols available for this category.</p>';
    return;
  }
  
  let html = '';
  symbols.forEach(symbol => {
    html += `
      <div class="symbol-item">
        <div class="symbol-display">${symbol.symbol}</div>
        <div class="symbol-name">${symbol.name}</div>
        <div class="symbol-actions">
          <button class="symbol-insert-btn" onclick="insertSymbol('${symbol.symbol.replace(/'/g, "\\'")}')">
            <i class="fas fa-plus"></i> Insert
          </button>
          <button class="symbol-copy-btn" onclick="copyText('${symbol.symbol.replace(/'/g, "\\'")}')">
            <i class="fas fa-copy"></i> Copy
          </button>
        </div>
      </div>
    `;
  });
  
  symbolsGrid.innerHTML = html;
}

function insertSymbol(symbol) {
  const nameInput = document.getElementById('nameInput');
  const currentValue = nameInput.value;
  const cursorPos = nameInput.selectionStart;
  
  // Insert symbol at cursor position
  nameInput.value = currentValue.substring(0, cursorPos) + symbol + currentValue.substring(cursorPos);
  
  // Update cursor position
  nameInput.selectionStart = nameInput.selectionEnd = cursorPos + symbol.length;
  
  // Trigger input event to auto-generate
  nameInput.dispatchEvent(new Event('input'));
  
  // Close modal
  closeSymbolModal();
}

function copyText(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      // Show feedback
      if (event && event.target) {
        const originalText = event.target.innerHTML;
        event.target.innerHTML = '<i class="fas fa-check"></i> Copied!';
        event.target.style.background = 'linear-gradient(135deg, #00ff88, #00cc6a)';
        
        setTimeout(() => {
          event.target.innerHTML = originalText;
          event.target.style.background = '';
        }, 1500);
      } else {
        // Show a toast notification if event is not available
        showToast('Text copied to clipboard!');
      }
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      alert("Failed to copy text. Please try again.");
    });
}

function showToast(message) {
  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 80px;
    right: 30px;
    background: linear-gradient(135deg, #00ff88, #00cc6a);
    color: white;
    padding: 12px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 2000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  
  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

// Add CSS for toast animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
  
  .no-suggestions, .no-symbols {
    text-align: center;
    padding: 40px 20px;
    color: #aaa;
    font-style: italic;
  }
  
  .symbol-name {
    font-size: 12px;
    color: #aaa;
    text-align: center;
  }
`;
document.head.appendChild(style);

// Export the function to add new styles globally
window.addNewStyle = addNewStyle;
