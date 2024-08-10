document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  initializeSwiperDesign();
  initializeSwiperDev();
  initializeDropdown();
  initializeCards();
  updateCopyrightYear();
  setupTextFade('.fade-in-out');
});

function initializeNavigation() {
  const nav = document.querySelector(".nav");
  const navOpenBtn = document.querySelector(".navOpenBtn");
  const navCloseBtn = document.querySelector(".navCloseBtn");
  const navLinks = document.querySelectorAll(".nav-links");

  navOpenBtn.addEventListener("click", () => nav.classList.add("openNav"));
  navCloseBtn.addEventListener("click", () => nav.classList.remove("openNav"));

  navLinks.forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("openNav"));
  });
}

function initializeSwiperDesign() {
  new Swiper(".slide-content-design", {
    slidesPerView: 1,
    spaceBetween: 25,
    direction: "horizontal",
    slides: 3,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: "#swiper-pagination-design",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-design",
      prevEl: ".swiper-button-prev-design",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      520: { slidesPerView: 2 },
      950: { slidesPerView: 3 },
    },
    on: {
      init: function () {
        this.navigation.nextEl.innerHTML = '<i class="fas fa-arrow-right"></i>';
        this.navigation.prevEl.innerHTML = '<i class="fas fa-arrow-left"></i>';
      },
    },
  });
}

function initializeSwiperDev() {
  new Swiper(".slide-content-dev", {
    slidesPerView: 1,
    spaceBetween: 25,
    direction: "horizontal",
    slides: 3,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: "#swiper-pagination-dev",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-dev",
      prevEl: ".swiper-button-prev-dev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      520: { slidesPerView: 2 },
      950: { slidesPerView: 3 },
    },
    on: {
      init: function () {
        this.navigation.nextEl.innerHTML = '<i class="fas fa-arrow-right"></i>';
        this.navigation.prevEl.innerHTML = '<i class="fas fa-arrow-left"></i>';
      },
    },
  });
}

function initializeDropdown() {
  const dropdown = document.querySelector(".dropdown");
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");
  const dropdownIcon = dropdown.querySelector(".dropdown-icon");

  dropdown.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown();
  });

  document.addEventListener("click", () => {
    if (dropdownMenu.classList.contains("show")) {
      toggleDropdown();
    }
  });

  function toggleDropdown() {
    dropdownMenu.classList.toggle("show");
    dropdownIcon.classList.toggle("fa-chevron-down");
    dropdownIcon.classList.toggle("fa-chevron-up");
  }
}

function initializeCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const button = card.querySelector(".button");
    const cardOverlay = card.querySelector(".card-overlay");
    const closeOverlay = card.querySelector(".close-overlay");

    if (button && cardOverlay) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        cardOverlay.classList.add("active");
      });
    }

    if (closeOverlay && cardOverlay) {
      closeOverlay.addEventListener("click", handleClose);
      cardOverlay.addEventListener("click", handleOverlayClick);
    }

    function handleClose(event) {
      event.preventDefault();
      closeOverlayFunc();
    }

    function handleOverlayClick(event) {
      if (event.target === cardOverlay) {
        closeOverlayFunc();
      }
    }

    function closeOverlayFunc() {
      cardOverlay.classList.remove("active");
    }
  });
}

function updateCopyrightYear() {
  const copyrightYear = document.querySelector(".copyright-year");
  copyrightYear.textContent = new Date().getFullYear();
}

function setupTextFade(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  const config = {
    threshold: 0.1,
    fadeInDuration: '0.5s',
    fadeOutDuration: '0.5s',
    ...options
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.style.transition = `opacity ${entry.isIntersecting ? config.fadeInDuration : config.fadeOutDuration} ease-${entry.isIntersecting ? 'in' : 'out'}`;
      entry.target.style.opacity = entry.isIntersecting ? 1 : 0;
    });
  }, { threshold: config.threshold });

  elements.forEach(element => {
    element.style.opacity = 0;
    observer.observe(element);
  });
}