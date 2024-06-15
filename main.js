
// Get the button
const button = document.querySelector(".button");

const copyrightYear = document.querySelector(".copyright-year");

copyrightYear.innerHTML = new Date().getFullYear();

const sections = document.querySelectorAll('.responsive-section');


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

window.addEventListener('scroll', function() {
  sections.forEach(title => {
    const children = title.querySelectorAll('*');
    children.forEach(child => {
      const top = child.getBoundingClientRect().top;
      if (top >= 0 && top <= window.innerHeight) {
        // Check if the current child has the highlight class
        const hadHighlightClass = child.classList.contains('highlight');

        // Check if the child element is a list item
        const isListItem = child.tagName.toLowerCase() === 'li';

        // Add skeleton loader
        child.classList.add('skeleton-loader');

        // Conditional handling for list items
        if (isListItem) {
          child.style.visibility = 'hidden'; // Hide the list item
        }

        // Delayed action to remove skeleton loader and potentially add highlight class
        setTimeout(() => {
          // Smoothly fade in content
          child.style.transition = 'opacity 0.5s ease-in-out';
          child.style.opacity = '0'; // Start with opacity 0

          // Remove skeleton loader after delay
          setTimeout(() => {
            child.classList.remove('skeleton-loader');
            child.style.opacity = ''; // Reset opacity

            // Only add highlight class back if it initially had it
            if (hadHighlightClass) {
              child.classList.add('highlight');
            }

            // Smoothly fade in content
            setTimeout(() => {
              child.style.opacity = '1'; // Fade in by setting opacity to 1
            }, 50); // Add a small delay for smoother transition

            // Conditional handling for list items
            if (isListItem) {
              child.style.visibility = ''; // Show the list item
            }
          }, 500); // Adjust timing to match your skeleton loader animation duration
        }, 2500);

        // Remove highlight class from siblings that had it
        const siblings = Array.from(child.parentElement.children);
        siblings.forEach(sibling => {
          if (sibling !== child && sibling.classList.contains('highlight')) {
            sibling.classList.remove('highlight');
          }
        });
      }
    });
  });
});









