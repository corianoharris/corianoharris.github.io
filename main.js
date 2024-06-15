(async function () {
  // Function to toggle the tooltip

  document.addEventListener("DOMContentLoaded", function () {
    const tooltip = document.querySelector(".tooltiptext");
    const dropdownToggle = document.querySelector(".dropdown-toggle");

    const button = document.querySelector(".button");
    const copyrightYear = document.querySelector(".copyright-year");
    copyrightYear.innerHTML = new Date().getFullYear();

    const sections = document.querySelectorAll(".responsive-section");
    startSkeletonLoaderWhenApproaching(sections);

    function toggleTooltip() {
      // const tooltip = document.querySelector(".tooltiptext");
      // const button = document.querySelector(".button");

      if (tooltip.style.visibility === "hidden" || !tooltip.style.visibility) {
        tooltip.style.visibility = "visible";
        button.textContent = "Close";
      } else {
        tooltip.style.visibility = "hidden";
        button.textContent = "Menu";
      }

      tooltip.classList.toggle("fade-in");
    }

    // Function to toggle the dropdown
    function toggleDropdown() {
      const dropdownContent = document.querySelector(".dropdown-content");
      const caret = document.querySelector(".caret");

      if (
        dropdownContent.style.display === "none" ||
        !dropdownContent.style.display
      ) {
        dropdownContent.style.display = "block";
        caret.classList.replace("fa-caret-down", "fa-caret-up");
      } else {
        dropdownContent.style.display = "none";
        caret.classList.replace("fa-caret-up", "fa-caret-down");
      }
    }

    // Function to start skeleton loader animation for a section
    function startSkeletonLoader(section) {
      const children = section.querySelectorAll("*");

      children.forEach((child) => {
        const hadHighlightClass = child.classList.contains("highlight");
        const isListItem = child.tagName.toLowerCase() === "li";

        // Add skeleton loader
        child.classList.add("skeleton-loader");

        if (isListItem) child.style.visibility = "hidden";

        setTimeout(() => {
          child.style.transition = "opacity 0.5s ease-in-out";
          child.style.opacity = "0";

          setTimeout(() => {
            child.classList.remove("skeleton-loader");
            child.style.opacity = "";

            if (hadHighlightClass) child.classList.add("highlight");
            setTimeout(() => {
              child.style.opacity = "1";
            }, 50);

            if (isListItem) child.style.visibility = "";
          }, 500);
        }, 2500);

        const siblings = Array.from(child.parentElement.children);
        siblings.forEach((sibling) => {
          if (sibling !== child && sibling.classList.contains("highlight")) {
            sibling.classList.remove("highlight");
          }
        });
      });
    }

    // Function to reset skeleton loader animation
    function resetSkeletonLoader(section) {
      const children = section.querySelectorAll("*");

      children.forEach((child) => {
        if (child.classList.contains("skeleton-loader")) {
          child.classList.remove("skeleton-loader");
          child.style.opacity = "";
          child.style.transition = "";
        }
      });
    }

    // Function to start skeleton loader when elements are about to come into viewport
    function startSkeletonLoaderWhenApproaching(elements) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const section = entry.target;
            if (entry.isIntersecting) {
              startSkeletonLoader(section);
            } else {
              resetSkeletonLoader(section);
            }
          });
        },
        {
          rootMargin: "0px 0px -50px 0px", // Adjust as needed
          threshold: 0,
        }
      );

      elements.forEach((element) => {
        observer.observe(element);
      });
    }

    // event listeners

    button.addEventListener("click", function () {
      toggleTooltip();
    });

    button.addEventListener("touchend", function () {
      toggleTooltip();
    });

    button.removeEventListener("click", function () {
      toggleTooltip();
    });

    button.removeEventListener("touchend", function () {
      toggleTooltip();
    });

    dropdownToggle.addEventListener("click", function () {
      toggleDropdown();
    });

    dropdownToggle.addEventListener("touchend", function () {
      toggleDropdown();
    });

    dropdownToggle.removeEventListener("click", function () {
      toggleDropdown();
    });

    dropdownToggle.removeEventListener("touchend", function () {
      toggleDropdown();
    });
  });
})();
