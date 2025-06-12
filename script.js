// Global variables
let currentUser = null
let currentChat = null
let chats = {}
let groupChats = {}
let users = {}
let currentChatFilter = "all"
const currentProfileImage = null
let tempProfileImage = null

// Add these new variables at the top after the existing global variables
let replyingTo = null
const typingTimeout = null
const currentTheme = "purple"
const focusMode = false
const currentSearchFilter = "all"
let profileImages = {} // Shared profile images storage
let groupImages = {} // Group images storage
let tempGroupImage = null

// Add emoji data
const emojiData = {
  smileys: [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "🤣",
    "😂",
    "🙂",
    "🙃",
    "😉",
    "😊",
    "😇",
    "🥰",
    "😍",
    "🤩",
    "😘",
    "😗",
    "😚",
    "😙",
    "😋",
    "😛",
    "😜",
    "🤪",
    "😝",
    "🤑",
    "🤗",
    "🤭",
    "🤫",
    "🤔",
    "🤐",
    "🤨",
    "😐",
    "😑",
    "😶",
    "😏",
    "😒",
    "🙄",
    "😬",
    "🤥",
    "😔",
    "😪",
    "🤤",
    "😴",
    "😷",
    "🤒",
    "🤕",
    "🤢",
    "🤮",
    "🤧",
    "🥵",
    "🥶",
    "🥴",
    "😵",
    "🤯",
    "🤠",
    "🥳",
    "😎",
    "🤓",
    "🧐",
  ],
  people: [
    "👋",
    "🤚",
    "🖐️",
    "✋",
    "🖖",
    "👌",
    "🤏",
    "✌️",
    "🤞",
    "🤟",
    "🤘",
    "🤙",
    "👈",
    "👉",
    "👆",
    "🖕",
    "👇",
    "☝️",
    "👍",
    "👎",
    "👊",
    "✊",
    "🤛",
    "🤜",
    "👏",
    "🙌",
    "👐",
    "🤲",
    "🤝",
    "🙏",
    "✍️",
    "💅",
    "🤳",
    "💪",
    "🦾",
    "🦿",
    "🦵",
    "🦶",
    "👂",
    "🦻",
    "👃",
    "🧠",
    "🦷",
    "🦴",
    "👀",
    "👁️",
    "👅",
    "👄",
    "💋",
  ],
  nature: [
    "🌸",
    "💮",
    "🏵️",
    "🌹",
    "🥀",
    "🌺",
    "🌻",
    "🌼",
    "🌷",
    "🌱",
    "🪴",
    "🌲",
    "🌳",
    "🌴",
    "🌵",
    "🌶️",
    "🍄",
    "🌾",
    "💐",
    "🌿",
    "🍀",
    "🍃",
    "🍂",
    "🍁",
    "🌊",
    "🌀",
    "🌈",
    "🌂",
    "☂️",
    "☔",
    "⛱️",
    "⚡",
    "❄️",
    "☃️",
    "⛄",
    "☄️",
    "🔥",
    "💧",
    "🌟",
    "⭐",
    "🌠",
    "☀️",
    "🌝",
    "🌛",
    "🌜",
    "🌚",
    "🌕",
    "🌖",
    "🌗",
    "🌘",
    "🌑",
    "🌒",
    "🌓",
    "🌔",
  ],
  food: [
    "🍎",
    "🍐",
    "🍊",
    "🍋",
    "🍌",
    "🍉",
    "🍇",
    "🍓",
    "🫐",
    "🍈",
    "🍒",
    "🍑",
    "🥭",
    "🍍",
    "🥥",
    "🥝",
    "🍅",
    "🍆",
    "🥑",
    "🥦",
    "🥬",
    "🥒",
    "🌶️",
    "🫑",
    "🌽",
    "🥕",
    "🫒",
    "🧄",
    "🧅",
    "🥔",
    "🍠",
    "🥐",
    "🥖",
    "🍞",
    "🥨",
    "🥯",
    "🧀",
    "🥚",
    "🍳",
    "🧈",
    "🥞",
    "🧇",
    "🥓",
    "🥩",
    "🍗",
    "🍖",
    "🦴",
    "🌭",
    "🍔",
    "🍟",
    "🍕",
  ],
  activities: [
    "⚽",
    "🏀",
    "🏈",
    "⚾",
    "🥎",
    "🎾",
    "🏐",
    "🏉",
    "🥏",
    "🎱",
    "🪀",
    "🏓",
    "🏸",
    "🏒",
    "🏑",
    "🥍",
    "🏏",
    "🪃",
    "🥅",
    "⛳",
    "🪁",
    "🏹",
    "🎣",
    "🤿",
    "🥊",
    "🥋",
    "🎽",
    "🛹",
    "🛷",
    "⛸️",
    "🥌",
    "🎿",
    "⛷️",
    "🏂",
    "🪂",
    "🏋️",
    "🤼",
    "🤸",
    "⛹️",
    "🤺",
    "🏇",
    "🧘",
    "🏄",
    "🏊",
    "🤽",
    "🚣",
    "🧗",
    "🚵",
    "🚴",
    "🏆",
    "🥇",
    "🥈",
    "🥉",
    "🏅",
    "🎖️",
    "🏵️",
    "🎗️",
  ],
  travel: [
    "🚗",
    "🚕",
    "🚙",
    "🚌",
    "🚎",
    "🏎️",
    "🚓",
    "🚑",
    "🚒",
    "🚐",
    "🛻",
    "🚚",
    "🚛",
    "🚜",
    "🏍️",
    "🛵",
    "🚲",
    "🛴",
    "🛹",
    "🛼",
    "🚁",
    "🛸",
    "✈️",
    "🛩️",
    "🪂",
    "💺",
    "🚀",
    "🛰️",
    "🚢",
    "⛵",
    "🚤",
    "🛥️",
    "🛳️",
    "⛴️",
    "🚂",
    "🚃",
    "🚄",
    "🚅",
    "🚆",
    "🚇",
    "🚈",
    "🚉",
    "🚊",
    "🚝",
    "🚞",
    "🚋",
    "🚌",
    "🚍",
    "🎡",
    "🎢",
    "🎠",
    "🏗️",
    "🌁",
    "🗼",
    "🏭",
    "⛲",
    "🎑",
    "⛰️",
    "🏔️",
    "🗻",
    "🏕️",
    "⛺",
    "🏠",
    "🏡",
    "🏘️",
    "🏚️",
    "🏗️",
    "🏭",
    "🏢",
    "🏬",
    "🏣",
    "🏤",
    "🏥",
    "🏦",
    "🏨",
    "🏪",
    "🏫",
    "🏩",
    "💒",
    "🏛️",
    "⛪",
    "🕌",
    "🛕",
    "🕍",
    "⛩️",
    "🕋",
  ],
  objects: [
    "💡",
    "🔦",
    "🕯️",
    "🪔",
    "🧯",
    "🛢️",
    "💸",
    "💵",
    "💴",
    "💶",
    "💷",
    "🪙",
    "💰",
    "💳",
    "💎",
    "⚖️",
    "🪜",
    "🧰",
    "🔧",
    "🔨",
    "⚒️",
    "🛠️",
    "⛏️",
    "🪓",
    "🪚",
    "🔩",
    "⚙️",
    "🪤",
    "🧱",
    "⛓️",
    "🧲",
    "🔫",
    "💣",
    "🧨",
    "🪓",
    "🔪",
    "🗡️",
    "⚔️",
    "🛡️",
    "🚬",
    "⚰️",
    "🪦",
    "⚱️",
    "🏺",
    "🔮",
    "📿",
    "🧿",
    "💈",
    "⚗️",
    "🔭",
    "🔬",
    "🕳️",
    "🩹",
    "🩺",
    "💊",
    "💉",
    "🩸",
    "🧬",
    "🦠",
    "🧫",
    "🧪",
    "🌡️",
    "🧹",
    "🪠",
    "🧽",
    "🧴",
    "🛎️",
    "🔑",
    "🗝️",
    "🚪",
    "🪑",
    "🛋️",
    "🛏️",
    "🛌",
    "🧸",
    "🪆",
    "🖼️",
    "🪞",
    "🪟",
    "🛍️",
    "🛒",
    "🎁",
    "🎈",
    "🎏",
    "🎀",
    "🪄",
    "🪅",
    "🎊",
    "🎉",
    "🪩",
    "🎎",
    "🏮",
    "🎐",
    "🧧",
    "✉️",
    "📩",
    "📨",
    "📧",
    "💌",
    "📥",
    "📤",
    "📦",
    "🏷️",
    "🪧",
    "📪",
    "📫",
    "📬",
    "📭",
    "📮",
    "📯",
    "📜",
    "📃",
    "📄",
    "📑",
    "🧾",
    "📊",
    "📈",
    "📉",
    "🗒️",
    "🗓️",
    "📅",
    "📆",
    "📇",
    "🗃️",
    "🗳️",
    "🗄️",
    "📋",
    "📌",
    "📍",
    "📎",
    "🖇️",
    "📏",
    "📐",
    "✂️",
    "🗂️",
    "🗞️",
    "📰",
    "📓",
    "📔",
    "📒",
    "📕",
    "📗",
    "📘",
    "📙",
    "📚",
    "📖",
    "🔖",
    "🧷",
    "🔗",
    "📎",
    "🖇️",
    "📐",
    "📏",
    "🧮",
    "📞",
    "📟",
    "📠",
    "📺",
    "📻",
    "🎙️",
    "🎚️",
    "🎛️",
    "🧭",
    "⏱️",
    "⏲️",
    "⏰",
    "🕰️",
    "⌚",
    "📱",
    "📲",
    "💻",
    "⌨️",
    "🖥️",
    "🖨️",
    "🖱️",
    "🖲️",
    "💽",
    "💾",
    "💿",
    "📀",
    "🧮",
    "🎥",
    "🎞️",
    "📸",
    "📷",
    "📹",
    "📼",
    "🔍",
    "🔎",
    "🕯️",
    "💡",
    "🔦",
    "🏮",
    "🪔",
    "📔",
    "📕",
    "📖",
    "📗",
    "📘",
    "📙",
    "📚",
    "📓",
    "📒",
    "📃",
    "📜",
    "📄",
    "📰",
    "🗞️",
    "📑",
    "🔖",
    "🏷️",
    "💰",
    "🪙",
    "💴",
    "💵",
    "💶",
    "💷",
    "💸",
    "💳",
    "🧾",
    "💎",
    "⚖️",
    "🪜",
    "🧰",
    "🔧",
    "🔨",
    "⚒️",
    "🛠️",
    "⛏️",
    "🪓",
    "🔪",
    "🗡️",
    "⚔️",
    "🛡️",
  ],
  symbols: [
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜",
    "🖤",
    "🤍",
    "🤎",
    "💔",
    "❣️",
    "💕",
    "💞",
    "💓",
    "💗",
    "💖",
    "💘",
    "💝",
    "💟",
    "☮️",
    "✝️",
    "☪️",
    "🕉️",
    "☸️",
    "✡️",
    "🔯",
    "🕎",
    "☯️",
    "☦️",
    "🛐",
    "⛎",
    "♈",
    "♉",
    "♊",
    "♋",
    "♌",
    "♍",
    "♎",
    "♏",
    "♐",
    "♑",
    "♒",
    "♓",
    "🆔",
    "⚛️",
    "🉑",
    "☢️",
    "☣️",
    "📴",
    "📳",
    "🈶",
    "🈚",
    "🈸",
    "🈺",
    "🈷️",
    "✴️",
    "🆚",
    "💮",
    "🉐",
    "㊙️",
    "㊗️",
    "🈴",
    "🈵",
    "🈹",
    "🈲",
    "🅰️",
    "🅱️",
    "🆎",
    "🆑",
    "🅾️",
    "🆘",
    "❌",
    "⭕",
    "🛑",
    "⛔",
    "📛",
    "🚫",
    "💯",
    "💢",
    "♨️",
    "🚷",
    "🚯",
    "🚳",
    "🚱",
    "🔞",
    "📵",
    "🚭",
    "❗",
    "❕",
    "❓",
    "❔",
    "‼️",
    "⁉️",
    "🔅",
    "🔆",
    "〽️",
    "⚠️",
    "🚸",
    "🔱",
    "⚜️",
    "🔰",
    "♻️",
    "✅",
    "🈯",
    "💹",
    "❇️",
    "✳️",
    "❎",
    "🌐",
    "💠",
    "Ⓜ️",
    "🌀",
    "💤",
    "🏧",
    "🚾",
    "♿",
    "🅿️",
    "🛗",
    "🈳",
    "🈂️",
    "🛂",
    "🛃",
    "🛄",
    "🛅",
    "🚹",
    "🚺",
    "🚼",
    "⚧️",
    "🚻",
    "🚮",
    "🎦",
    "📶",
    "🈁",
    "🔣",
    "ℹ️",
    "🔤",
    "🔡",
    "🔠",
    "🆖",
    "🆗",
    "🆙",
    "🆒",
    "🆕",
    "🆓",
    "0️⃣",
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣",
    "5️⃣",
    "6️⃣",
    "7️⃣",
    "8️⃣",
    "9️⃣",
    "🔟",
    "🔢",
    "#️⃣",
    "*️⃣",
    "⏏️",
    "▶️",
    "⏸️",
    "⏯️",
    "⏹️",
    "⏺️",
    "⏭️",
    "⏮️",
    "⏩",
    "⏪",
    "⏫",
    "⏬",
    "◀️",
    "🔼",
    "🔽",
    "➡️",
    "⬅️",
    "⬆️",
    "⬇️",
    "↗️",
    "↘️",
    "↙️",
    "↖️",
    "↕️",
    "↔️",
    "↪️",
    "↩️",
    "⤴️",
    "⤵️",
    "🔀",
    "🔁",
    "🔂",
    "🔄",
    "🔃",
    "🎵",
    "🎶",
    "➕",
    "➖",
    "➗",
    "✖️",
    "🟰",
    "♾️",
    "💲",
    "💱",
    "™️",
    "©️",
    "®️",
    "〰️",
    "➰",
    "➿",
    "🔚",
    "🔙",
    "🔛",
    "🔝",
    "🔜",
    "✔️",
    "☑️",
    "🔘",
    "🔴",
    "🟠",
    "🟡",
    "🟢",
    "🔵",
    "🟣",
    "⚫",
    "⚪",
    "🟤",
    "🔺",
    "🔻",
    "🔸",
    "🔹",
    "🔶",
    "🔷",
    "🔳",
    "🔲",
    "▪️",
    "▫️",
    "◾",
    "◽",
    "◼️",
    "◻️",
    "🟥",
    "🟧",
    "🟨",
    "🟩",
    "🟦",
    "🟪",
    "⬛",
    "⬜",
    "🟫",
    "🔈",
    "🔇",
    "🔉",
    "🔊",
    "🔔",
    "🔕",
    "📣",
    "📢",
    "👁️‍🗨️",
    "💬",
    "💭",
    "🗯️",
    "♠️",
    "♣️",
    "♥️",
    "♦️",
    "🃏",
    "🎴",
    "🀄",
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛",
    "🕜",
    "🕝",
    "🕞",
    "🕟",
    "🕠",
    "🕡",
    "🕢",
    "🕣",
    "🕤",
    "🕥",
    "🕦",
    "🕧",
  ],
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  // Check authentication
  const userData = localStorage.getItem("currentUser")
  if (!userData) {
    window.location.href = "index.html"
    return
  }

  currentUser = JSON.parse(userData)
  initializeApp()
})

