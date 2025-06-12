// Predefined users for the ISG chat system
const USERS = {
  "ismail.m@isg-egy.com": {
    password: "123456",
    name: "Ismail Mohamed",
    id: "ismail_m",
    department: "Engineering Office",
  },
  "sanaa.m@isg-egy.com": {
    password: "123456",
    name: "Sanaa Magid",
    id: "sanaa_m",
    department: "Engineering Office",
  },
  "mohamed.h@isg-egy.com": {
    password: "123456",
    name: "Mohamed Hossam",
    id: "mohamed_h",
    department: "Engineering Office",
  },
  "islam.a@isg-egy.com": {
    password: "123456",
    name: "Islam Ashraf",
    id: "islam_a",
    department: "Engineering Office",
  },
  "osama.s@isg-egy.com": {
    password: "123456",
    name: "Osama Shaheen",
    id: "osama_s",
    department: "Technical Support",
  },
  "hoda.b@isg-egy.com": {
    password: "123456",
    name: "Hoda Bayoumi",
    id: "hoda_b",
    department: "Technical Support",
  },
  "ahmed.b@isg-egy.com": {
    password: "123456",
    name: "Ahmed Badr",
    id: "ahmed_b",
    department: "Accounting",
  },
  "ahmed.az@isg-egy.com": {
    password: "123456",
    name: "Ahmed Abdelazeem",
    id: "ahmed_az",
    department: "Accounting",
  },
  "ahmed.ab@isg-egy.com": {
    password: "123456",
    name: "Ahmed Abouzeid",
    id: "ahmed_ab",
    department: "Sales",
  },
  "osama.s2@isg-egy.com": {
    password: "123456",
    name: "Osama Shaheen",
    id: "osama_s2",
    department: "Sales",
  },
  "asmaa.g@isg-egy.com": {
    password: "123456",
    name: "Asmaa Gamal",
    id: "asmaa_g",
    department: "Sales",
  },
  "faiza.k@isg-egy.com": {
    password: "123456",
    name: "Faiza Khairy",
    id: "faiza_k",
    department: "Procurement",
  },
  "wael.a@isg-egy.com": {
    password: "123456",
    name: "Wael Allam",
    id: "wael_a",
    department: "Procurement",
  },
  "mari@isg-egy.com": {
    password: "123456",
    name: "Mari",
    id: "mari",
    department: "Projects",
  },
  "madonna@isg-egy.com": {
    password: "123456",
    name: "Madonna",
    id: "madonna",
    department: "Projects",
  },
  "amira.n@isg-egy.com": {
    password: "123456",
    name: "Amira Nady",
    id: "amira_n",
    department: "Projects",
  },
  "ahmed.r@isg-egy.com": {
    password: "123456",
    name: "Ahmed Reda",
    id: "ahmed_r",
    department: "Projects",
  },
  "maha.n@isg-egy.com": {
    password: "123456",
    name: "Maha Nasr",
    id: "maha_n",
    department: "Reception",
  },
  "nada.a@isg-egy.com": {
    password: "123456",
    name: "Nada Ahmed",
    id: "nada_a",
    department: "Reception",
  },
  "moataz.s@isg-egy.com": {
    password: "123456",
    name: "Moataz Saudi",
    id: "moataz_s",
    department: "Digital Marketing & IT",
  },
  "heba.n@isg-egy.com": {
    password: "123456",
    name: "Heba Nabil",
    id: "heba_n",
    department: "Digital Marketing & IT",
  },
  "abdelrahim.f@isg-egy.com": {
    password: "123456",
    name: "Abdelrahim Fathy",
    id: "abdelrahim_f",
    department: "Digital Marketing & IT",
  },
  "rana.b@isg-egy.com": {
    password: "123456",
    name: "Rana Bahgat",
    id: "rana_b",
    department: "Digital Marketing & IT",
  },
  "mona.k@isg-egy.com": {
    password: "123456",
    name: "Mona Khairy",
    id: "mona_k",
    department: "Management",
  },
  "mohamed.l@isg-egy.com": {
    password: "123456",
    name: "Mohamed El-Leithy",
    id: "mohamed_l",
    department: "Management",
  },
  "hussein.z@isg-egy.com": {
    password: "123456",
    name: "Hussein",
    id: "hussein_z",
    department: "ZATUS",
  },
  "ahmed.k@isg-egy.com": {
    password: "123456",
    name: "Ahmed Khalifa",
    id: "ahmed_k",
    department: "ZATUS",
  },
}

// Language translations
const TRANSLATIONS = {
  en: {
    login: "Login",
    email: "Email",
    password: "Password",
    invalidCredentials: "Invalid email or password",
    loginSuccess: "Login successful!",
  },
  ar: {
    login: "تسجيل الدخول",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    invalidCredentials: "بريد إلكتروني أو كلمة مرور غير صحيحة",
    loginSuccess: "تم تسجيل الدخول بنجاح!",
  },
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm")
  const languageSelect = document.getElementById("language")

  // Check if user is already logged in
  const currentUser = localStorage.getItem("currentUser")
  if (currentUser) {
    window.location.href = "chat.html"
    return
  }

  // Handle language change
  languageSelect.addEventListener("change", function () {
    const selectedLang = this.value
    updateLanguage(selectedLang)
    localStorage.setItem("selectedLanguage", selectedLang)
  })

  // Load saved language preference
  const savedLanguage = localStorage.getItem("selectedLanguage") || "en"
  languageSelect.value = savedLanguage
  updateLanguage(savedLanguage)

  // Handle login form submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value
    const language = languageSelect.value

    if (authenticateUser(email, password)) {
      const user = USERS[email]
      const userData = {
        id: user.id,
        name: user.name,
        email: email,
        department: user.department,
        language: language,
      }

      localStorage.setItem("currentUser", JSON.stringify(userData))
      showMessage(TRANSLATIONS[language].loginSuccess, "success")

      setTimeout(() => {
        window.location.href = "chat.html"
      }, 1000)
    } else {
      showMessage(TRANSLATIONS[language].invalidCredentials, "error")
    }
  })
})

function authenticateUser(email, password) {
  const user = USERS[email]
  return user && user.password === password
}

function updateLanguage(lang) {
  const translations = TRANSLATIONS[lang]

  // Update form labels and placeholders
  document.querySelector('label[for="email"]').textContent = translations.email
  document.querySelector('label[for="password"]').textContent = translations.password
  document.querySelector('button[type="submit"]').innerHTML =
    `<i class="fas fa-sign-in-alt me-2"></i>${translations.login}`

  // Update HTML direction for Arabic
  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl")
    document.documentElement.setAttribute("lang", "ar")
  } else {
    document.documentElement.setAttribute("dir", "ltr")
    document.documentElement.setAttribute("lang", "en")
  }
}

function showMessage(message, type) {
  // Remove existing alerts
  const existingAlert = document.querySelector(".alert")
  if (existingAlert) {
    existingAlert.remove()
  }

  const alertDiv = document.createElement("div")
  alertDiv.className = `alert alert-${type === "success" ? "success" : "danger"} alert-dismissible fade show`
  alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `

  const loginCard = document.querySelector(".login-card")
  loginCard.insertBefore(alertDiv, loginCard.firstChild)

  // Auto-dismiss after 3 seconds
  setTimeout(() => {
    if (alertDiv) {
      alertDiv.remove()
    }
  }, 3000)
}
