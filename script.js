console.log("Script loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form[name="contact"]');
  const navLinksMenu = document.getElementById("navLinks");
  const hamburger = document.getElementById("hamburger");
  const backToTop = document.getElementById("backToTop");
  const animatedSections = document.querySelectorAll(".section-fade-left");
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const allSectionsWithId = document.querySelectorAll("section[id]");
  const hiddenDate = document.getElementById("submitted-at");

  /* ===========================
     HELPERS
  =========================== */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const closeMobileMenu = () => {
    if (navLinksMenu) {
      navLinksMenu.classList.remove("show");
    }
    if (hamburger) {
      hamburger.setAttribute("aria-expanded", "false");
    }
  };

  const toggleMobileMenu = () => {
    if (!navLinksMenu || !hamburger) return;
    const isOpen = navLinksMenu.classList.toggle("show");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  };

  const setError = (field, message) => {
    if (!field || !form) return;
    const errorEl = form.querySelector(`[data-error-for="${field.name}"]`);
    if (errorEl) {
      errorEl.textContent = message;
    }
    field.setAttribute("aria-invalid", message ? "true" : "false");
  };

  const clearError = (field) => {
    setError(field, "");
  };

  const validateField = (field) => {
    if (!field) return true;

    const value = field.value.trim();

    if (!value) {
      setError(field, "This field is required.");
      return false;
    }

    if (field.type === "email" && !emailRegex.test(value)) {
      setError(field, "Please enter a valid email address.");
      return false;
    }

    clearError(field);
    return true;
  };

  /* ===========================
     FORM VALIDATION
  =========================== */
  if (form) {
    const nameField = form.querySelector('input[name="name"]');
    const emailField = form.querySelector('input[name="email"]');
    const messageField = form.querySelector('textarea[name="message"]');

    [nameField, emailField, messageField].forEach((field) => {
      if (!field) return;

      field.addEventListener("input", () => {
        if (field.value.trim()) {
          validateField(field);
        } else {
          clearError(field);
          field.setAttribute("aria-invalid", "false");
        }
      });

      field.addEventListener("blur", () => {
        validateField(field);
      });
    });

    form.addEventListener("submit", (e) => {
      const isNameValid = validateField(nameField);
      const isEmailValid = validateField(emailField);
      const isMessageValid = validateField(messageField);

      if (!isNameValid || !isEmailValid || !isMessageValid) {
        e.preventDefault();

        const firstInvalidField = [nameField, emailField, messageField].find(
          (field) => field && field.getAttribute("aria-invalid") === "true"
        );

        if (firstInvalidField) {
          firstInvalidField.focus();
        }
      }
    });
  }

  /* ===========================
     SUBMITTED DATE
  =========================== */
  if (hiddenDate) {
    hiddenDate.value = new Date().toLocaleString("en-GB");
  }

  /* ===========================
     SMOOTH SCROLL + MOBILE MENU
  =========================== */
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMobileMenu();
    });
  });

  /* ===========================
     ACTIVE NAV LINK
  =========================== */
  const updateActiveNavLink = () => {
    let currentSectionId = "";

    allSectionsWithId.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const triggerTop = 140;

      if (rect.top <= triggerTop && rect.bottom >= triggerTop) {
        currentSectionId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${currentSectionId}`);
    });
  };

  window.addEventListener("scroll", updateActiveNavLink);
  updateActiveNavLink();

  /* ===========================
     BACK TO TOP
  =========================== */
  if (backToTop) {
    const toggleBackToTop = () => {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    };

    window.addEventListener("scroll", toggleBackToTop);
    toggleBackToTop();

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* ===========================
     HAMBURGER MENU
  =========================== */
  if (hamburger && navLinksMenu) {
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Toggle navigation menu");

    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    document.addEventListener("click", (e) => {
      const clickedInsideMenu =
        navLinksMenu.contains(e.target) || hamburger.contains(e.target);

      if (!clickedInsideMenu) {
        closeMobileMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        closeMobileMenu();
      }
    });
  }

  /* ===========================
     SECTION ANIMATION
  =========================== */
  if (animatedSections.length > 0) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    animatedSections.forEach((section) => observer.observe(section));
  }
});