function initializeApp() {
  loadUsers()
  loadChats()
  loadGroupChats()

  setupUI()
  setupEventListeners()

  applyLanguage(currentUser.language)
  applyTheme()
  applySavedTheme()
  applySavedDarkMode() // إضافة تطبيق الدارك مود المحفوظ

  displayCurrentUser()
  displayChatList()

  requestNotificationPermission()
}

function loadUsers() {
  // ISG employees database with departments
  users = {
    ismail_m: { name: "Ismail Mohamed", email: "ismail.m@isg-egy.com", department: "Engineering Office" },
    sanaa_m: { name: "Sanaa Magid", email: "sanaa.m@isg-egy.com", department: "Engineering Office" },
    mohamed_h: { name: "Mohamed Hossam", email: "mohamed.h@isg-egy.com", department: "Engineering Office" },
    islam_a: { name: "Islam Ashraf", email: "islam.a@isg-egy.com", department: "Engineering Office" },
    osama_s: { name: "Osama Shaheen", email: "osama.s@isg-egy.com", department: "Technical Support" },
    hoda_b: { name: "Hoda Bayoumi", email: "hoda.b@isg-egy.com", department: "Technical Support" },
    ahmed_b: { name: "Ahmed Badr", email: "ahmed.b@isg-egy.com", department: "Accounting" },
    ahmed_az: { name: "Ahmed Abdelazeem", email: "ahmed.az@isg-egy.com", department: "Accounting" },
    ahmed_ab: { name: "Ahmed Abouzeid", email: "ahmed.ab@isg-egy.com", department: "Sales" },
    osama_s2: { name: "Osama Shaheen", email: "osama.s2@isg-egy.com", department: "Sales" },
    asmaa_g: { name: "Asmaa Gamal", email: "asmaa.g@isg-egy.com", department: "Sales" },
    faiza_k: { name: "Faiza Khairy", email: "faiza.k@isg-egy.com", department: "Procurement" },
    wael_a: { name: "Wael Allam", email: "wael.a@isg-egy.com", department: "Procurement" },
    mari: { name: "Mari", email: "mari@isg-egy.com", department: "Projects" },
    madonna: { name: "Madonna", email: "madonna@isg-egy.com", department: "Projects" },
    amira_n: { name: "Amira Nady", email: "amira.n@isg-egy.com", department: "Projects" },
    ahmed_r: { name: "Ahmed Reda", email: "ahmed.r@isg-egy.com", department: "Projects" },
    maha_n: { name: "Maha Nasr", email: "maha.n@isg-egy.com", department: "Reception" },
    nada_a: { name: "Nada Ahmed", email: "nada.a@isg-egy.com", department: "Reception" },
    moataz_s: { name: "Moataz Saudi", email: "moataz.s@isg-egy.com", department: "Digital Marketing & IT" },
    heba_n: { name: "Heba Nabil", email: "heba.n@isg-egy.com", department: "Digital Marketing & IT" },
    abdelrahim_f: { name: "Abdelrahim Fathy", email: "abdelrahim.f@isg-egy.com", department: "Digital Marketing & IT" },
    rana_b: { name: "Rana Bahgat", email: "rana.b@isg-egy.com", department: "Digital Marketing & IT" },
    mona_k: { name: "Mona Khairy", email: "mona.k@isg-egy.com", department: "Management" },
    mohamed_l: { name: "Mohamed El-Leithy", email: "mohamed.l@isg-egy.com", department: "Management" },
    hussein_z: { name: "Hussein", email: "hussein.z@isg-egy.com", department: "ZATUS" },
    ahmed_k: { name: "Ahmed Khalifa", email: "ahmed.k@isg-egy.com", department: "ZATUS" },
  }

  // Load shared profile images
  const savedProfileImages = localStorage.getItem("profileImages")
  profileImages = savedProfileImages ? JSON.parse(savedProfileImages) : {}

  // Load group images
  const savedGroupImages = localStorage.getItem("groupImages")
  groupImages = savedGroupImages ? JSON.parse(savedGroupImages) : {}
}

