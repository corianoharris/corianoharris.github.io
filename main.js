function toggleTooltip() {
  const tooltip = document.querySelector(".tooltiptext");
  const button = document.querySelector(".button");

  if (tooltip.style.visibility === "hidden" || !tooltip.style.visibility) {
    tooltip.style.visibility = "visible";
    button.textContent = "Close";
  } else {
    tooltip.style.visibility = "hidden";
    button.textContent = "Menu";
  }

  tooltip.classList.toggle("fade-in");
}

function toggleDropdown() {
  const dropdownContent = document.querySelector(".dropdown-content");
  const caret = document.querySelector(".caret");

  if (
    dropdownContent.style.display === "none" ||
    !dropdownContent.style.display
  ) {
    dropdownContent.style.display = "block";
    caret.classList.remove("fa-caret-down");
    caret.classList.add("fa-caret-up");
  } else {
    dropdownContent.style.display = "none";
    caret.classList.remove("fa-caret-up");
    caret.classList.add("fa-caret-down");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const tooltip = document.querySelector(".tooltiptext");
  tooltip.style.visibility = "hidden";

  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.style.display = "none";
});

// Get the button
const button = document.querySelector(".button");

const copyrightYear = document.querySelector(".copyright-year");

copyrightYear.innerHTML = new Date().getFullYear();
