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
    name: "love_style_53",
    prefix: "˗ˏˋ🐼ﮩ٨ـ",
    suffix: "ـﮩ٨ـ🐼ˎˊ˗",
    map: {
      // Lowercase
      a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
      k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
      u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
      // Uppercase (same as lowercase)
      A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
      K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
      U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
    }
  },
  {
    name: "love_style_54",
    prefix: "𐙚✨˚",
    suffix: "˚✨𐙚 ツ",
    map: {
      // Lowercase
      a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
      k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
      u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
      // Uppercase (different)
      A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
      K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
      U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
    }
  },
  {
    name: "love_style_55",
    prefix: "—͟͞͞✞ ",
    suffix: " ✞𓂃✍︎",
    map: {
      // Lowercase
      a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ",
      k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ",
      u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
      // Uppercase (same as lowercase)
      A: "ᵃ", B: "ᵇ", C: "ᶜ", D: "ᵈ", E: "ᵉ", F: "ᶠ", G: "ᵍ", H: "ʰ", I: "ⁱ", J: "ʲ",
      K: "ᵏ", L: "ˡ", M: "ᵐ", N: "ⁿ", O: "ᵒ", P: "ᵖ", Q: "ᑫ", R: "ʳ", S: "ˢ", T: "ᵗ",
      U: "ᵘ", V: "ᵛ", W: "ʷ", X: "ˣ", Y: "ʸ", Z: "ᶻ"
    }
  },
  {
    name: "love_style_56",
    prefix: "—͟͞͞✰",
    suffix: "ᯓ✈︎⋆ˎˊ˗",
    map: {
      // Lowercase
      a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
      k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
      u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
      // Uppercase
      A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
      K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
      U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
    }
  },
  {
    name: "love_style_57",
    prefix: "𐙚˚⊹",
    suffix: " ☺︎ˎˊ˗࿐",
    map: {
      // Lowercase
      a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
      k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
      u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
      // Uppercase (same as lowercase)
      A: "α", B: "в", C: "c", D: "ɗ", E: "ε", F: "ƒ", G: "ɠ", H: "н", I: "ɪ", J: "נ",
      K: "κ", L: "ℓ", M: "м", N: "η", O: "σ", P: "ρ", Q: "զ", R: "я", S: "ѕ", T: "τ",
      U: "υ", V: "ν", W: "ω", X: "χ", Y: "γ", Z: "ƶ"
    }
  },
  {
    name: "love_style_58",
    prefix: "ᝰ.",
    suffix: "ᝰ.ᐟ࿐",
    map: {
      // Lowercase
      a: "𝚨", b: "𝚩", c: "𝚪", d: "𝚫", e: "𝚬", f: "𝚺", g: "𝛀", h: "𝚮", i: "𝚰", j: "𝗝",
      k: "𝚱", l: "𝚲", m: "𝚳", n: "𝚴", o: "𝚶", p: "𝚸", q: "𝚽", r: "𝗥", s: "𝚵", t: "𝚻",
      u: "𝚷", v: "𝚼", w: "𝗪", x: "𝚾", y: "𝚿", z: "𝚭",
      // Uppercase (same as lowercase)
      A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚺", G: "𝛀", H: "𝚮", I: "𝚰", J: "𝗝",
      K: "𝚱", L: "𝚲", M: "𝚳", N: "𝚴", O: "𝚶", P: "𝚸", Q: "𝚽", R: "𝗥", S: "𝚵", T: "𝚻",
      U: "𝚷", V: "𝚼", W: "𝗪", X: "𝚾", Y: "𝚿", Z: "𝚭"
    }
  },
    
  {
    name: "love_style_14",
    prefix: "𐙚˚⊹",
    suffix: " ☺︎ˎˊ˗࿐",
    map: {
      a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
      k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
      u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
    }
  },
  {
    name: "love_style_15",
    prefix: "",
    suffix: " ☕︎ˎˊ˗",
    map: {
      a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
      k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
      u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
    }
  },
  {
    name: "love_style_16",
    prefix: "🫰🏻⊹˚₊𐙚",
    suffix: "𐙚₊˚⊹࿐",
    map: {
      a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
      k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
      u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
    }
  },
  {
    name: "love_style_17",
    prefix: "—͟͞͞✰",
    suffix: "ᯓ✈︎⋆ˎˊ˗",
    map: {
      a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
      k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
      u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇"
    }
  },
  {
    name: "love_style_18",
    prefix: "—͟͞͞✨⋆ ",
    suffix: "⋆🥀🐼ˎˊ˗",
    map: {
      a: "ᵃ⃠", b: "ᵇ⃠", c: "ᶜ⃠", d: "ᵈ⃠", e: "ᵉ⃠", f: "ᶠ⃠", g: "ᵍ⃠", h: "ʰ⃠", i: "ⁱ⃠", j: "ʲ⃠",
      k: "ᵏ⃠", l: "ˡ⃠", m: "ᵐ⃠", n: "ⁿ⃠", o: "ᵒ⃠", p: "ᵖ⃠", q: "ᑫ⃠", r: "ʳ⃠", s: "ˢ⃠", t: "ᵗ⃠",
      u: "ᵘ⃠", v: "ᵛ⃠", w: "ʷ⃠", x: "ˣ⃠", y: "ʸ⃠", z: "ᶻ⃠"
    }
  },
  {
    name: "love_style_19",
    prefix: "༒☯⃟",
    suffix: "⃟☯༒",
    map: {
      a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
      k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
      u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
    }
  },
  {
    name: "love_style_20",
    prefix: "ᵛⁱᵖ₊˚⊹",
    suffix: " 𐙚₊˚⊹♕",
    map: {
      a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
      k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
      u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
    }
  },
  {
    name: "love_style_21",
    prefix: "༒˗ˏˋᵛ𖦹",
    suffix: " 𖦹ᵛˎˊ˗༒🥀",
    map: {
      a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
      k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
      u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
    }
  },
  {
    name: "love_style_22",
    prefix: "꧁♡",
    suffix: "♡꧂",
    map: {
      a: "a͓̽", b: "b͓̽", c: "c͓̽", d: "d͓̽", e: "e͓̽", f: "f͓̽", g: "g͓̽", h: "h͓̽", i: "i͓̽", j: "j͓̽",
      k: "k͓̽", l: "l͓̽", m: "m͓̽", n: "n͓̽", o: "o͓̽", p: "p͓̽", q: "q͓̽", r: "r͓̽", s: "s͓̽", t: "t͓̽",
      u: "u͓̽", v: "v͓̽", w: "w͓̽", x: "x͓̽", y: "y͓̽", z: "z͓̽"
    }
  },
  {
    name: "love_style_23",
    prefix: "𝕏_—͟͞͞💞",
    suffix: "_—͟͞͞💞",
    map: {
      a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
      k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
      u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
    }
  },
  {
    name: "love_style_24",
    prefix: "💞₊˚⊹ ",
    suffix: "₊˚⊹🦋ˎˊ˗࿐",
    map: {
      a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
      k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
      u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
    }
  },
  {
    name: "love_style_25",
    prefix: "༒₊˚⊹",
    suffix: "⊹˚₊𓅫ˎˊ˗࿐",
    map: {
      a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
      k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
      u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟"
    }
  },
  {
    name: "love_style_26",
    prefix: "ᝰ.",
    suffix: "ᝰ.ᐟ࿐",
    map: {
      a: "𝚨", b: "𝚩", c: "𝚪", d: "𝚫", e: "𝚬", f: "𝚺", g: "𝛀", h: "𝚮", i: "𝚰", j: "𝗝",
      k: "𝚱", l: "𝚲", m: "𝚳", n: "𝚴", o: "𝚶", p: "𝚸", q: "𝚽", r: "𝗥", s: "𝚵", t: "𝚻",
      u: "𝚷", v: "𝚼", w: "𝗪", x: "𝚾", y: "𝚿", z: "𝚭"
    }
  },
  {
    name: "love_style_27",
    prefix: "✨",
    suffix: "ッ🤞🏻💞",
    map: {
      a: "aッ", b: "bッ", c: "cッ", d: "dッ", e: "eッ", f: "fッ", g: "gッ", h: "hッ", i: "iッ", j: "jッ",
      k: "kッ", l: "lッ", m: "mッ", n: "nッ", o: "oッ", p: "pッ", q: "qッ", r: "rッ", s: "sッ", t: "tッ",
      u: "uッ", v: "vッ", w: "wッ", x: "xッ", y: "yッ", z: "zッ"
    }
  },
  {
    name: "love_style_28",
    prefix: "—͟͞͞𝚫𔓎 ",
    suffix: " 𔓎—͟͞͞𝚫",
    map: {
      a: "𝙰", b: "𝙱", c: "𝙲", d: "𝙳", e: "𝙴", f: "𝙵", g: "𝙶", h: "𝙷", i: "𝙸", j: "𝙹",
      k: "𝙺", l: "𝙻", m: "𝙼", n: "𝙽", o: "𝙾", p: "𝙿", q: "𝚀", r: "𝚁", s: "𝚂", t: "𝚃",
      u: "𝚄", v: "𝚅", w: "𝚆", x: "𝚇", y: "𝚈", z: "𝚉"
    }
  },
  {
    name: "love_style_29",
    prefix: "🥀✗✨",
    suffix: "✨✗🥀",
    map: {
      a: "Α", b: "Β", c: "Ͻ", d: "Ɗ", e: "Σ", f: "Ƒ", g: "Ɠ", h: "Ν", i: "Ι", j: "Ј",
      k: "Κ", l: "ᒪ", m: "Μ", n: "Ν", o: "Ο", p: "Ρ", q: "Ԛ", r: "Я", s: "Ѕ", t: "Τ",
      u: "Υ", v: "𝘝", w: "Ω", x: "Χ", y: "Υ", z: "Ζ"
    }
  },
  {
    name: "love_style_30",
    prefix: "✨♡",
    suffix: "♡_✨👀",
    map: {
      a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
      k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
      u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
    }
  },
  {
    name: "love_style_31",
    prefix: "—͟͞͞𝚫𔓎 ",
    suffix: " —͟͞͞𔓎",
    map: {
      a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
      k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
      u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
    }
  },
  {
    name: "love_style_32",
    prefix: "🥀✨",
    suffix: "✨🥀",
    map: {
      a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
      k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
      u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
    }
  },
  {
    name: "love_style_33",
    prefix: "𝘓♡𝘝𝘌 ✿₊˚",
    suffix: "˚₊✿_✨",
    map: {
      a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
      k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
      u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
    }
  },
  {
    name: "love_style_34",
    prefix: "☂𓆩♡",
    suffix: "♡𓆪.࿐",
    map: {
      a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
      k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
      u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
    }
  },
  {
    name: "love_style_35",
    prefix: "⋆｡˚💞⋆｡",
    suffix: "⋆｡˚💞⋆｡˚",
    map: {
      a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
      k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
      u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
    }
  },
  {
    name: "love_style_36",
    prefix: "『♡",
    suffix: "♡』✨ ❤️‍🔥",
    map: {
      a: "λ", b: "ɮ", c: "Ͷ", d: "ᗫ", e: "σ", f: "ғ", g: "ɠ", h: "һ", i: "ι", j: "ʝ",
      k: "ҡ", l: "ŀ", m: "ṃ", n: "п", o: "ø", p: "ƥ", q: "ǫ", r: "ʀ", s: "ѕ", t: "ʇ",
      u: "ц", v: "ѵ", w: "ш", x: "χ", y: "¥", z: "ż"
    }
  },
  {
    name: "love_style_37",
    prefix: "꧁❀♥︎•",
    suffix: "•♥︎꧂",
    map: {
      a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
      k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
      u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
    }
  },
  {
    name: "love_style_38",
    prefix: "Sмιℓєメ⇝☺︎",
    suffix: "☺︎⇜🦋",
    map: {
      a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
      k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
      u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
    }
  },
  {
    name: "love_style_39",
    prefix: "ᴸᴼⱽᴱ ",
    suffix: " «━❥",
    map: {
      a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
      k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
      u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇"
    }
  },
  {
    name: "love_style_40",
    prefix: "🦋 ",
    suffix: " ♡࿐",
    map: {
      a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
      k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
      u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
    }
  },
  {
    name: "love_style_41",
    prefix: "✨",
    suffix: "🦋",
    map: {
      a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
      k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
      u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
    }
  },
  {
    name: "love_style_42",
    prefix: "░·˚₊",
    suffix: "₊˚·░",
    map: {
      a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
      k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
      u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉"
    }
  },
  {
    name: "love_style_43",
    prefix: "░✰☺︎",
    suffix: "░ 🫀",
    map: {
      a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
      k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
      u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
    }
  },
  {
    name: "love_style_44",
    prefix: "𓆩♫𓆪",
    suffix: "𓆩♫𓆪",
    map: {
      a: "𝙰", b: "𝙱", c: "𝙲", d: "𝙳", e: "𝙴", f: "𝙵", g: "𝙶", h: "𝙷", i: "𝙸", j: "𝙹",
      k: "𝙺", l: "𝙻", m: "𝙼", n: "𝙽", o: "𝙾", p: "𝙿", q: "𝚀", r: "𝚁", s: "𝚂", t: "𝚃",
      u: "𝚄", v: "𝚅", w: "𝚆", x: "𝚇", y: "𝚈", z: "𝚉"
    }
  },
  {
    name: "love_style_45",
    prefix: "♡✨",
    suffix: "✨🦋࿐",
    map: {
      a: "a̸▵", b: "b̸▵", c: "c̸▵", d: "d̸▵", e: "e̸▵", f: "f̸▵", g: "g̸▵", h: "h̸▵", i: "i̸▵", j: "j̸▵",
      k: "k̸▵", l: "l̸▵", m: "m̸▵", n: "n̸▵", o: "o̸▵", p: "p̸▵", q: "q̸▵", r: "r̸▵", s: "s̸▵", t: "t̸▵",
      u: "u̸▵", v: "v̸▵", w: "w̸▵", x: "x̸▵", y: "y̸▵", z: "z̸▵"
    }
  },
  
  {
    name: "love_style_47",
    prefix: "𓆩",
    suffix: "𓆪",
    map: {
      a: "Ⓐ", b: "Ⓑ", c: "Ⓒ", d: "Ⓓ", e: "Ⓔ", f: "Ⓕ", g: "Ⓖ", h: "Ⓗ", i: "Ⓘ", j: "Ⓙ",
      k: "Ⓚ", l: "Ⓛ", m: "Ⓜ", n: "Ⓝ", o: "Ⓞ", p: "Ⓟ", q: "Ⓠ", r: "Ⓡ", s: "Ⓢ", t: "Ⓣ",
      u: "Ⓤ", v: "Ⓥ", w: "Ⓦ", x: "Ⓧ", y: "Ⓨ", z: "Ⓩ"
    }
  },
  {
    name: "love_style_48",
    prefix: "♡",
    suffix: "_☕︎",
    map: {
      a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
      k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
      u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
    }
  },
  {
    name: "love_style_49",
    prefix: "『♡",
    suffix: "♡』✨",
    map: {
      a: "λ", b: "ɫ", c: "Ϟ", d: "ᒪ", e: "σ", f: "ғ", g: "ɠ", h: "һ", i: "ι", j: "ʝ",
      k: "ҡ", l: "ŀ", m: "ṃ", n: "п", o: "ø", p: "ƥ", q: "ǫ", r: "ʀ", s: "ѕ", t: "ʇ",
      u: "ц", v: "ѵ", w: "ш", x: "χ", y: "¥", z: "ż"
    }
  },
  {
    name: "love_style_50",
    prefix: "꧁♡",
    suffix: "♡꧂",
    map: {
      a: "a̸◉", b: "b̸◉", c: "c̸◉", d: "d̸◉", e: "e̸◉", f: "f̸◉", g: "g̸◉", h: "h̸◉", i: "i̸◉", j: "j̸◉",
      k: "k̸◉", l: "l̸◉", m: "m̸◉", n: "n̸◉", o: "o̸◉", p: "p̸◉", q: "q̸◉", r: "r̸◉", s: "s̸◉", t: "t̸◉",
      u: "u̸◉", v: "v̸◉", w: "w̸◉", x: "x̸◉", y: "y̸◉", z: "z̸◉"
    }
  },
  {
    name: "love_style_51",
    prefix: "♡✨",
    suffix: "✨࿐",
    map: {
      a: "a̸▵", b: "b̸▵", c: "c̸▵", d: "d̸▵", e: "e̸▵", f: "f̸▵", g: "g̸▵", h: "h̸▵", i: "i̸▵", j: "j̸▵",
      k: "k̸▵", l: "l̸▵", m: "m̸▵", n: "n̸▵", o: "o̸▵", p: "p̸▵", q: "q̸▵", r: "r̸▵", s: "s̸▵", t: "t̸▵",
      u: "u̸▵", v: "v̸▵", w: "w̸▵", x: "x̸▵", y: "y̸▵", z: "z̸▵"
    }
  },
  {
    name: "love_style_52",
    prefix: "ᴸᴼⱽᴱ ",
    suffix: " « ❥",
    map: {
      a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
      k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
      u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
    }
  },
 {
  name: "love_style_46",
  prefix: "꧁♡",
  suffix: "♡꧂",
  map: {
    a: "A̸◉", b: "B̸◉", c: "C̸◉", d: "D̸◉", e: "E̸◉", f: "F̸◉", g: "G̸◉", h: "H̸◉", i: "I̸◉", j: "J̸◉",
    k: "K̸◉", l: "L̸◉", m: "M̸◉", n: "N̸◉", o: "O̸◉", p: "P̸◉", q: "Q̸◉", r: "R̸◉", s: "S̸◉", t: "T̸◉",
    u: "U̸◉", v: "V̸◉", w: "W̸◉", x: "X̸◉", y: "Y̸◉", z: "Z̸◉"
  }
},
  {
    name: "love_style_10",
    prefix: "⊹˚₊𐙚",
    suffix: "𐙚₊˚⊹࿐",
    map: {
      a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
      k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
      u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
    }
  },
  {
    name: "love_style_11",
    prefix: "—͟͞͞✰",
    suffix: "ᯓ✈︎⋆ˎˊ˗",
    map: {
      a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
      k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
      u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇"
    }
  },
  {
    name: "love_style_12",
    prefix: "—͟͞͞✞ ",
    suffix: " ✞𓂃✍︎",
    map: {
      a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ",
      k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ",
      u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ"
    }
  },
  {
    name: "love_style_13",
    prefix: "—͟͞͞✨ ",
    suffix: "🥀🐼ˎˊ˗",
    map: {
      a: "ᴬ⃠", b: "ᴮ⃠", c: "ᶜ⃠", d: "ᴰ⃠", e: "ᴱ⃠", f: "ᶠ⃠", g: "ᴳ⃠", h: "ᴴ⃠", i: "ᴵ⃠", j: "ᴶ⃠",
      k: "ᴷ⃠", l: "ᴸ⃠", m: "ᴹ⃠", n: "ᴺ⃠", o: "ᴼ⃠", p: "ᴾ⃠", q: "ᵠ⃠", r: "ᴿ⃠", s: "ˢ⃠", t: "ᵀ⃠",
      u: "ᵁ⃠", v: "ⱽ⃠", w: "ᵂ⃠", x: "ˣ⃠", y: "ʸ⃠", z: "ᶻ⃠"
    }
  },
    {
  name: "love_style_10",
  prefix: " ┈━═❥•·˚",
  suffix: "•˚·❥·˚═━┈",
  map: {
    a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
    k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻",
    s: "𝓼", t: "𝓽", u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
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
    name: "gamer_style_3",
    prefix: "T͢N͢ ☯",
    suffix: "メ࿐",
    map: {
      a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
      k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
      u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
    }
  },
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
    name: "gamer_style_4",
    prefix: "ᴏᴘ メ",
    suffix: "メ࿐",
    map: {
      a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
      k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
      u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
    }
  },
  {
    name: "gamer_style_5",
    prefix: "₦₲ ",
    suffix: " ™",
    map: {
      a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
      k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
      u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
    }
  },
  {
    name: "gamer_style_6",
    prefix: "𝚼𝚻_",
    suffix: " ✔",
    map: {
      a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
      k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
      u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ"
    }
  },
  {
    name: "gamer_style_7",
    prefix: "༒",
    suffix: " ✿˚₊࿐ ᵒᵖ",
    map: {
      a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
      k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
      u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
    }
  },
  {
    name: "gamer_style_8",
    prefix: "ҩɴ ✗ ",
    suffix: " ✗ ⁹⁹⁹",
    map: {
      a: "𝙰", b: "𝙱", c: "𝙲", d: "𝙳", e: "𝙴", f: "𝙵", g: "𝙶", h: "𝙷", i: "𝙸", j: "𝙹",
      k: "𝙺", l: "𝙻", m: "𝙼", n: "𝙽", o: "𝙾", p: "𝙿", q: "𝚀", r: "𝚁", s: "𝚂", t: "𝚃",
      u: "𝚄", v: "𝚅", w: "𝚆", x: "𝚇", y: "𝚈", z: "𝚉"
    }
  },
  {
    name: "gamer_style_9",
    prefix: "𝚾- ",
    suffix: " 모",
    map: {
      a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
      k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
      u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷"
    }
  },
  {
    name: "gamer_style_10",
    prefix: "꧁✞ ",
    suffix: " ✞꧂",
    map: {
      a: "ᵃ͎", b: "ᵇ͎", c: "ᶜ͎", d: "ᵈ͎", e: "ᵉ͎", f: "ᶠ͎", g: "ᵍ͎", h: "ʰ͎", i: "ⁱ͎", j: "ʲ͎",
      k: "ᵏ͎", l: "ˡ͎", m: "ᵐ͎", n: "ⁿ͎", o: "ᵒ͎", p: "ᵖ͎", q: "ᑫ͎", r: "ʳ͎", s: "ˢ͎", t: "ᵗ͎",
      u: "ᵘ͎", v: "ᵛ͎", w: "ʷ͎", x: "ˣ͎", y: "ʸ͎", z: "ᶻ͎"
    }
  },
  {
    name: "gamer_style_11",
    prefix: "ˢⁱᵐᵖˡᵉ✗",
    suffix: "✗ˎˊ˗࿐",
    map: {
      a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
      k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
      u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
    }
  },
  {
    name: "gamer_style_12",
    prefix: "༒✰ ",
    suffix: "✰༒",
    map: {
      a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
      k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
      u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
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
    name: "fancy_style_8",
    prefix: "𐙚✿",
    suffix: "𐙚✿.࿐",
    map: {
      a: "Δ", b: "β", c: "C", d: "Đ", e: "Σ", f: "Ϝ", g: "Ꮆ", h: "Ħ", i: "I", j: "J",
      k: "К", l: "Ꮭ", m: "M", n: "П", o: "Ø", p: "Ƥ", q: "Ǫ", r: "Ŗ", s: "Ѕ", t: "Ͳ",
      u: "Ц", v: "Ѵ", w: "Ш", x: "X", y: "Ψ", z: "Ẕ"
    }
  },
  {
    name: "fancy_style_9",
    prefix: "༒➤⃝🦋",
    suffix: "➤⃝🦋༒",
    map: {
      a: "Ⓐ", b: "Ⓑ", c: "Ⓒ", d: "Ⓓ", e: "Ⓔ", f: "Ⓕ", g: "Ⓖ", h: "Ⓗ", i: "Ⓘ", j: "Ⓙ",
      k: "Ⓚ", l: "Ⓛ", m: "Ⓜ", n: "Ⓝ", o: "Ⓞ", p: "Ⓟ", q: "Ⓠ", r: "Ⓡ", s: "Ⓢ", t: "Ⓣ",
      u: "Ⓤ", v: "Ⓥ", w: "Ⓦ", x: "Ⓧ", y: "Ⓨ", z: "Ⓩ"
    }
  },
  {
    name: "fancy_style_10",
    prefix: "✨✗ ",
    suffix: " ✗✨࿐",
    map: {
      a: "𝙰", b: "𝙱", c: "𝙲", d: "𝙳", e: "𝙴", f: "𝙵", g: "𝙶", h: "𝙷", i: "𝙸", j: "𝙹",
      k: "𝙺", l: "𝙻", m: "𝙼", n: "𝙽", o: "𝙾", p: "𝙿", q: "𝚀", r: "𝚁", s: "𝚂", t: "𝚃",
      u: "𝚄", v: "𝚅", w: "𝚆", x: "𝚇", y: "𝚈", z: "𝚉"
    }
  },
  {
    name: "fancy_style_11",
    prefix: "꧁●⃝⛧",
    suffix: "●⃝⛧꧂",
    map: {
      a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
      k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
      u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
    }
  },
  {
    name: "fancy_style_12",
    prefix: "𐍆𐍆_",
    suffix: "_₊˚⊹🦄",
    map: {
      a: "𐌻", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𝙅",
      k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍀", r: "𐍂", s: "𐍃", t: "𐍄",
      u: "𐍁", v: "𝙑", w: "𐍉", x: "𐍇", y: "𐍅", z: "𐌶"
    }
  },
  {
    name: "fancy_style_13",
    prefix: "༺•͜•",
    suffix: "•͜•༻",
    map: {
      a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
      k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
      u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷"
    }
  },
  {
    name: "fancy_style_14",
    prefix: "𒆜┋",
    suffix: "┋𒆜☂",
    map: {
      a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
      k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
      u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾"
    }
  },
  {
    name: "fancy_style_15",
    prefix: "●⃝✨ ",
    suffix: "●⃝✨👀",
    map: {
      a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
      k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
      u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
    }
  },
  {
    name: "fancy_style_16",
    prefix: "𒆜",
    suffix: "🐼ˎˊ˗࿐",
    map: {
      a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
      k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
      u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
    }
  },
  {
    name: "fancy_style_17",
    prefix: "",
    suffix: "ッ✌︎︎ˎˊ˗",
    map: {
      a: "aッ", b: "bッ", c: "cッ", d: "dッ", e: "eッ", f: "fッ", g: "gッ", h: "hッ", i: "iッ", j: "jッ",
      k: "kッ", l: "lッ", m: "mッ", n: "nッ", o: "oッ", p: "pッ", q: "qッ", r: "rッ", s: "sッ", t: "tッ",
      u: "uッ", v: "vッ", w: "wッ", x: "xッ", y: "yッ", z: "zッ"
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
    { symbol: "@", name: "Smiley" },
    { symbol: "@", name: "Snowman" },
    { symbol: "@", name: "Hearts" },
    { symbol: "𓏲", name: "Cute Symbol 4" },
    { symbol: "𔓎", name: "Cute Symbol 5" },
    { symbol: "(˃͈ ˂͈ )", name: "Cute Symbol 6" },
    { symbol: "𐚁", name: "Cute Symbol 7" },
    { symbol: "𖦹", name: "Cute Symbol 8" },
    { symbol: "🐼", name: "Panda" },
    { symbol: "𖹭", name: "Cute Symbol 10" },
    { symbol: "☂", name: "Umbrella" },
    { symbol: "ꫂ❁", name: "Flower Combo" },
    { symbol: "୧⍤⃝💐", name: "Flower Bouquet" },
    { symbol: "🅾", name: "O Symbol" },
    { symbol: "⌯⌲", name: "Geometric Combo" },
    { symbol: "🐰", name: "Bunny" },
    { symbol: "ツ", name: "Smiley Katakana" },
    { symbol: "๑˃̵ᴗ˂̵๑", name: "Happy Face" },
    { symbol: "𓄯", name: "Cute Symbol 19" },
    { symbol: "🐾", name: "Paw Print" },
    { symbol: "ଳ", name: "Cute Symbol 21" },
    { symbol: "⟡‿⟡", name: "Sparkly Eyes" },
    { symbol: "👒", name: "Hat" },
    { symbol: "꒰ᐢ. .ᐢ꒱", name: "Bear Face" },
    { symbol: " ̤̮ ", name: "Cute Symbol 25" },
    { symbol: " ᥫ᭡ ", name: "Cute Symbol 26" },
    { symbol: "՞•ㅅ•՞", name: "Cat Face" },
    { symbol: "˃ᴗ˂", name: "Happy Face 2" },
    { symbol: "≽^•⩊•^≼", name: "Cute Animal Face" },
    { symbol: "꒦꒷♡꒷꒦", name: "Heart Frame" },
    { symbol: "(✿◠‿◠)", name: "Flower Face" },
    { symbol: "(｡♥‿♥｡)", name: "Heart Eyes" },
    { symbol: "💚᪲᪲᪲", name: "Green Hearts" },
    { symbol: "(˘❥˘)", name: "Kissy Face" },
    { symbol: "(｡◕‿◕｡)", name: "Innocent Face" },
    { symbol: "(๑˃ᴗ˂)ﻭ", name: "Waving Happy Face" },
    { symbol: "➷➷", name: "Arrows" },
    { symbol: "(✧ω✧)", name: "Sparkly Excited" },
    { symbol: "(≧◡≦)", name: "Joyful Face" },
    { symbol: "🍁⃝⃪⃨⃡", name: "Maple Leaf Styled" },
    { symbol: "🌸⃝⃪⃨⃡✧", name: "Blossom Styled" },
    { symbol: "🦋⃝⃪⃨⃡☆", name: "Butterfly Styled" },
    { symbol: "🌷⃝⃪⃨⃡⟆", name: "Tulip Styled" },
    { symbol: "🍃⃝⃪⃨⃡✦", name: "Leaf Styled" },
    { symbol: "💐⃝⃪⃨⃡𖦹", name: "Bouquet Styled" },
    { symbol: "🌼⃝⃪⃨⃡❀", name: "Daisy Styled" },
    { symbol: "🪽⃝⃪⃨⃡✤", name: "Wing Styled" },
    { symbol: "🌺⃝⃪⃨⃡⍣", name: "Hibiscus Styled" },
    { symbol: "💖⃝⃪⃨⃡✩", name: "Sparkling Heart" },
    { symbol: "🩷⃝⃪⃨⃡𓇼", name: "Pink Heart Styled" },
    { symbol: "⭐⃝⃪⃨⃡𓏲", name: "Star Styled" },
    { symbol: "✿⃝⃪⃨⃡ꕤ", name: "Flower Styled" },
    { symbol: "✧⃝⃪⃨⃡∘", name: "Sparkle Styled" },
    { symbol: "❣⃝⃪⃨⃡⇢", name: "Heart Exclamation Styled" },
    { symbol: "✦⃝⃪⃨⃡ꗃ", name: "Star Styled 2" },
    { symbol: "🍂⃝⃪⃨⃡✿", name: "Autumn Leaf Styled" },
    { symbol: "🪽⃝⃪⃨⃡ᯅ", name: "Wing Styled 2" },
    { symbol: "🎀⃝⃪⃨⃡✶", name: "Ribbon Styled" },
    { symbol: "🪷⃝⃪⃨⃡𖡼", name: "Lotus Styled" },
    { symbol: "🌙⃝⃪⃨⃡✧", name: "Moon Styled" },
    { symbol: "🫧⃝⃪⃨⃡⟡", name: "Bubbles Styled" },
    { symbol: "🍄⃝⃪⃨⃡✾", name: "Mushroom Styled" },
    { symbol: "🐾⃝⃪⃨⃡⩩", name: "Paw Styled" },
    { symbol: "💎⃝⃪⃨⃡✦", name: "Gem Styled" },
    { symbol: "✩⃝⃪⃨⃡𖤐", name: "Star Styled 3" },
    { symbol: "🧊⃝⃪⃨⃡⍊", name: "Ice Styled" },
    { symbol: "🌟⃝⃪⃨⃡✧", name: "Glowing Star" },
    { symbol: "💛⃝⃪⃨⃡𖥻", name: "Yellow Heart Styled" },
    { symbol: "🪻⃝⃪⃨⃡✿", name: "Orchid Styled" },
    { symbol: "(๑•ᴗ•๑)♡", name: "Cute Heart Face" },
    { symbol: "( ˆ⌣ˆ )♡", name: "Happy Heart Face" },
    { symbol: "(˶˃ ᵕ ˂˶)", name: "Blushing Face" },
    { symbol: "(*¯ ³¯*)♡", name: "Kiss Face" },
    { symbol: "(❁´◡`❁)", name: "Flower Cheeks" },
    { symbol: "(╯♡‿♡)╯", name: "Arms Heart" },
    { symbol: "(｡•ᴗ•｡)✿", name: "Flower Cheeks 2" },
    { symbol: "(♡⸃◡⸂♡)", name: "Heart Blush" },
    { symbol: "(ฅ•.•ฅ)♡", name: "Cat Paw Face" },
    { symbol: "(❀◕‿◕)", name: "Flower Smile" },
    { symbol: "(⊃｡•́‿•̀｡)⊃", name: "Hugging Face" },
    { symbol: "(❁ᴗ͈ˬᴗ͈)◞", name: "Cute Double Cheeks" },
    { symbol: "(≧ᗜ≦*)", name: "Excited Face" },
    { symbol: "(✿❛◡❛)", name: "Flower Wink" },
    { symbol: "(*/ω＼*)", name: "Shy Face" },
    { symbol: "(⸝⸝ᵕᴗᵕ⸝⸝)", name: "Small Happy Face" },
    { symbol: "💞᪳᪳᪳", name: "Heart Swirls" },
    { symbol: "(◕‿◕✿)", name: "Flower Eyes" },
    { symbol: "(≧◡≦) ♡", name: "Joyful Heart" },
    { symbol: "(❀ᵕᴗᵕ)", name: "Happy Flower" },
    { symbol: "(｡•́‿•̀｡)♡", name: "Sweet Heart Face" },
    { symbol: "୧⍤⃝🌸", name: "Flower Accent" },
    { symbol: "୧⍤⃝✨", name: "Sparkle Accent" },
    { symbol: "୧⍤⃝💞", name: "Heart Accent" },
    { symbol: "୧⍤⃝🌷", name: "Tulip Accent" },
    { symbol: "୧⍤⃝❤️", name: "Red Heart Accent" },
    { symbol: "୧⍤⃝🌺", name: "Hibiscus Accent" },
    { symbol: "𐚂", name: "Cute Symbol 98" },
    { symbol: "𐚃", name: "Cute Symbol 99" },
    { symbol: "𐚄", name: "Cute Symbol 100" },
    { symbol: "𐚅", name: "Cute Symbol 101" },
    { symbol: "𐚆", name: "Cute Symbol 102" },
    { symbol: "𐚇", name: "Cute Symbol 103" },
    { symbol: "𐚈", name: "Cute Symbol 104" },
    { symbol: "💓᪲᪲", name: "Heart Beats" },
    { symbol: "𐚉", name: "Cute Symbol 106" },
    { symbol: "𐚊", name: "Cute Symbol 107" },
    { symbol: "𐚋", name: "Cute Symbol 108" },
    { symbol: "𐚌", name: "Cute Symbol 109" },
    { symbol: "➶➶", name: "Feather Arrows" },
    { symbol: "୧⍤⃝💖", name: "Sparkling Heart Accent" },
    { symbol: "💝᪲᪲᪲", name: "Gift Hearts" },
    { symbol: "𖨆", name: "Cute Symbol 113" },
    { symbol: "୧⍤⃝🩷", name: "Pink Heart Accent" },
    { symbol: "୧⍤⃝🍀", name: "Clover Accent" },
    { symbol: "୧⍤⃝🌼", name: "Daisy Accent" },
    { symbol: "𓃠", name: "Animal Symbol" },
    { symbol: "୧⍤⃝⭐", name: "Star Accent" },
    { symbol: "୧⍤⃝💗", name: "Growing Heart Accent" },
    { symbol: "୧⍤⃝💮", name: "White Flower Accent" },
    { symbol: "🦋⃟", name: "Butterfly Outline" },
    { symbol: "✿⃟", name: "Flower Outline" },
    { symbol: "❀⃟", name: "Flower Outline 2" },
    { symbol: "✧⃟", name: "Sparkle Outline" },
    { symbol: "☆⃟", name: "Star Outline" },
    { symbol: "✦⃟", name: "Star Outline 2" },
    { symbol: "❣⃟", name: "Heart Exclamation Outline" },
    { symbol: "✩⃟", name: "Star Outline 3" },
    { symbol: "✺⃟", name: "Star Outline 4" },
    { symbol: "❁⃟", name: "Flower Outline 3" },
    { symbol: "❇⃟", name: "Sparkle Outline 2" },
    { symbol: "✷⃟", name: "Star Outline 5" },
    { symbol: "💐⃟", name: "Bouquet Outline" },
    { symbol: "🌸⃟", name: "Blossom Outline" },
    { symbol: "🩷⃟", name: "Pink Heart Outline" },
    { symbol: "💖⃟", name: "Sparkling Heart Outline" },
    { symbol: "🌙⃟", name: "Moon Outline" },
    { symbol: "⭐⃟", name: "Star Outline 6" },
    { symbol: "🪽⃟", name: "Wing Outline" },
    { symbol: "🐾⃟", name: "Paw Outline" },
    { symbol: "🪷⃟", name: "Lotus Outline" },
    { symbol: "🎀⃟", name: "Ribbon Outline" },
    { symbol: "୧⍤⃝🌟", name: "Glowing Star Accent" },
    { symbol: "୧⍤⃝🪻", name: "Orchid Accent" },
    { symbol: "𖧷", name: "Cute Symbol 145" },
    { symbol: "୧⍤⃝🌹", name: "Rose Accent" },
    { symbol: "୧⍤⃝💛", name: "Yellow Heart Accent" },
    { symbol: "୧⍤⃝🦋", name: "Butterfly Accent" },
    { symbol: "୧⍤⃝🎀", name: "Ribbon Accent" },
    { symbol: "💗᪲᪲᪲", name: "Pink Heart Swirls" },
    { symbol: "𝄟", name: "Music Symbol" },
    { symbol: "𐙚", name: "Cute Symbol 123" },
    { symbol: "×᷼×ㅤ", name: "Cross Symbol" },
    { symbol: "•͜•", name: "Dot Eyes" },
    { symbol: "𓅫", name: "Bird Symbol" },
    { symbol: "𓃠", name: "Animal Symbol 2" },
    { symbol: "⛱", name: "Beach Umbrella" },
    { symbol: "⎚", name: "Clear Symbol" },
    { symbol: "☻", name: "Smiley Black" },
    { symbol: "☹︎", name: "Sad Face" },
    { symbol: "⌔", name: "Circle Segment" },
    { symbol: "♨", name: "Hot Springs" },
    { symbol: "🐞⃝", name: "Ladybug Outline" },
    { symbol: "🐝⃝", name: "Bee Outline" },
    { symbol: "🐾⃟", name: "Paw Outline 2" },
    { symbol: "↺", name: "Counterclockwise Arrow" },
    { symbol: "⚡︎", name: "Lightning" },
    { symbol: "𓄧", name: "Egyptian Symbol" },
    { symbol: "˚", name: "Ring Above" },
    { symbol: "⬅", name: "Left Arrow" },
    { symbol: "☑", name: "Checked Box" },
    { symbol: "⊹", name: "Star Sparkle" },
    { symbol: "⟲", name: "Anticlockwise" },
    { symbol: "▶", name: "Play Button" },
    { symbol: "⁰¹", name: "Superscript 01" },
    { symbol: "₊", name: "Subscript Plus" },
    { symbol: "♾", name: "Infinity" },
    { symbol: "⛷", name: "Skier" },
    { symbol: ":)", name: "Smiley Text" },
    { symbol: "⋆", name: "Star" },
    { symbol: "⁷⁷⁷", name: "Superscript 777" },
    { symbol: " ̤̮ ", name: "Cute Symbol 18" },
    { symbol: ".ᐟ", name: "Small Dot" },
    { symbol: "°", name: "Degree" },
    { symbol: "⨳", name: "Three Dots" },
    { symbol: "⑆", name: "Circled Arrow" },
    { symbol: "⌔", name: "Circle Segment 2" },
    { symbol: "༘", name: "Tibetan Symbol" },
    { symbol: "𖡼", name: "Ornament" },
    { symbol: "𖤣", name: "Decorative" },
    { symbol: "⁰⁶", name: "Superscript 06" },
    { symbol: "𖥧", name: "Decorative 2" },
    { symbol: "𓍊", name: "Hieroglyph" },
    { symbol: "†", name: "Dagger" },
    { symbol: "⁹⁹⁹", name: "Superscript 999" },
    { symbol: "༝༚༝༚", name: "Tibetan Pattern" },
    { symbol: "𓆩ᵛ𓆪", name: "V Symbol" },
    { symbol: "⇝", name: "Right Arrow Tail" },
    { symbol: "⇜", name: "Left Arrow Tail" },
    { symbol: "↕", name: "Up Down Arrow" },
    { symbol: "▫", name: "Small Square" },
    { symbol: "™", name: "Trademark" },
    { symbol: "♂", name: "Male" },
    { symbol: "♀", name: "Female" },
    { symbol: "〽", name: "Part Alternation" },
    { symbol: "©", name: "Copyright" },
    { symbol: "≫", name: "Much Greater Than" },
    { symbol: "◼", name: "Black Medium Square" },
    { symbol: "●", name: "Black Circle" },
    { symbol: "➢", name: "Right Arrow Filled" },
    { symbol: "𓍼", name: "Egyptian Symbol 2" },
    { symbol: "ྀི", name: "Tibetan Sign" },
    { symbol: "ᡣ𐭩", name: "Ornament 2" },
    { symbol: "༝", name: "Tibetan Symbol 2" },
    { symbol: "☼", name: "Sun" },
    { symbol: "☽", name: "Moon" },
    { symbol: "๛", name: "Thai Symbol" },
    { symbol: "☔︎︎", name: "Umbrella Rain" },
    { symbol: "⸝⸝", name: "Double Comma" },
    { symbol: "∘", name: "Ring Operator" },
    { symbol: "‹𝟹", name: "Heart Arrow" },
    { symbol: "⚕", name: "Medical" },
    { symbol: "ꨄ︎", name: "Heart Decor" },
    { symbol: "◌", name: "Dotted Circle" },
    { symbol: "∞", name: "Infinity 2" },
    { symbol: "𓏌", name: "Egyptian Symbol 3" },
    { symbol: "⑅", name: "Circled Number" },
    { symbol: "◞", name: "Lower Right Quadrant" },
    { symbol: "𝒾", name: "Script I" },
    { symbol: "〰", name: "Wavy Dash" },
    { symbol: "⚬", name: "Small Circle" },
    { symbol: "﹗", name: "Small Exclamation" },
    { symbol: "*", name: "Asterisk" },
    { symbol: "_", name: "Underscore" },
    { symbol: "↬", name: "Right Arrow Loop" },
    { symbol: "𖠌", name: "Decorative 3" },
    { symbol: "‿", name: "Undertie" },
    { symbol: "⚂", name: "Die Face 2" },
    { symbol: "⚁", name: "Die Face 1" },
    { symbol: "╭", name: "Top Left Corner" },
    { symbol: "╯", name: "Bottom Right Corner" },
    { symbol: "╮", name: "Top Right Corner" },
    { symbol: "╰", name: "Bottom Left Corner" },
    { symbol: "⚕", name: "Medical 2" },
    { symbol: "༘", name: "Tibetan Symbol 3" },
    { symbol: "◈", name: "Diamond in Square" },
    { symbol: "◆", name: "Black Diamond" },
    { symbol: "◇", name: "White Diamond" },
    { symbol: "™", name: "Trademark 2" },
    { symbol: "®", name: "Registered" },
    { symbol: "©", name: "Copyright 2" },
    { symbol: "*", name: "Asterisk 2" },
    { symbol: "♪", name: "Eighth Note" },
    { symbol: "÷", name: "Division" },
    { symbol: "×", name: "Multiplication" },
    { symbol: "-", name: "Hyphen" },
    { symbol: "+", name: "Plus" },
    { symbol: ":", name: "Colon" },
    { symbol: "\"", name: "Quotation Mark" },
    { symbol: ",", name: "Comma" },
    { symbol: "^^", name: "Happy Eyes" },
    { symbol: "→", name: "Right Arrow" },
    { symbol: "←", name: "Left Arrow 2" },
    { symbol: "↑", name: "Up Arrow" },
    { symbol: "↓", name: "Down Arrow" },
    { symbol: "Ω", name: "Omega" },
    { symbol: "<", name: "Less Than" },
    { symbol: ">", name: "Greater Than" },
    { symbol: "«", name: "Left Angle Quote" },
    { symbol: "⟨", name: "Left Angle Bracket" },
    { symbol: "»", name: "Right Angle Quote" },
    { symbol: "⟩", name: "Right Angle Bracket" },
    { symbol: "∞द", name: "Infinity with Devanagari" },
    { symbol: "≠", name: "Not Equal" },
    { symbol: "≈", name: "Almost Equal" },
    { symbol: "=", name: "Equals" },
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
  return name.split("").map(ch => {
    // First try exact match (preserves case)
    if (map[ch] !== undefined) {
      return map[ch];
    }
    
    // If no exact match, try lowercase
    const lowerChar = ch.toLowerCase();
    if (map[lowerChar] !== undefined) {
      return map[lowerChar];
    }
    
    // If still no match, return original
    return ch;
  }).join("");
}

// ... next code (generateStyles function वैसा ही रहेगा) ...
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