function loadChats() {
  const savedChats = localStorage.getItem(`chats_${currentUser.id}`)
  chats = savedChats ? JSON.parse(savedChats) : {}
}

function loadGroupChats() {
  const savedGroupChats = localStorage.getItem(`groupChats_${currentUser.id}`)
  groupChats = savedGroupChats ? JSON.parse(savedGroupChats) : {}
}

function saveChats() {
  localStorage.setItem(`chats_${currentUser.id}`, JSON.stringify(chats))
}

function saveGroupChats() {
  localStorage.setItem(`groupChats_${currentUser.id}`, JSON.stringify(groupChats))
}

function setupUI() {
  // Populate user select in new chat modal with departments
  const userSelect = document.getElementById("userSelect")
  userSelect.innerHTML = '<option value="">Choose a user...</option>'

  // Group users by department for better organization
  const departments = {}
  Object.keys(users).forEach((userId) => {
    if (userId !== currentUser.id) {
      const user = users[userId]
      if (!departments[user.department]) {
        departments[user.department] = []
      }
      departments[user.department].push({ id: userId, user: user })
    }
  })

  // Add users grouped by department
  Object.keys(departments)
    .sort()
    .forEach((department) => {
      const optgroup = document.createElement("optgroup")
      optgroup.label = department

      departments[department].forEach(({ id, user }) => {
        const option = document.createElement("option")
        option.value = id
        option.textContent = `${user.name} (${user.department})`
        optgroup.appendChild(option)
      })

      userSelect.appendChild(optgroup)
    })

  // Setup group chat modal
  setupGroupChatModal()
}

