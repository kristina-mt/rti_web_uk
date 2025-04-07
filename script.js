// script.js – kalbų perjungimas ir vertimai

const translations = {
    en: {
      "hero-title": "Fast and reliable auto locksmith service",
      "hero-sub": "Car keys, motorcycles, vans, lorries – programming, duplication, ECU remap, emergency unlocking",
      "banner-text": "🔐 24/7 UK-wide emergency service",
      "contact-button": "Contact Us",
      "about-title": "About Us",
      "about-text": "With over 10 years of experience, we specialize in all vehicle key programming, ECU remapping and emergency unlocking. RTi Auto Locksmith offers services for all vehicle types. RTi Auto Locksmith is your reliable partner when you need car key help. We work quickly, responsibly, and professionally.",
      "services-title": "Our Services",
      "service1": "Car key programming",
      "service2": "Motorcycle key solutions",
      "service3": "Van and lorry key cutting",
      "service4": "Emergency unlocking",
      "service5": "ECU programming & remap",
      "service6": "Immobilizer solutions",
      "gallery-title": "Gallery",
      "contact-title": "Contact",
      "training-title": "Training",
      "training-text": "RTi Auto Locksmith also provides professional training in car key programming, duplication, ECU remap and emergency unlocking.<br><br>Training is available in <strong>Lithuanian</strong>, <strong>English</strong>, <strong>Russian</strong> and <strong>Polish</strong> languages.",
      "lockout-title": "Car Lockout Service",
      "lockout-text": "Car lockouts can happen to anyone. Whether it's due to lost, stolen keys or a broken lock, we’ll get you back on the road quickly and safely.",
      "key-replacement-title": "Car Key Replacement",
      "key-replacement-text": "Lost your keys? We offer replacement for remote, smart, transponder and even retro keys. Our experts can cut, clone and program keys on-site.",
      "why-us-title": "Why Choose Us?",
      "why-us-text": "We deliver expert-level service at affordable rates. Backed by 5-star reviews. With service points across North West UK, we’re always nearby.",
      "ignition-title": "Ignition Switch Repairs",
      "ignition-text": "Ignition systems are delicate and essential. We repair, replace or extract broken keys from any ignition model. Avoid DIY—call us for professional help.",
      "programming-title": "Car Key Programming",
      "programming-text": "We use OBD tools and EEPROM tech to program keys. From simple copies to full electronic solutions. Transponder and ECU key matching done precisely.",
      "pricing-title": "Service Pricing",
      "pricing-text": "Lockouts from £80, lost key solutions from £180, key repairs from £30, copies from £100, remotes and ignition repair from £120. Transparent prices always.",
      "contact-us-title": "Contact Us",
      "contact-us-text": "Available 24/7 across UK. Call, WhatsApp or fill out the form to reach us.",
      "uk-contact": "📍 United Kingdom",
      "footer": "© 2025 RTi Auto Locksmith. All rights reserved.",
      "name": "Your name",
      "email": "Your email",
      "message": "Your message",
      "send-button": "Send"
    },
    lt: {
      "hero-title": "Greita ir patikima automobilių raktų pagalba",
      "hero-sub": "Automobiliai, motociklai,autobusiukai vilkikai – programavimas, kopijavimas, ECU remapas",
      "banner-text": "🔐 24/7 pagalba visoje JK",
      "contact-button": "Susisiekti",
      "about-title": "Apie mus",
      "about-text": "Daugiau nei 10 metų patirtis – autotransporto raktų programavime, ECU remapas ir avarinis atrakinimas. RTi Auto Locksmith dirba su visų tipų transportu.",
      "services-title": "Mūsų paslaugos",
      "service1": "Automobilių raktų programavimas",
      "service2": "Motociklų raktų sprendimai",
      "service3": "Vilkikų ir furgonų raktų gamyba",
      "service4": "Avarinis atrakinimas",
      "service5": "ECU programavimas ir remapas",
      "service6": "Imobilaizerių sprendimai",
    "gallery-title": "Galerija",
      "contact-title": "Kontaktai",
      "uk-contact": "📍 Jungtinė Karalystė",
      "training-title": "Mokymai",
      "training-text": "RTi Auto Locksmith taip pat teikia profesionalius mokymus automobilių raktų programavimo, kopijavimo, ECU remap bei avarinio atrakinimo srityse.<br><br>Mokymai vyksta <strong>lietuvių</strong>, <strong>anglų</strong>, <strong>rusų</strong> ir <strong>lenkų</strong> kalbomis – tiek <strong>Lietuvoje</strong>, tiek <strong>Jungtinėje Karalystėje</strong>.",
      "lockout-title": "Avarinis automobilio atrakinimas",
      "lockout-text": "Avarinė situacija dėl užrakinto automobilio gali nutikti bet kam. Nesvarbu, ar praradote, ar pavogė raktus, ar tiesiog neveikia spynos – mes čia, kad padėtume. Greitai ir saugiai atrakinsime jūsų automobilį ir sugrąžinsime jus į kelią.",
  
      "key-replacement-title": "Automobilio rakto keitimas",
      "key-replacement-text": "Pamesti raktai – tai viena nemaloniausių situacijų, ypač jei naudojate išmaniuosius pultelius. Mes galime pagaminti naują raktą, suprogramuoti pultelį, klonuoti raktą ar net pritaikyti atsarginį raktą jūsų automobiliui.",
  
      "why-us-title": "Kodėl verta rinktis mus?",
      "why-us-text": "Mūsų komanda turi nepriekaištingus įgūdžius ir šimtus penkių žvaigždučių atsiliepimų. Turime kelis servisus, kad galėtume greitai atvykti visame Londone ir aplink. Kainos – prieinamos, be jokių paslėptų mokesčių.",
  
      "ignition-title": "Uždegimo spynelės remontas",
      "ignition-text": "Uždegimo spynelė (starterio jungiklis) valdo pagrindines automobilio sistemas. Atliekame spynelių remontą, keitimą ir ištraukiame nulūžusius raktus. Remontuojame visų modelių automobilius. Nerekomenduojame remontuoti savarankiškai – geriau patikėti darbą profesionalui.",
  
      "programming-title": "Automobilių raktų programavimas",
      "programming-text": "Programuojame raktus per OBD, EEPROM ar prietaisų skydelio skaitymo būdus. Galime suprogramuoti ir iškirpti raktus greitai ir tiksliai. Taip pat teikiame transponderių raktų paslaugas.",
  
      "pricing-title": "Kainos ir paslaugos",
      "pricing-text": "Avarinis atrakinimas nuo £80, pamestų raktų paslaugos nuo £180, raktų remontas nuo £30, atsarginio rakto gamyba nuo £100, pultelių keitimas ir uždegimo spynelės remontas nuo £120. Mūsų kainos konkurencingos ir skaidrios.",
  
      "contact-us-title": "Susisiekite su mumis",
      "contact-us-text": "Dirbame 24/7 visame UK. Susisiekite telefonu, per WhatsApp arba užpildykite formą.",
      "footer": "© 2025 RTi Auto Locksmith. Visos teisės saugomos.",
      "name": "Jūsų vardas",
      "email": "El. paštas",
      "message": "Jūsų žinutė",
      "send-button": "Siųsti"
    },
    ru: {
      "hero-title": "Быстрая и надежная помощь с ключами",
      "hero-sub": "Автомобили, мотоциклы, грузовики – программирование, копирование, ECU ремап",
      "banner-text": "🔐 Круглосуточная помощь по всей Великобритании",
      "contact-button": "Связаться",
      "about-title": "О нас",
      "about-text": "Более 10 лет опыта – программирование автоключей, ECU ремап, аварийное вскрытие. RTi Auto Locksmith работает со всеми видами транспорта.",
      "services-title": "Наши услуги",
      "service1": "Программирование автоключей",
      "service2": "Ключи для мотоциклов",
      "service3": "Ключи для фургонов и грузовиков",
      "service4": "Аварийное открытие дверей",
      "service5": "Программирование ECU и ремап",
      "service6": "Решения для иммобилайзеров",
    "gallery-title": "Галерея",
    "training-title": "Обучение",
    "training-text": "RTi Auto Locksmith предлагает профессиональное обучение по программированию ключей, дублированию, ECU ремапу и аварийному вскрытию.<br><br>Обучение проводится на <strong>литовском</strong>, <strong>английском</strong>, <strong>русском</strong> и <strong>польском</strong> языках – в <strong>Литве</strong> и <strong>Великобритании</strong>.",
   "lockout-title": "Аварийное вскрытие автомобиля",
    "lockout-text": "Замок может заклинить у любого. Мы откроем авто быстро и без повреждений, если потеряли ключи, сломалась личинка или ключ остался в салоне.",

    "key-replacement-title": "Замена автомобильных ключей",
    "key-replacement-text": "Изготавливаем новые ключи, программируем, клонируем и ремонтируем. Работаем со всеми типами ключей: смарт, транспондер, ретро и др.",

    "why-us-title": "Почему выбирают нас?",
    "why-us-text": "Высокий уровень сервиса, доступные цены, сотни 5-звездочных отзывов. Несколько точек обслуживания по всему Лондону.",

    "ignition-title": "Ремонт замка зажигания",
    "ignition-text": "Ремонтируем и меняем замки зажигания. Извлекаем сломанные ключи. Не пытайтесь чинить сами – доверьтесь профессионалам.",

    "programming-title": "Программирование ключей",
    "programming-text": "Программируем ключи через OBD и EEPROM. Работаем с транспондерами и ЭБУ. Предлагаем комплексные электронные решения.",

    "pricing-title": "Цены и услуги",
    "pricing-text": "Открытие авто от £80, услуги при потере ключей от £180, ремонт от £30, дубликаты от £100, ремонт пультов и замка зажигания от £120.",

    "contact-us-title": "Связаться с нами",
    "contact-us-text": "Работаем 24/7 в. Позвоните, напишите в WhatsApp или заполните форму.",

      "contact-title": "Контакты",
      "uk-contact": "📍 Великобритания",
      "footer": "© 2025 RTi Auto Locksmith. Все права защищены.",
      "name": "Ваше имя",
      "email": "Эл. почта",
      "message": "Ваше сообщение",
      "send-button": "Отправить"
    },
    pl: {
      "hero-title": "Szybka i niezawodna pomoc z kluczami",
      "hero-sub": "Samochody, motocykle, ciężarówki – programowanie, kopiowanie, remap ECU",
      "banner-text": "🔐 Pomoc 24/7 na terenie całego UK",
      "contact-button": "Skontaktuj się",
      "about-title": "O nas",
      "about-text": "Ponad 10 lat doświadczenia – programowanie kluczy, remap ECU, awaryjne otwieranie. RTi Auto Locksmith obsługuje wszystkie typy pojazdów.",
      "services-title": "Nasze usługi",
      "service1": "Programowanie kluczy",
      "service2": "Klucze motocyklowe",
      "service3": "Klucze do furgonetek i ciężarówek",
      "service4": "Awaryjne otwieranie",
      "service5": "Programowanie ECU i remap",
      "service6": "Rozwiązania imobilizera",
    "gallery-title": "Galeria",
    "contact-title": "Kontakt",
      "uk-contact": "📍 Wielka Brytania",
      "training-title": "Szkolenia",
    "training-text": "RTi Auto Locksmith oferuje profesjonalne szkolenia z zakresu programowania kluczy, kopiowania, remapu ECU i awaryjnego otwierania.<br><br>Szkolenia odbywają się w językach: <strong>litewskim</strong>, <strong>angielskim</strong>, <strong>rosyjskim</strong> i <strong>polskim</strong> – zarówno na <strong>Litwie</strong>, jak i w <strong>Wielkiej Brytanii</strong>.",
    "lockout-title": "Awaryjne otwieranie samochodu",
    "lockout-text": "Zatrzaśnięcie się w aucie to powszechny problem. Otwieramy auta szybko i bez uszkodzeń – bez względu na powód.",

    "key-replacement-title": "Wymiana kluczy samochodowych",
    "key-replacement-text": "Zgubiłeś klucz? Dorabiamy, kodujemy i naprawiamy klucze: smart, piloty, transpondery, retro. Działamy szybko i skutecznie.",

    "why-us-title": "Dlaczego my?",
    "why-us-text": "Najwyższa jakość w dobrej cenie. Setki pozytywnych opinii. Punkty serwisowe w całym North West UK.",

    "ignition-title": "Naprawa stacyjki",
    "ignition-text": "Naprawiamy i wymieniamy stacyjki. Usuwamy złamane klucze. Nie ryzykuj naprawy samodzielnej – zaufaj fachowcom.",

    "programming-title": "Programowanie kluczy",
    "programming-text": "Programujemy przez OBD i EEPROM. Obsługujemy transpondery i ECU. Precyzyjne i szybkie rozwiązania.",

    "pricing-title": "Cennik usług",
    "pricing-text": "Otwieranie od £80, zagubione klucze od £180, naprawa od £30, duplikaty od £100, piloty i stacyjka od £120.",

    "contact-us-title": "Skontaktuj się z nami",
    "contact-us-text": "Dostępni 24/7 w UK. Zadzwoń, napisz na WhatsApp lub wypełnij formularz.",

      "footer": "© 2025 RTi Auto Locksmith. Wszelkie prawa zastrzeżone.",
      "name": "Twoje imię",
      "email": "Twój email",
      "message": "Twoja wiadomość",
      "send-button": "Wyślij"
    }
  };
 // === Pašto paslaugos vertimai ===
