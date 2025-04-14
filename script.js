console.log("Script loaded!");

// Pašto paslaugos vertimas
function updatePostalService(lang) {
  const section = document.getElementById("postalService");
  if (section && translations[lang]?.postalService) {
    section.innerHTML = translations[lang].postalService;
  }
}


// Kalbos perjungimas
function switchLang(lang) {
  document.querySelectorAll('.lang-switcher button').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.lang-switcher button[onclick="switchLang('${lang}')"]`)?.classList.add('active');
  localStorage.setItem("siteLang", lang);
  translatePage(lang);
}

// Tekstų vertimas
function translatePage(lang) {
  const t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.innerHTML = t[key];
  });

  // Placeholderiai
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  const sendBtn = document.querySelector('[data-i18n="send-button"]');

  if (nameInput) nameInput.placeholder = t.name;
  if (emailInput) emailInput.placeholder = t.email;
  if (messageInput) messageInput.placeholder = t.message;
  if (sendBtn) sendBtn.textContent = t["send-button"];

  updatePostalService(lang);
}

// Pagrindinis įkrovimas
let savedLang = localStorage.getItem("siteLang") || navigator.language.slice(0, 2);
savedLang = ["en", "lt", "ru", "pl"].includes(savedLang) ? savedLang : "en";

window.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded!");
  translatePage(savedLang);
  document.querySelector(`.lang-switcher button[onclick="switchLang('${savedLang}')"]`)?.classList.add("active");

  // Formos validacija
  const t = translations[savedLang];
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", e => {
      // ...
    });
  }

  // Pridėti datą
  const now = new Date().toLocaleString("en-GB");
  const hiddenDate = document.getElementById("submitted-at");
  if (hiddenDate) hiddenDate.value = now;

  // Back to Top mygtukas
  const backToTop = document.getElementById("backToTop");
  
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 200 ? "block" : "none";
    });

    backToTop.onclick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  }

  // Sekcijų animacija
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});