function setupGroupChatModal() {
  // Populate department list
  const departmentList = document.getElementById("departmentList")
  const departments = [...new Set(Object.values(users).map((user) => user.department))]

  departments.forEach((department) => {
    const option = document.createElement("option")
    option.value = department
    option.textContent = department
    departmentList.appendChild(option)
  })

  // Populate member list
  const memberList = document.getElementById("memberList")
  Object.keys(users).forEach((userId) => {
    if (userId !== currentUser.id) {
      const user = users[userId]
      const memberItem = document.createElement("div")
      memberItem.className = "group-member-item"
      memberItem.innerHTML = `
        <input type="checkbox" id="member_${userId}" value="${userId}">
        <label for="member_${userId}">${user.name} (${user.department})</label>
      `
      memberList.appendChild(memberItem)
    }
  })

  // Handle group type change
  document.querySelectorAll('input[name="groupType"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      const departmentSelect = document.getElementById("departmentSelect")
      const memberSelect = document.getElementById("memberSelect")

      if (this.value === "department") {
        departmentSelect.style.display = "block"
        memberSelect.style.display = "none"
      } else {
        departmentSelect.style.display = "none"
        memberSelect.style.display = "block"
      }
    })
  })
}

function setupEventListeners() {
  // Dark mode toggle
  document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode)

  // Logout
  document.getElementById("logoutBtn").addEventListener("click", logout)

  // New chat
  document.getElementById("newChatBtn").addEventListener("click", () => {
    const newChatModal = new bootstrap.Modal(document.getElementById("newChatModal"))
    newChatModal.show()
  })

  // Group chat
  document.getElementById("groupChatBtn").addEventListener("click", () => {
    const groupChatModal = new bootstrap.Modal(document.getElementById("groupChatModal"))
    groupChatModal.show()
  })

  // Start chat
  document.getElementById("startChatBtn").addEventListener("click", startNewChat)

  // Create group
  document.getElementById("createGroupBtn").addEventListener("click", createGroupChat)

  // Chat type tabs
  document.querySelectorAll(".chat-type-tab").forEach((tab) => {
    tab.addEventListener("click", function () {
      document.querySelectorAll(".chat-type-tab").forEach((t) => t.classList.remove("active"))
      this.classList.add("active")
      currentChatFilter = this.dataset.type
      displayChatList()
    })
  })

  // Send message
  document.getElementById("sendBtn").addEventListener("click", sendMessage)
  document.getElementById("messageInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  })

  // File upload
  document.getElementById("fileUploadBtn").addEventListener("click", () => {
    document.getElementById("fileInput").click()
  })

  document.getElementById("fileInput").addEventListener("change", handleFileUpload)

  // Search
  document.getElementById("searchInput").addEventListener("input", searchChats)

  // Delete chat
  document.getElementById("deleteChatBtn").addEventListener("click", deleteCurrentChat)

  // Profile image upload
  document.getElementById("profileImageInput").addEventListener("change", (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const previewImg = document.getElementById("profilePreview")
        const defaultPreview = document.getElementById("profileDefaultPreview")
        const removeBtn = document.getElementById("removeProfileBtn")

        previewImg.src = e.target.result
        previewImg.style.display = "block"
        defaultPreview.style.display = "none"
        removeBtn.style.display = "inline-block"
        tempProfileImage = e.target.result
      }
      reader.readAsDataURL(file)
    }
  })

  // Group image upload
  document.getElementById("groupImageInput").addEventListener("change", (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const previewImg = document.getElementById("groupImagePreview")
        const defaultPreview = document.getElementById("groupImageDefaultPreview")
        const removeBtn = document.getElementById("removeGroupImageBtn")

        previewImg.src = e.target.result
        previewImg.style.display = "block"
        defaultPreview.style.display = "none"
        removeBtn.style.display = "inline-block"
        tempGroupImage = e.target.result
      }
      reader.readAsDataURL(file)
    }
  })

  // Emoji picker functionality
  document.getElementById("emojiBtn").addEventListener("click", toggleEmojiPicker)

  // Emoji category switching
  document.querySelectorAll(".emoji-category").forEach((category) => {
    category.addEventListener("click", function () {
      document.querySelectorAll(".emoji-category").forEach((c) => c.classList.remove("active"))
      this.classList.add("active")
      displayEmojis(this.dataset.category)
    })
  })

  // Close emoji picker when clicking outside
  document.addEventListener("click", (e) => {
    const emojiPicker = document.getElementById("emojiPicker")
    const emojiBtn = document.getElementById("emojiBtn")

    if (!emojiPicker.contains(e.target) && !emojiBtn.contains(e.target)) {
      emojiPicker.style.display = "none"
    }
  })
}

// Update the existing sendMessage function to handle replies
function sendMessage() {
  const messageInput = document.getElementById("messageInput")
  const content = messageInput.value.trim()

  if (!content || !currentChat) return

  const message = {
    id: generateId(),
    senderId: currentUser.id,
    content: content,
    timestamp: Date.now(),
    type: "text",
    replyTo: replyingTo ? replyingTo.id : null,
  }

  const isGroup = document.querySelector(`[data-chat-id="${currentChat}"]`).dataset.chatType === "group"

  if (isGroup) {
    groupChats[currentChat].messages.push(message)
    saveGroupChats()

    const group = groupChats[currentChat]
    group.members.forEach((memberId) => {
      if (memberId !== currentUser.id) {
        const memberKey = `groupChats_${memberId}`
        const memberGroupChats = JSON.parse(localStorage.getItem(memberKey) || "{}")

        if (memberGroupChats[currentChat]) {
          memberGroupChats[currentChat].messages.push(message)
          localStorage.setItem(memberKey, JSON.stringify(memberGroupChats))
        }
      }
    })
  } else {
    chats[currentChat].messages.push(message)
    saveChats()

    const otherUserId = chats[currentChat].otherUserId
    const otherUserKey = `chats_${otherUserId}`
    const otherUserChats = JSON.parse(localStorage.getItem(otherUserKey) || "{}")

    let recipientChatId = null
    Object.keys(otherUserChats).forEach((chatId) => {
      if (otherUserChats[chatId].otherUserId === currentUser.id) {
        recipientChatId = chatId
      }
    })

    if (!recipientChatId) {
      recipientChatId = generateId()
      otherUserChats[recipientChatId] = {
        id: recipientChatId,
        otherUserId: currentUser.id,
        messages: [],
        createdAt: Date.now(),
      }
    }

    otherUserChats[recipientChatId].messages.push(message)
    localStorage.setItem(otherUserKey, JSON.stringify(otherUserChats))
  }

  messageInput.value = ""
  cancelReply()
  displayMessages(isGroup)
  displayChatList()

  showNotification(`New message from ${currentUser.name}`, content)
}