const postalServiceContent = {
  en: `
    <img src="images/mail-global.png" alt="Mail-in lock service" style="max-width: 50px; border-radius: 8px; margin-bottom: 20px;" />
    <h2>Mail-in Service</h2>
    <p>We offer a unique <strong>mail-in service for lock repair, programming, and key duplication</strong>. Simply send us your car or motorcycle lock – we’ll repair it, reprogram it, and ship it back.</p>
    <p>We serve clients <strong>worldwide</strong> – including the UK, Lithuania, Europe, USA, Australia, and more.</p>
    <p><strong>Send it – we fix it – we send it back!</strong></p>
    <a href="docs/mail-in-form.pdf" target="_blank" class="btn">📄 Download Order Form (PDF)</a>
  `,
  lt: `
    <img src="images/mail-global.png" alt="Spynų remontas paštu" style="max-width: 50px; border-radius: 8px; margin-bottom: 20px;" />
    <h2>Užsakymas paštu</h2>
    <p>Siūlome unikalią paslaugą – <strong>spynų remontą, programavimą ir raktų gamybą paštu</strong>. Jums tereikia atsiųsti automobilio ar motociklo spyną mums – mes ją suremontuosime, priprogramuosime ir grąžinsime atgal.</p>
    <p>Aptarnaujame <strong>visame pasaulyje</strong> – Lietuva, Jungtinė Karalystė, Europa, JAV, Australija ir kt.</p>
    <p><strong>Atsiųskite – suremontuosime – grąžinsime!</strong></p>
    <a href="docs/mail-in-form.pdf" target="_blank" class="btn">📄 Download Order Form (PDF)</a>
  `,
  ru: `
    <img src="images/mail-global.png" alt="Почтовый сервис замков" style="max-width: 50px; border-radius: 8px; margin-bottom: 20px;" />
    <h2>Обслуживание по почте</h2>
    <p>Мы предлагаем уникальную услугу – <strong>ремонт, программирование замков и изготовление ключей по почте</strong>. Просто отправьте нам замок от автомобиля или мотоцикла – мы его отремонтируем, запрограммируем и вернём обратно.</p>
    <p>Обслуживаем клиентов <strong>по всему миру</strong> – Великобритания, Литва, Европа, США, Австралия и др.</p>
    <p><strong>Отправьте – мы починим – и вернём!</strong></p>
    <a href="docs/mail-in-form.pdf" target="_blank" class="btn">📄 Download Order Form (PDF)</a>
  `,
  pl: `
    <img src="images/mail-global.png" alt="Usługa naprawy zamków pocztą" style="max-width: 50px; border-radius: 8px; margin-bottom: 20px;" />
    <h2>Usługa pocztowa</h2>
    <p>Oferujemy unikalną usługę – <strong>naprawę, programowanie zamków i dorabianie kluczy przez wysyłkę</strong>. Wystarczy wysłać do nas zamek samochodowy lub motocyklowy – naprawimy go, zaprogramujemy i odeślemy z powrotem.</p>
    <p>Obsługujemy klientów <strong>na całym świecie</strong> – Wielka Brytania, Litwa, Europa, USA, Australia i inne.</p>
    <p><strong>Wyślij – naprawimy – odeślemy!</strong></p><a href="docs/mail-in-form.pdf" target="_blank" class="btn">📄 Download Order Form (PDF)</a>
  `
};

