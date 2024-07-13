document.addEventListener("DOMContentLoaded", (event) => {
  const nav = document.querySelector(".nav"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");
  navLinks = document.querySelectorAll(".nav-links");

  navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
  });
  navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      nav.classList.remove("openNav");
    });
  });

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    direction: "horizontal",
    slides: 4,
    // loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
    on: {
      init: function () {
        const nextButton = this.navigation.nextEl;
        const prevButton = this.navigation.prevEl;

        if (nextButton) {
          nextButton.innerHTML = '<i class="fas fa-arrow-right"></i>';
        }
        if (prevButton) {
          prevButton.innerHTML = '<i class="fas fa-arrow-left"></i>';
        }
      },
    },
  });

  // Update counter
function updateCounter() {
  const currentSlide = swiper.realIndex + 1;
  const totalSlides = 2;
  document.querySelector('.swiper-counter').textContent = `${currentSlide} / ${totalSlides}`;
}

// Initial counter update
updateCounter();

// Update counter on slide change
swiper.on('slideChange', updateCounter);

  // nav toggle

  // Dropdown functionality
  const dropdown = document.querySelector(".dropdown");
  dropdown.addEventListener("click", (event) => {
    event.stopPropagation();
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");
    const dropdownIcon = dropdown.querySelector(".dropdown-icon");
    dropdownMenu.classList.toggle("show");
    if (dropdownMenu.classList.contains("show")) {
      dropdownIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      dropdownIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", () => {
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");
    const dropdownIcon = dropdown.querySelector(".dropdown-icon");
    if (dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.remove("show");
      dropdownIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  const swiperContainer = document.querySelector(".swiper");

  cards.forEach((card) => {
    const button = card.querySelector(".button");
    const cardOverlay = card.querySelector(".card-overlay");
    const closeOverlay = card.querySelector(".close-overlay");
    const overlayTitle = card.querySelector(".overlay-title");
    const overlayIframe = card.querySelector(".overlay-iframe");
    const nameElement = card.querySelector(".name");


    const name = nameElement?.textContent || "Untitled";

    if (button) {
      button.addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          if (cardOverlay) {
            cardOverlay.classList.add("active");
          }
        },
        { passive: false }
      );
    }

    closeOverlay?.addEventListener("click", handleClose, { passive: false });
    closeOverlay?.addEventListener("touchend", handleClose, { passive: false });

    cardOverlay?.addEventListener("click", handleOverlayClick, {
      passive: false,
    });
    cardOverlay?.addEventListener("touchend", handleOverlayClick, {
      passive: false,
    });

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

  const copyrightYear = document.querySelector(".copyright-year");
  copyrightYear.innerHTML = new Date().getFullYear();
});