// Update the displayMessages function to show replies and reactions
function displayMessages(isGroup = false) {
  const messagesContainer = document.getElementById("messagesContainer")
  messagesContainer.innerHTML = ""

  if (!currentChat) return

  const messages = isGroup ? groupChats[currentChat].messages : chats[currentChat].messages

  messages.forEach((message) => {
    const messageDiv = document.createElement("div")
    messageDiv.className = `message ${message.senderId === currentUser.id ? "sent" : "received"}`
    messageDiv.dataset.messageId = message.id

    let messageContent = ""
    let senderName = ""
    let replyContent = ""

    // Show sender name ONLY in group chats for received messages and keep it small
    if (isGroup && message.senderId !== currentUser.id) {
      const sender = users[message.senderId]
      senderName = `<div class="message-sender">${sender ? sender.name : "Unknown"}</div>`
    }

    // Show reply if exists
    if (message.replyTo) {
      const replyToMessage = messages.find((m) => m.id === message.replyTo)
      if (replyToMessage) {
        const replySender =
          replyToMessage.senderId === currentUser.id ? "You" : users[replyToMessage.senderId]?.name || "Unknown"
        replyContent = `
          <div class="reply-to">
            <div class="reply-to-sender">${replySender}</div>
            <div class="reply-to-content">${replyToMessage.content || "File"}</div>
          </div>
        `
      }
    }

    if (message.type === "file") {
      if (message.fileType.startsWith("image/")) {
        messageContent = `
          <div class="image-message">
            <img src="${message.fileUrl}" alt="${message.fileName}" onclick="openImageModal('${message.fileUrl}')">
          </div>
        `
      } else {
        messageContent = `
          <div class="file-message">
            <div class="file-icon">
              <i class="fas fa-file"></i>
            </div>
            <div class="file-info">
              <div class="file-name">${message.fileName}</div>
              <div class="file-size">${formatFileSize(message.fileSize)}</div>
            </div>
          </div>
        `
      }
    } else {
      messageContent = `<div class="message-content">${escapeHtml(message.content)}</div>`
    }

    // Show reactions
    let reactionsHtml = ""
    if (message.reactions && Object.keys(message.reactions).length > 0) {
      reactionsHtml = '<div class="message-reactions">'
      Object.keys(message.reactions).forEach((reaction) => {
        const users = message.reactions[reaction]
        const userReacted = users.includes(currentUser.id)
        reactionsHtml += `
          <div class="reaction ${userReacted ? "user-reacted" : ""}" onclick="addReaction('${message.id}', '${reaction}')">
            <span class="reaction-emoji">${reaction}</span>
            <span class="reaction-count">${users.length}</span>
          </div>
        `
      })
      reactionsHtml += "</div>"
    }

    messageDiv.innerHTML = `
      <div class="message-bubble">
        ${senderName}
        ${replyContent}
        ${messageContent}
        <div class="message-time">${formatTime(message.timestamp)}</div>
        ${reactionsHtml}
      </div>
      <div class="message-actions">
        <button class="message-action-btn reply-btn" title="Reply">
          <i class="fas fa-reply"></i>
        </button>
        <button class="message-action-btn react-btn" title="React">
          <i class="fas fa-smile"></i>
        </button>
      </div>
    `

    messagesContainer.appendChild(messageDiv)
  })

  messagesContainer.scrollTop = messagesContainer.scrollHeight
}

// Add event listeners for message actions (reply and react)
document.addEventListener("click", (e) => {
  // Handle reply button
  if (e.target.closest(".reply-btn")) {
    const messageDiv = e.target.closest(".message")
    const messageId = messageDiv.dataset.messageId
    const messageContent = messageDiv.querySelector(".message-content")?.textContent || "File"
    const senderId = getCurrentMessageSender(messageId)
    const senderName = senderId === currentUser.id ? "You" : users[senderId]?.name || "Unknown"

    replyingTo = { id: messageId, content: messageContent, sender: senderName }

    const replyPreview = document.getElementById("replyPreview")
    const replyPreviewContent = replyPreview.querySelector(".reply-preview-content")
    const replyPreviewSender = replyPreview.querySelector(".reply-preview-sender")

    replyPreviewSender.textContent = `Replying to ${senderName}:`
    replyPreviewContent.textContent = messageContent
    replyPreview.style.display = "block"

    document.getElementById("messageInput").focus()
  }

  // Handle react button
  if (e.target.closest(".react-btn")) {
    const messageDiv = e.target.closest(".message")
    const messageId = messageDiv.dataset.messageId
    showReactionPicker(e.target.closest(".react-btn"), messageId)
  }
})

function getCurrentMessageSender(messageId) {
  const isGroup = document.querySelector(`[data-chat-id="${currentChat}"]`).dataset.chatType === "group"
  const messages = isGroup ? groupChats[currentChat].messages : chats[currentChat].messages
  const message = messages.find((m) => m.id === messageId)
  return message ? message.senderId : null
}

function showReactionPicker(button, messageId) {
  const reactionPicker = document.getElementById("reactionPicker")
  const rect = button.getBoundingClientRect()
  const pickerWidth = 280
  const pickerHeight = 60

  reactionPicker.style.display = "flex"
  reactionPicker.style.position = "fixed"

  // حساب الموضع الأفقي
  let leftPosition = rect.left - pickerWidth / 2 + rect.width / 2

  // التأكد من عدم الخروج من الشاشة يميناً
  if (leftPosition + pickerWidth > window.innerWidth - 10) {
    leftPosition = window.innerWidth - pickerWidth - 10
  }

  // التأكد من عدم الخروج من الشاشة يساراً
  if (leftPosition < 10) {
    leftPosition = 10
  }

  // حساب الموضع العمودي
  let topPosition = rect.top - pickerHeight - 10

  // إذا كان فوق الشاشة، ضعه تحت الزر
  if (topPosition < 10) {
    topPosition = rect.bottom + 10
  }

  reactionPicker.style.left = leftPosition + "px"
  reactionPicker.style.top = topPosition + "px"
  reactionPicker.dataset.messageId = messageId

  // إخفاء بعد 4 ثواني
  setTimeout(() => {
    reactionPicker.style.display = "none"
  }, 4000)
}

// Add reaction functionality
document.querySelectorAll(".reaction-option").forEach((option) => {
  option.addEventListener("click", function () {
    const reaction = this.dataset.reaction
    const messageId = document.getElementById("reactionPicker").dataset.messageId
    addReaction(messageId, reaction)
    document.getElementById("reactionPicker").style.display = "none"
  })
})

function addReaction(messageId, reaction) {
  const isGroup = document.querySelector(`[data-chat-id="${currentChat}"]`).dataset.chatType === "group"
  const messages = isGroup ? groupChats[currentChat].messages : chats[currentChat].messages
  const message = messages.find((m) => m.id === messageId)

  if (!message) return

  if (!message.reactions) {
    message.reactions = {}
  }

  if (!message.reactions[reaction]) {
    message.reactions[reaction] = []
  }

  const userIndex = message.reactions[reaction].indexOf(currentUser.id)
  if (userIndex > -1) {
    // Remove reaction
    message.reactions[reaction].splice(userIndex, 1)
    if (message.reactions[reaction].length === 0) {
      delete message.reactions[reaction]
    }
  } else {
    // Add reaction
    message.reactions[reaction].push(currentUser.id)
  }

  // Save and update
  if (isGroup) {
    saveGroupChats()
  } else {
    saveChats()
  }

  displayMessages(isGroup)
}

// Add function to apply saved theme
function applySavedTheme() {
  const savedTheme = localStorage.getItem("selectedTheme") || "purple"
  changeTheme(savedTheme)
}

// Add function to apply saved dark mode
function applySavedDarkMode() {
  const savedDarkMode = localStorage.getItem("darkMode")
  if (savedDarkMode === "true") {
    document.body.classList.add("dark-mode")
    const darkModeIcon = document.querySelector("#darkModeToggle i")
    if (darkModeIcon) {
      darkModeIcon.className = "fas fa-sun"
    }
  }
}

function applyLanguage(language) {
  // Implement language application logic here
  console.log(`Applying language: ${language}`)
}

function applyTheme() {
  // Implement theme application logic here
  console.log("Applying theme")
}

