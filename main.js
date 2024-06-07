(function runCode() {
  document.addEventListener("DOMContentLoaded", async function () {
    // Executes after all DOM elements are loaded
  
    // DOM elements
    const nav = document.querySelector(".js-main-nav");
    const navBtn = nav.querySelector(".js-main-nav__icon-btn");
    const allNavLinksItems = nav.querySelectorAll(".js-main-nav-item a");
    const mainNavlinks = nav.querySelector(".js-main-nav__list");
    const mainNavHiddenlinks = nav.querySelector(".js-main-nav__hidden-list");
    const tooltip = nav.querySelector(".js-tooltip");
    const tooltipLinkCounter = nav.querySelector(".js-tooltip-link-counter");

  
    const cards = document.querySelectorAll(".js-card-reviews");
    const prevBtn = document.querySelector(".js-prevBtn");
    const nextBtn = document.querySelector(".js-nextBtn");
  
    const backToTopBtn = document.querySelector(".js-button__back-to-top");
    const form = document.querySelector(".js-form");
    const username = document.querySelector(".js-username");
    const email = document.querySelector(".js-email");
    const message = document.querySelector(".js-message");
    const phone = document.querySelector(".js-phone");
    const submitButton = document.querySelector(".js-submit");

    const copyrightYear = document.querySelector(".js-copyright-year");
    const currentYear = new Date().getFullYear();
    copyrightYear.innerText = currentYear;
  
    // Function to sanitize input values using DOMPurify
    function sanitizeInput(input) {
      return DOMPurify.sanitize(input.value.trim());
    }
  
    // Nav logic
  
    let numOfItems = 0;
    let totalSpace = 0;
    let breakWidths = [];
  
    // Get initial state
    Array.from(mainNavlinks.children).forEach(function (child) {
      let width = child.offsetWidth;
      totalSpace += width;
      numOfItems += 1;
      breakWidths.push(totalSpace);
    });
  
    let availableSpace, numOfVisibleItems, requiredSpace;
  
    const check = () => {
      // Get instant state
      availableSpace = mainNavlinks.clientWidth - 10;
      numOfVisibleItems = mainNavlinks.children.length;
      requiredSpace = breakWidths[Math.min(numOfVisibleItems, 5) - 1]; // Ensure we consider only up to 5 items
  
      // Move items to hidden links if there are more than 5 visible items
      while (numOfVisibleItems > 5) {
        mainNavHiddenlinks.insertBefore(
          mainNavlinks.children[mainNavlinks.children.length - 1],
          mainNavHiddenlinks.firstChild
        );
        numOfVisibleItems -= 1;
      }
  
      // There is not enough space
      if (requiredSpace > availableSpace) {
        if (mainNavlinks.children.length > 0) {
          mainNavHiddenlinks.insertBefore(
            mainNavlinks.children[numOfVisibleItems - 1],
            mainNavHiddenlinks.firstChild
          );
          numOfVisibleItems -= 1;
          check();
        }
      } else if (availableSpace > (breakWidths[numOfVisibleItems] || 0)) {
        if (mainNavHiddenlinks.children.length > 0) {
          mainNavlinks.appendChild(mainNavHiddenlinks.firstChild);
          numOfVisibleItems += 1;
          // Make sure not to exceed 5 visible items
          if (numOfVisibleItems > 5) {
            numOfVisibleItems -= 1;
            mainNavHiddenlinks.insertBefore(
              mainNavlinks.children[mainNavlinks.children.length - 1],
              mainNavHiddenlinks.firstChild
            );
          }
        }
      }
      // Update the button accordingly
      tooltipLinkCounter.setAttribute("count", numOfItems - numOfVisibleItems);
      if (numOfVisibleItems === numOfItems) {
        tooltipLinkCounter.classList.add("hidden");
      } else {
        tooltipLinkCounter.classList.remove("hidden");
      }

      // Update the button accordingly
      tooltipLinkCounter.setAttribute("count", numOfItems - numOfVisibleItems);
      if (numOfVisibleItems === numOfItems) {
        tooltipLinkCounter.classList.add("hidden");
      } else {
        tooltipLinkCounter.classList.remove("hidden");
      }
    };

    if ( numOfVisibleItems === 0) {
      tooltip.classList.add("hidden");
     } else {
       tooltip.classList.remove("hidden");
     }
  
    // Function to handle click event on navigation links
    function handleNavLinkClick(event) {
      // Remove the 'selected' class from all navigation links
      allNavLinksItems.forEach((link) => link.classList.remove("selected"));
  
      // Add the 'selected' class to the clicked link
      event.target.classList.add("selected");
    }
  
    // Attach click event listener to each navigation link
    allNavLinksItems.forEach((link) =>
      link.addEventListener("click", handleNavLinkClick)
    );
  
    // Card slider logic
  
    let currentIndex = 0;
  
    const showCard = (n) => {
      cards.forEach((card, index) => {
        card.style.display = index === n ? "block" : "none";
      });
  
      prevBtn.disabled = n === 0;
      nextBtn.disabled = n === cards.length - 1;
    };
  
    // Tab cards logic
  
    function handleTabClick(buttons, contents) {
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const tabId = button.getAttribute("data-tab");
  
          buttons.forEach((btn) => btn.classList.remove("tab-button--active"));
          contents.forEach((content) => {
            content.classList.remove("tab-content--active");
            content.hidden = true;
          });
  
          button.classList.add("tab-button--active");
          const activeContent = document.getElementById(tabId);
          activeContent.classList.add("tab-content--active");
          activeContent.hidden = false;
        });
      });
    }
  
    handleTabClick(
      document.querySelectorAll(".js-tabs-social .tab-button"),
      document.querySelectorAll(".js-tabs-social .tab-content")
    );
  
    handleTabClick(
      document.querySelectorAll(".js-tabs-skills .tab-button"),
      document.querySelectorAll(".js-tabs-skills .tab-content")
    );
  
    handleTabClick(
      document.querySelectorAll(".js-tab-samples .tab-button"),
      document.querySelectorAll(".js-tab-samples .tab-content")
    );
  
    // Back to the top button logic
  
    const scrollFunction = () => {
      if (window.pageYOffset > 20) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    };
  
    // Show input warnings messages
    function showWarning(input, message) {
      const formControl = input.parentElement;
      formControl.className = "form-control warning";
      const small = formControl.querySelector("small");
      small.innerText = message;
      updateSubmitButtonState();
    }
  
    // Clear warning messages
    function clearWarning(input) {
      const formControl = input.parentElement;
      formControl.className = "form-control";
      const small = formControl.querySelector("small");
      small.innerText = "";
    }
  
    // Show success color
    function showSuccess(input) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
      updateSubmitButtonState();
    }
  
    // Check email is valid
    function checkEmail(input) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const sanitizedValue = sanitizeInput(input);
      if (re.test(sanitizedValue)) {
        showSuccess(input);
      } else {
        showWarning(input, "Email is not valid");
      }
    }
  
    // Check required fields
    function checkRequired(inputArr) {
      inputArr.forEach(function (input) {
        const sanitizedValue = sanitizeInput(input);
        if (input.type !== "tel" && sanitizedValue === "") {
          showWarning(input, `${getFieldName(input)} is required`);
        } else {
          showSuccess(input);
        }
      });
    }
  
    // Check input length
    function checkLength(input, min, max) {
      const sanitizedValue = sanitizeInput(input);
      if (sanitizedValue.length < min) {
        showWarning(
          input,
          `${getFieldName(input)} must be at least ${min} characters`
        );
      } else if (sanitizedValue.length > max) {
        showWarning(
          input,
          `${getFieldName(input)} must be less than ${max} characters`
        );
      } else {
        showSuccess(input);
      }
    }
  
    // Get field name
    function getFieldName(input) {
      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }
  
    // Format phone number
    function formatPhone(input) {
      let cleaned = ("" + input.value).replace(/\D/g, "");
      if (cleaned.length > 10) {
        cleaned = cleaned.substring(0, 10);
      }
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        input.value = "(" + match[1] + ") " + match[2] + "-" + match[3];
        showSuccess(input);
      } else if (cleaned.length < 10) {
        showWarning(input, "Phone number must be 10 digits");
      } else {
        showWarning(input, "Invalid phone number");
      }
    }
  
    // Update submit button state
    function updateSubmitButtonState() {
      const warnings = document.querySelectorAll(".form-control.warning").length;
      const requiredFields = [username, email, message];
      const allFieldsFilled = requiredFields.every(
        (input) => sanitizeInput(input) !== ""
      );
      submitButton.disabled = warnings > 0 || !allFieldsFilled;
    }
  
    // Event listeners
    window.addEventListener("resize", check);
  
    navBtn.addEventListener("click", function () {
      mainNavHiddenlinks.classList.toggle("hidden");
      tooltip.classList.toggle("hidden");

      const icon = this.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// mobile hover experience

  navBtn.addEventListener('touchstart', function() {
    tooltip.classList.remove("hidden");
      if (tooltip) {
          tooltip.style.visibility = 'visible';
          tooltip.style.opacity = '1';
      }
  });
  navBtn.addEventListener('touchend', function() {
    tooltip.classList.add("hidden");
      if (tooltip) {
          tooltip.style.visibility = 'hidden';
          tooltip.style.opacity = '0';
      }
  });

    prevBtn.addEventListener("click", () => {
      currentIndex--;
      showCard(currentIndex);
    });
  
    nextBtn.addEventListener("click", () => {
      currentIndex++;
      showCard(currentIndex);
    });
  
    window.addEventListener("scroll", scrollFunction);
  
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    username.addEventListener("input", () => {
      checkLength(username, 3, 15);
      checkRequired([username]);
    });
  
    email.addEventListener("input", () => {
      checkEmail(email);
      checkRequired([email]);
    });
  
    phone.addEventListener("input", () => {
      if (phone.value === "") {
        clearWarning(phone);
      } else if (phone.value.replace(/\D/g, "").length === 10) {
        formatPhone(phone);
      } else {
        showWarning(phone, "Phone number must be 10 digits");
      }
    });
  
    message.addEventListener("input", () => {
      checkLength(message, 2, 400);
      checkRequired([message]);
    });
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      checkRequired([username, email, message]);
      checkLength(username, 3, 15);
      checkLength(message, 6, 400);
      checkEmail(email);
  
      const warnings = document.querySelectorAll(".form-control.warning").length;
      if (warnings === 0) {
        console.log("Form submitted");
      }
    });
  
    // Called functions
    check();
    showCard(currentIndex);
  });
  
})();