function updatePostalService(lang) {
  const section = document.getElementById("postalService");
  if (section && postalServiceContent[lang]) {
    section.innerHTML = postalServiceContent[lang];
  }
}

function switchLang(lang) {
  document.querySelectorAll('.lang-switcher button').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.lang-switcher button[onclick="switchLang('${lang}')"]`)?.classList.add('active');
  localStorage.setItem("siteLang", lang);
  translatePage(lang);
}

function translatePage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const t = translations[lang];
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  const sendButton = document.querySelector('[data-i18n="send-button"]');

  if (nameInput) nameInput.placeholder = t.name;
  if (emailInput) emailInput.placeholder = t.email;
  if (messageInput) messageInput.placeholder = t.message;
  if (sendButton) sendButton.textContent = t.send;

  updatePostalService(lang);
}

window.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("siteLang") || navigator.language.slice(0, 2);
  const finalLang = ["en", "lt", "ru", "pl"].includes(lang) ? lang : "en";
  window.savedLang = finalLang;

  translatePage(finalLang);
  document.querySelector(`.lang-switcher button[onclick="switchLang('${finalLang}')"]`)?.classList.add("active");

  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 200 ? "block" : "none";
    });
    backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const now = new Date().toLocaleString("en-GB");
  const hiddenDate = document.getElementById("submitted-at");
  if (hiddenDate) hiddenDate.value = now;

  const t = translations[finalLang];
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const name = document.querySelector('input[name="name"]');
      const email = document.querySelector('input[name="email"]');
      const message = document.querySelector('textarea[name="message"]');

      const nameError = document.querySelector('[data-error-for="name"]');
      const emailError = document.querySelector('[data-error-for="email"]');
      const messageError = document.querySelector('[data-error-for="message"]');

      nameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";

      let hasError = false;
      if (!name.value.trim()) {
        nameError.textContent = t.required;
        hasError = true;
      }
      if (!email.value.trim()) {
        emailError.textContent = t.required;
        hasError = true;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent = t.invalidEmail;
        hasError = true;
      }
      if (!message.value.trim()) {
        messageError.textContent = t.required;
        hasError = true;
      }
      if (hasError) e.preventDefault();
    });
  }

  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  sections.forEach((section) => observer.observe(section));
});