function displayCurrentUser() {
  const currentUserName = document.getElementById("currentUserName")
  const currentUserDepartment = document.getElementById("currentUserDepartment")
  const currentUserAvatar = document.getElementById("currentUserAvatar")
  const defaultAvatar = document.getElementById("defaultAvatar")

  if (currentUserName) currentUserName.textContent = currentUser.name
  if (currentUserDepartment) currentUserDepartment.textContent = currentUser.department

  // تحميل صورة البروفايل من الـ shared storage أولاً
  const sharedProfileImage = profileImages[currentUser.id]
  const localProfileImage = localStorage.getItem(`profileImage_${currentUser.id}`)

  const profileImage = sharedProfileImage || localProfileImage

  if (profileImage) {
    currentUserAvatar.src = profileImage
    currentUserAvatar.style.display = "block"
    defaultAvatar.style.display = "none"
  } else {
    currentUserAvatar.style.display = "none"
    defaultAvatar.style.display = "flex"
  }
}

function displayChatList() {
  const chatList = document.getElementById("chatList")
  chatList.innerHTML = ""

  let allChats = []

  // Add private chats
  Object.values(chats).forEach((chat) => {
    const otherUser = users[chat.otherUserId]
    if (otherUser) {
      const lastMessage = chat.messages[chat.messages.length - 1]
      allChats.push({
        id: chat.id,
        type: "private",
        name: otherUser.name,
        department: otherUser.department,
        lastMessage: lastMessage ? (lastMessage.type === "file" ? "📎 File" : lastMessage.content) : "No messages yet",
        timestamp: lastMessage ? lastMessage.timestamp : chat.createdAt,
        otherUserId: chat.otherUserId,
      })
    }
  })

  // Add group chats
  Object.values(groupChats).forEach((group) => {
    const lastMessage = group.messages[group.messages.length - 1]
    allChats.push({
      id: group.id,
      type: "group",
      name: group.name,
      department: "Group Chat",
      lastMessage: lastMessage ? (lastMessage.type === "file" ? "📎 File" : lastMessage.content) : "No messages yet",
      timestamp: lastMessage ? lastMessage.timestamp : group.createdAt,
      members: group.members,
    })
  })

  // Filter chats based on current filter
  if (currentChatFilter !== "all") {
    allChats = allChats.filter((chat) => chat.type === currentChatFilter)
  }

  // Sort by timestamp (newest first)
  allChats.sort((a, b) => b.timestamp - a.timestamp)

  // Display chats
  allChats.forEach((chat) => {
    const chatItem = document.createElement("div")
    chatItem.className = `chat-item ${chat.type === "group" ? "group-chat" : ""}`
    chatItem.dataset.chatId = chat.id
    chatItem.dataset.chatType = chat.type

    let avatarContent = '<i class="fas fa-user"></i>'
    if (chat.type === "private" && chat.otherUserId) {
      const profileImage = profileImages[chat.otherUserId]
      if (profileImage) {
        avatarContent = `<img src="${profileImage}" alt="Profile">`
      }
    } else if (chat.type === "group") {
      const groupImage = groupImages[chat.id]
      if (groupImage) {
        avatarContent = `<img src="${groupImage}" alt="Group">`
      } else {
        avatarContent = '<i class="fas fa-users"></i>'
      }
    }

    const avatarClass = chat.type === "group" ? "chat-avatar group" : "chat-avatar"

    chatItem.innerHTML = `
  <div class="${avatarClass}">
    ${avatarContent}
  </div>
  <div class="chat-info">
    <h6 class="chat-name">${chat.name}</h6>
    <small class="last-message">${chat.lastMessage}</small>
  </div>
  <div class="chat-time">
    ${formatTime(chat.timestamp)}
  </div>
`

    chatItem.addEventListener("click", () => {
      openChat(chat.id, chat.type)
    })

    chatList.appendChild(chatItem)
  })

  // Show welcome screen if no chats
  const welcomeScreen = document.getElementById("welcomeScreen")
  const chatArea = document.getElementById("chatArea")

  if (allChats.length === 0) {
    welcomeScreen.style.display = "flex"
    chatArea.style.display = "none"
  } else if (!currentChat) {
    welcomeScreen.style.display = "flex"
    chatArea.style.display = "none"
  }
}

function requestNotificationPermission() {
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission().then((permission) => {
      console.log("Notification permission:", permission)
    })
  }
}

function openChat(chatId, type = "private") {
  currentChat = chatId

  // Hide welcome screen and show chat area
  document.getElementById("welcomeScreen").style.display = "none"
  document.getElementById("chatArea").style.display = "flex"

  // Update active class in chat list
  document.querySelectorAll(".chat-item").forEach((item) => item.classList.remove("active"))
  const chatItem = document.querySelector(`[data-chat-id="${chatId}"]`)
  if (chatItem) chatItem.classList.add("active")

  // Update chat header
  const chatUserName = document.getElementById("chatUserName")
  const chatUserStatus = document.getElementById("chatUserStatus")
  const chatAvatar = document.getElementById("chatAvatar")

  // في الجزء الخاص بالـ private chat
  if (type === "group") {
    const group = groupChats[chatId]
    chatUserName.textContent = group.name
    chatUserStatus.textContent = `${group.members.length} members`

    const groupImage = groupImages[chatId]
    if (groupImage) {
      chatAvatar.innerHTML = `<img src="${groupImage}" alt="Group" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`
    } else {
      chatAvatar.innerHTML = '<i class="fas fa-users"></i>'
    }
    chatAvatar.className = "chat-avatar group"
  } else {
    const chat = chats[chatId]
    const otherUserId = chat.otherUserId
    chatUserName.textContent = users[otherUserId].name
    chatUserStatus.textContent = users[otherUserId].department

    // تحميل صورة البروفايل من الـ shared storage
    const profileImage = profileImages[otherUserId]
    if (profileImage) {
      chatAvatar.innerHTML = `<img src="${profileImage}" alt="Profile" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`
    } else {
      chatAvatar.innerHTML = '<i class="fas fa-user"></i>'
    }
    chatAvatar.className = "chat-avatar"
  }

  // Display messages
  displayMessages(type === "group")

  // Show/hide delete button
  document.getElementById("deleteChatBtn").style.display = "inline-block"

  // Focus input
  document.getElementById("messageInput").focus()
}

function formatTime(timestamp) {
  const date = new Date(timestamp)
  const now = new Date()
  const diffInHours = (now - date) / (1000 * 60 * 60)

  if (diffInHours < 24) {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  } else if (diffInHours < 24 * 7) {
    return date.toLocaleDateString("en-US", { weekday: "short" })
  } else {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }
}

function openProfileModal() {
  const profileModal = new bootstrap.Modal(document.getElementById("profileModal"))

  // Load current profile image
  const savedProfileImage = localStorage.getItem(`profileImage_${currentUser.id}`)
  const previewImg = document.getElementById("profilePreview")
  const defaultPreview = document.getElementById("profileDefaultPreview")
  const removeBtn = document.getElementById("removeProfileBtn")

  if (savedProfileImage) {
    previewImg.src = savedProfileImage
    previewImg.style.display = "block"
    defaultPreview.style.display = "none"
    removeBtn.style.display = "inline-block"
  } else {
    previewImg.style.display = "none"
    defaultPreview.style.display = "flex"
    removeBtn.style.display = "none"
  }

  profileModal.show()
}

