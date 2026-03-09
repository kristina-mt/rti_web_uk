console.log("Script loaded!");

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      const name = form.querySelector('input[name="name"]');
      const email = form.querySelector('input[name="email"]');
      const message = form.querySelector('textarea[name="message"]');

      const nameError = form.querySelector('[data-error-for="name"]');
      const emailError = form.querySelector('[data-error-for="email"]');
      const messageError = form.querySelector('[data-error-for="message"]');

      if (nameError) nameError.textContent = "";
      if (emailError) emailError.textContent = "";
      if (messageError) messageError.textContent = "";

      let hasError = false;

      if (!name.value.trim()) {
        if (nameError) nameError.textContent = "This field is required.";
        hasError = true;
      }

      if (!email.value.trim()) {
        if (emailError) emailError.textContent = "This field is required.";
        hasError = true;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        if (emailError) emailError.textContent = "Please enter a valid email address.";
        hasError = true;
      }

      if (!message.value.trim()) {
        if (messageError) messageError.textContent = "This field is required.";
        hasError = true;
      }

      if (hasError) {
        e.preventDefault();
      }
    });
  }

  // Smooth scroll
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }

        const navLinks = document.getElementById("navLinks");
        if (navLinks) {
          navLinks.classList.remove("show");
        }
      }
    });
  });

  // Active section highlight
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    let currentSection = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  });

  // Hidden submitted date
  const now = new Date().toLocaleString("en-GB");
  const hiddenDate = document.getElementById("submitted-at");
  if (hiddenDate) {
    hiddenDate.value = now;
  }

  // Back to Top button
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 200 ? "block" : "none";
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Hamburger menu
  const hamburger = document.getElementById("hamburger");
  const navLinksMenu = document.getElementById("navLinks");

  if (hamburger && navLinksMenu) {
    hamburger.addEventListener("click", () => {
      navLinksMenu.classList.toggle("show");
    });
  }

  // Section animation
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => observer.observe(section));
});