function selectProfileImage() {
  document.getElementById("profileImageInput").click()
}

function selectGroupImage() {
  document.getElementById("groupImageInput").click()
}

function removeProfileImage() {
  const previewImg = document.getElementById("profilePreview")
  const defaultPreview = document.getElementById("defaultProfilePreview")
  const removeBtn = document.getElementById("removeProfileBtn")

  previewImg.style.display = "none"
  defaultPreview.style.display = "flex"
  removeBtn.style.display = "none"

  // Remove from both storages
  localStorage.removeItem(`profileImage_${currentUser.id}`)
  delete profileImages[currentUser.id]
  localStorage.setItem("profileImages", JSON.stringify(profileImages))

  // Update displays
  displayCurrentUser()
  displayChatList()

  // Update chat header if needed
  if (currentChat) {
    updateChatHeader()
  }

  tempProfileImage = null
}

function removeGroupImage() {
  const previewImg = document.getElementById("groupImagePreview")
  const defaultPreview = document.getElementById("groupImageDefaultPreview")
  const removeBtn = document.getElementById("removeGroupImageBtn")

  previewImg.style.display = "none"
  defaultPreview.style.display = "flex"
  removeBtn.style.display = "none"

  tempGroupImage = null
}

function saveProfileImage() {
  if (tempProfileImage) {
    // Save to personal storage
    localStorage.setItem(`profileImage_${currentUser.id}`, tempProfileImage)

    // Save to shared storage
    profileImages[currentUser.id] = tempProfileImage
    localStorage.setItem("profileImages", JSON.stringify(profileImages))

    // Update displays
    displayCurrentUser()
    displayChatList()

    // Update chat header if current chat is with this user
    if (currentChat) {
      const chatItem = document.querySelector(`[data-chat-id="${currentChat}"]`)
      if (chatItem && chatItem.dataset.chatType === "private") {
        updateChatHeader()
      }
    }
  }

  const profileModal = bootstrap.Modal.getInstance(document.getElementById("profileModal"))
  profileModal.hide()
  tempProfileImage = null
}

function toggleDarkMode() {
  const body = document.body
  const darkModeIcon = document.querySelector("#darkModeToggle i")

  body.classList.toggle("dark-mode")

  const isDarkMode = body.classList.contains("dark-mode")
  localStorage.setItem("darkMode", isDarkMode)

  // تغيير الأيقونة
  if (isDarkMode) {
    darkModeIcon.className = "fas fa-sun"
  } else {
    darkModeIcon.className = "fas fa-moon"
  }
}

function logout() {
  localStorage.removeItem("currentUser")
  window.location.href = "index.html"
}

function startNewChat() {
  const userSelect = document.getElementById("userSelect")
  const otherUserId = userSelect.value

  if (!otherUserId) {
    alert("Please select a user to start a chat with.")
    return
  }

  if (otherUserId === currentUser.id) {
    alert("You cannot start a chat with yourself.")
    return
  }

  if (!users[otherUserId]) {
    alert("The selected user does not exist.")
    return
  }

  let chatId = null
  Object.keys(chats).forEach((key) => {
    if (chats[key].otherUserId === otherUserId) {
      chatId = key
    }
  })

  if (chatId) {
    openChat(chatId)
  } else {
    chatId = generateId()
    chats[chatId] = {
      id: chatId,
      otherUserId: otherUserId,
      messages: [],
      createdAt: Date.now(),
    }
    saveChats()
    displayChatList()
    openChat(chatId)
  }

  const newChatModal = bootstrap.Modal.getInstance(document.getElementById("newChatModal"))
  newChatModal.hide()

  // Reset the select
  userSelect.value = ""
}

function createGroupChat() {
  const groupNameInput = document.getElementById("groupNameInput")
  const groupName = groupNameInput.value.trim()
  const groupType = document.querySelector('input[name="groupType"]:checked').value

  if (!groupName) {
    alert("Please enter a group name.")
    return
  }

  const members = []
  if (groupType === "department") {
    const departmentList = document.getElementById("departmentList")
    const department = departmentList.value

    if (!department) {
      alert("Please select a department.")
      return
    }

    Object.keys(users).forEach((userId) => {
      if (users[userId].department === department && userId !== currentUser.id) {
        members.push(userId)
      }
    })
  } else {
    document.querySelectorAll('#memberList input[type="checkbox"]:checked').forEach((checkbox) => {
      members.push(checkbox.value)
    })
  }

  if (members.length === 0) {
    alert("Please select at least one member for the group.")
    return
  }

  const groupId = generateId()
  const newGroup = {
    id: groupId,
    name: groupName,
    members: [currentUser.id, ...members],
    messages: [],
    createdAt: Date.now(),
  }

  groupChats[groupId] = newGroup
  saveGroupChats()

  // Save group image if selected
  if (tempGroupImage) {
    groupImages[groupId] = tempGroupImage
    localStorage.setItem("groupImages", JSON.stringify(groupImages))
  }

  // Share group with all members
  newGroup.members.forEach((memberId) => {
    if (memberId !== currentUser.id) {
      const memberKey = `groupChats_${memberId}`
      const memberGroupChats = JSON.parse(localStorage.getItem(memberKey) || "{}")
      memberGroupChats[groupId] = {
        id: groupId,
        name: groupName,
        members: [currentUser.id, ...members],
        messages: [],
        createdAt: Date.now(),
      }
      localStorage.setItem(memberKey, JSON.stringify(memberGroupChats))
    }
  })

  displayChatList()
  openChat(groupId, "group")

  const groupChatModal = bootstrap.Modal.getInstance(document.getElementById("groupChatModal"))
  groupChatModal.hide()

  // Reset form
  groupNameInput.value = ""
  document.querySelectorAll('#memberList input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false
  })
  document.getElementById("departmentList").value = ""
  tempGroupImage = null

  // Reset group image preview
  const previewImg = document.getElementById("groupImagePreview")
  const defaultPreview = document.getElementById("groupImageDefaultPreview")
  const removeBtn = document.getElementById("removeGroupImageBtn")

  if (previewImg) {
    previewImg.style.display = "none"
    defaultPreview.style.display = "flex"
    removeBtn.style.display = "none"
  }
}

function searchChats() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase()
  const chatListItems = document.querySelectorAll("#chatList .chat-item")

  chatListItems.forEach((item) => {
    const chatName = item.querySelector(".chat-name").textContent.toLowerCase()
    const lastMessage = item.querySelector(".last-message").textContent.toLowerCase()

    if (chatName.includes(searchTerm) || lastMessage.includes(searchTerm)) {
      item.style.display = "block"
    } else {
      item.style.display = "none"
    }
  })
}

function deleteCurrentChat() {
  if (!currentChat) return

  const isGroup = document.querySelector(`[data-chat-id="${currentChat}"]`).dataset.chatType === "group"

  if (isGroup) {
    const group = groupChats[currentChat]
    group.members.forEach((memberId) => {
      const memberKey = `groupChats_${memberId}`
      const memberGroupChats = JSON.parse(localStorage.getItem(memberKey) || "{}")
      delete memberGroupChats[currentChat]
      localStorage.setItem(memberKey, JSON.stringify(memberGroupChats))
    })

    // Remove group image
    delete groupImages[currentChat]
    localStorage.setItem("groupImages", JSON.stringify(groupImages))

    delete groupChats[currentChat]
    saveGroupChats()
  } else {
    const otherUserId = chats[currentChat].otherUserId
    delete chats[currentChat]
    saveChats()

    const otherUserKey = `chats_${otherUserId}`
    const otherUserChats = JSON.parse(localStorage.getItem(otherUserKey) || "{}")
    let recipientChatId = null
    Object.keys(otherUserChats).forEach((chatId) => {
      if (otherUserChats[chatId].otherUserId === currentUser.id) {
        recipientChatId = chatId
      }
    })
    if (recipientChatId) {
      delete otherUserChats[recipientChatId]
      localStorage.setItem(otherUserKey, JSON.stringify(otherUserChats))
    }
  }

  currentChat = null
  displayChatList()

  document.getElementById("welcomeScreen").style.display = "flex"
  document.getElementById("chatArea").style.display = "none"
  document.getElementById("deleteChatBtn").style.display = "none"
}

function handleFileUpload(event) {
  const file = event.target.files[0]

  if (file) {
    const reader = new FileReader()

    reader.onload = (e) => {
      const fileData = e.target.result
      const message = {
        id: generateId(),
        senderId: currentUser.id,
        content: `Uploaded File: ${file.name}`,
        timestamp: Date.now(),
        type: "file",
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        fileUrl: fileData,
      }

      const isGroup = document.querySelector(`[data-chat-id="${currentChat}"]`).dataset.chatType === "group"

      if (isGroup) {
        groupChats[currentChat].messages.push(message)
        saveGroupChats()

        const group = groupChats[currentChat]
        group.members.forEach((memberId) => {
          if (memberId !== currentUser.id) {
            const memberKey = `groupChats_${memberId}`
            const memberGroupChats = JSON.parse(localStorage.getItem(memberKey) || "{}")

            if (memberGroupChats[currentChat]) {
              memberGroupChats[currentChat].messages.push(message)
              localStorage.setItem(memberKey, JSON.stringify(memberGroupChats))
            }
          }
        })
      } else {
        chats[currentChat].messages.push(message)
        saveChats()

        const otherUserId = chats[currentChat].otherUserId
        const otherUserKey = `chats_${otherUserId}`
        const otherUserChats = JSON.parse(localStorage.getItem(otherUserKey) || "{}")

        let recipientChatId = null
        Object.keys(otherUserChats).forEach((chatId) => {
          if (otherUserChats[chatId].otherUserId === currentUser.id) {
            recipientChatId = chatId
          }
        })

        if (!recipientChatId) {
          recipientChatId = generateId()
          otherUserChats[recipientChatId] = {
            id: recipientChatId,
            otherUserId: currentUser.id,
            messages: [],
            createdAt: Date.now(),
          }
        }

        otherUserChats[recipientChatId].messages.push(message)
        localStorage.setItem(otherUserKey, JSON.stringify(otherUserChats))
      }

      displayMessages(isGroup)
      displayChatList()
    }

    reader.readAsDataURL(file)
  }
}

function generateId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function showNotification(title, body) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, {
      body: body,
      icon: "icon.png",
    })
  }
}

function escapeHtml(string) {
  const pre = document.createElement("pre")
  const text = document.createTextNode(string)
  pre.appendChild(text)
  return pre.innerHTML
}

function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

function openImageModal(imageUrl) {
  const imageModal = document.getElementById("imageModal")
  const modalImage = document.getElementById("modalImage")
  modalImage.src = imageUrl

  const bsImageModal = new bootstrap.Modal(imageModal)
  bsImageModal.show()
}

function changeTheme(themeName) {
  document.documentElement.className = themeName
  localStorage.setItem("selectedTheme", themeName)
}

function cancelReply() {
  replyingTo = null
  const replyPreview = document.getElementById("replyPreview")
  replyPreview.style.display = "none"
}

function toggleEmojiPicker() {
  const emojiPicker = document.getElementById("emojiPicker")

  if (emojiPicker.style.display === "none" || !emojiPicker.style.display) {
    emojiPicker.style.display = "block"
    displayEmojis("smileys") // Show default category
  } else {
    emojiPicker.style.display = "none"
  }
}

function displayEmojis(category) {
  const emojiGrid = document.getElementById("emojiGrid")
  emojiGrid.innerHTML = ""

  const emojis = emojiData[category] || emojiData.smileys

  emojis.forEach((emoji) => {
    const emojiButton = document.createElement("button")
    emojiButton.className = "emoji-item"
    emojiButton.textContent = emoji
    emojiButton.onclick = () => insertEmoji(emoji)
    emojiGrid.appendChild(emojiButton)
  })
}

function insertEmoji(emoji) {
  const messageInput = document.getElementById("messageInput")
  const currentValue = messageInput.value
  const cursorPosition = messageInput.selectionStart

  const newValue = currentValue.slice(0, cursorPosition) + emoji + currentValue.slice(cursorPosition)
  messageInput.value = newValue

  // Set cursor position after emoji
  messageInput.setSelectionRange(cursorPosition + emoji.length, cursorPosition + emoji.length)
  messageInput.focus()

  // Hide emoji picker
  document.getElementById("emojiPicker").style.display = "none"
}

function updateChatHeader() {
  if (!currentChat) return

  const chatItem = document.querySelector(`[data-chat-id="${currentChat}"]`)
  if (!chatItem) return

  const chatType = chatItem.dataset.chatType
  const chatAvatar = document.getElementById("chatAvatar")

  if (chatType === "private") {
    const chat = chats[currentChat]
    const otherUserId = chat.otherUserId
    const profileImage = profileImages[otherUserId]

    if (profileImage) {
      chatAvatar.innerHTML = `<img src="${profileImage}" alt="Profile">`
    } else {
      chatAvatar.innerHTML = '<i class="fas fa-user"></i>'
    }
  } else if (chatType === "group") {
    const groupImage = groupImages[currentChat]
    if (groupImage) {
      chatAvatar.innerHTML = `<img src="${groupImage}" alt="Group">`
    } else {
      chatAvatar.innerHTML = '<i class="fas fa-users"></i>'
    }
  }
}

function getUserProfileImage(userId) {
  return profileImages[userId] || null
}

// Group Image Preview Logic
const groupImageInput = document.getElementById("groupImageInput");
if (groupImageInput) {
  groupImageInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const preview = document.getElementById("groupImagePreview");
        preview.src = e.target.result;
        preview.style.display = "block";
        tempGroupImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}

let cropper;
const input = document.getElementById("groupImageInput");
const preview = document.getElementById("groupImagePreview");

if (input && preview) {
  input.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        preview.src = event.target.result;
        preview.style.display = "block";

        // Destroy cropper if exists
        if (cropper) {
          cropper.destroy();
        }

        cropper = new Cropper(preview, {
          aspectRatio: 1, // مربع
          viewMode: 1,
          movable: true,
          zoomable: true,
          scalable: true,
          crop(event) {
            // ممكن نستخدم crop data هنا لاحقًا لو هنقص فعليًا
          }
        });
      };
      reader.readAsDataURL(file);
    }
  });
}
