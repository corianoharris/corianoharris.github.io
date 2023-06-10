(function () {
  const clients = [
    "Partcycle",
    "CodeCrew",
    "Dare Dream Dance",
    "C4 Atlanta",
    "Lauren Brynes Productions",
    "St. John’s Confidential File",
    "Juice Mound Memphis",
    "Navy Seals Foundation Memphis",
    "Sweet Cheeks Ministry",
  ];
  const communities = ["Tech901", "GiveCamp Memphis", "UX Mastery"];
  const graphicDesignKeywords = ["page layout"];
  const uxKeywords = ["quantitative research", "analytics"];
  const uiKeywords = [
    "sketch",
    "invision",
    "mockups",
    "color theory",
    "adobe xd",
  ];
  const devKeywords = [
    "sass",
    "ember.js",
    "next.js",
    "node.js",
    "docusaurus",
    "airtable",
    "restful api",
    "netlify",
    "AXE a11y scan",
    "pair programming",
    "cross browser testing",
  ];

  /**
   * Insert a if needed here...
   * const softKeywords
   * const SOFT_LIST = document.getElementById("js-soft-list");
   */

  // ul elements
  const clientsList = document.getElementById("js-clients-list");
  const communitiesList = document.getElementById("js-community-list");
  const graphicDesignKeywordsList = document.getElementById("js-graphic-list");
  const uxKeywordsList = document.getElementById("js-ux-list");
  const uiKeywordsList = document.getElementById("js-ui-list");
  const devKeywordsList = document.getElementById("js-dev-list");

  // input elements
  const NAME_FIELD = document.getElementById("name");
  const EMAIL_FIELD = document.getElementById("email");
  const PHONE_FIELD = document.getElementById("phone");
  const SUBJECT_FIELD = document.getElementById("subject");
  const MESSAGE_FIELD = document.getElementById("message");

  // navigation
  const navLinks = [].slice.call(document.querySelectorAll(".nav-items"));
  const firstNavLink = document.querySelectorAll(".nav-items")[0];
  const lastNavLink = document.querySelectorAll(".nav-items")[2];
  const navHamburger = document.getElementById("nav-hamburger");
  const closeNavBtn = document.getElementById("nav-closebtn");

  navLinks.forEach((link) => {
    link.addEventListener("click", closeNav, false);
  });

  function openNav() {
    document.getElementById("myNav").style.display = "block";
  }

  function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }

  // form fields
  const FORM = document.forms["contact"];
  const nameInput = document.getElementById("name").value;
  const subjectInput = document.getElementById("subject").value;
  const emailInput = document.getElementById("email").value;
  const phoneInput = document.getElementById("phone").value;
  const messageInput = document.getElementById("message").value;

  // error elemeents
  const nameError = document.getElementById("name-error-message");
  const emailError = document.getElementById("email-error-message");
  const phoneError = document.getElementById("phone-error-message");
  const subjectError = document.getElementById("subject-error-message");
  const messageError = document.getElementById("message-error-message");

  const submitBtn = document.getElementById("submit");

  // Form validations

  const validateEmailValue = () => {
    let emailInput = document.forms["contact"]["email"].value;
    const wrapper = document.getElementById("email-error-message");

    const liRegex = document.getElementById("error-email-regex");
    const liMaxLength = document.getElementById("error-email-length");
    const liEmpty = document.getElementById("error-email-empty");

    let emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z]{2,10}\.[a-zA-Z]{2,10}$/;

    const regexMessage = "- not contain spaces before or after the '@' symbol.";
    const maxLengthMessage = "- 50 characters or less";
    const emptyMessage = " - not be empty";

    let error;

    let regexText;
    let maxLengthText;
    let emptyText;

    if (!emailRegex.test(emailInput)) {
      error = true;
      regexText = regexMessage;
      liRegex.style.display = "block";
    } else {
      error = false;
      regexText = "";
      liRegex.style.display = "none";
    }

    if (emailInput.length >= 50) {
      error = true;
      maxLengthText = maxLengthMessage;
      liMaxLength.style.display = "block";
    } else {
      error = false;
      maxLengthText = "";
      liMaxLength.style.display = "none";
    }

    if (emailInput.trim() === "") {
      error = true;
      emptyText = emptyMessage;
      liEmpty.style.display = "block";
    } else {
      error = false;
      emptyText = "";
      liEmpty.style.display = "none";
    }

    if (
      liRegex.style.display === "block" ||
      liMaxLength.style.display === "block" ||
      liEmpty.style.display === "block"
    ) {
      wrapper.style.display = "block";
    } else wrapper.style.display = "none";

    liRegex.textContent = regexText;
    liMaxLength.textContent = maxLengthText;
    liEmpty.textContent = emptyText;
  };

  const validateNameValue = () => {
    let nameInput = document.forms["contact"]["fullname"].value;
    const wrapper = document.getElementById("name-error-message");

    const liRegex = document.getElementById("error-name-regex");
    const liMaxLength = document.getElementById("error-name-length");
    const liEmpty = document.getElementById("error-name-empty");
    const liNoSpaceAsFirstChar = document.getElementById(
      "error-name-no-space-as-first-char"
    );

    const nameRegex = /^[a-zA-Z\s]+$/;

    const noSpaceAsFirstChar = "- not start with a space";
    const regexMessage = "- only contain alphabets and spaces";
    const maxLengthMessage = "- be 25 characters or less";
    const emptyMessage = "- not be empty";

    let error;

    let noSpaceFirstCharText;
    let regexText;
    let maxLengthText;
    let emptyText;

    if (nameInput.indexOf(" ") === 0) {
      error = true;
      noSpaceFirstCharText = noSpaceAsFirstChar;
      liNoSpaceAsFirstChar.style.display = "block";
    } else {
      error = false;
      noSpaceFirstCharText = "";
      liNoSpaceAsFirstChar.style.display = "none";
    }

    if (!nameRegex.test(nameInput)) {
      error = true;
      regexText = regexMessage;
      liRegex.style.display = "block";
    } else {
      error = false;
      regexText = "";
      liRegex.style.display = "none";
    }

    if (nameInput.length >= 25) {
      error = true;
      maxLengthText = maxLengthMessage;
      liMaxLength.style.display = "block";
    } else {
      error = false;
      maxLengthText = "";
      liMaxLength.style.display = "none";
    }

    if (nameInput.trim() === "") {
      error = true;
      emptyText = emptyMessage;
      liEmpty.style.display = "block";
    } else {
      error = false;
      emptyText = "";
      liEmpty.style.display = "none";
    }

    if (
      liNoSpaceAsFirstChar.style.display === "block" ||
      liRegex.style.display === "block" ||
      liMaxLength.style.display === "block" ||
      liEmpty.style.display === "block"
    ) {
      wrapper.style.display = "block";
    } else wrapper.style.display = "none";

    liNoSpaceAsFirstChar.textContent = noSpaceFirstCharText;
    liRegex.textContent = regexText;
    liMaxLength.textContent = maxLengthText;
    liEmpty.textContent = emptyText;
  };

  const validateSubjectValue = () => {
    let subjectInput = document.forms["contact"]["subject"].value;
    const wrapper = document.getElementById("subject-error-message");

    const liRegex = document.getElementById("error-subject-regex");
    const liMaxLength = document.getElementById("error-subject-length");
    const liEmpty = document.getElementById("error-subject-empty");
    const liNoSpaceAsFirstChar = document.getElementById(
      "error-subject-no-space-as-first-char"
    );

    const subjectRegex = /^[a-z0-9]+([-_\s]{1}[a-z0-9]+)*$/i;

    const noSpaceAsFirstChar = " - not start with a space";
    const regexMessage = " - only contain alphanumeric characters and spaces";
    const maxLengthMessage = " - 50 characters or less";
    const emptyMessage = "- Subject can't be empty";

    let error;

    let noSpaceFirstCharText;
    let regexText;
    let maxLengthText;
    let emptyText;

    if (subjectInput.indexOf(" ") === 0) {
      error = true;
      noSpaceFirstCharText = noSpaceAsFirstChar;
      liNoSpaceAsFirstChar.style.display = "block";
    } else {
      error = false;
      noSpaceFirstCharText = "";
      liNoSpaceAsFirstChar.style.display = "none";
    }

    if (!subjectRegex.test(subjectInput)) {
      error = true;
      regexText = regexMessage;
      liRegex.style.display = "block";
    } else {
      error = false;
      regexText = "";
      liRegex.style.display = "none";
    }

    if (subjectInput.length >= 25) {
      error = true;
      maxLengthText = maxLengthMessage;
      liMaxLength.style.display = "block";
    } else {
      error = false;
      maxLengthText = "";
      liMaxLength.style.display = "none";
    }

    if (subjectInput.trim() === "") {
      error = true;
      emptyText = emptyMessage;
      liEmpty.style.display = "block";
      wrapper.style.display = "block";
    } else {
      error = false;
      emptyText = "";
      liEmpty.style.display = "none";
    }

    if (
      liNoSpaceAsFirstChar.style.display === "block" ||
      liRegex.style.display === "block" ||
      liMaxLength.style.display === "block" ||
      liEmpty.style.display === "block"
    ) {
      wrapper.style.display = "block";
    } else wrapper.style.display = "none";

    liNoSpaceAsFirstChar.textContent = noSpaceFirstCharText;
    liRegex.textContent = regexText;
    liMaxLength.textContent = maxLengthText;
    liEmpty.textContent = emptyText;
  };

  const validateMessageValue = () => {
    let messageInput = document.forms["contact"]["message"].value;
    const wrapper = document.getElementById("message-error-message");

    const liRegex = document.getElementById("error-message-regex");
    const liMaxLength = document.getElementById("error-message-length");
    const liEmpty = document.getElementById("error-message-empty");
    const liNoSpaceAsFirstChar = document.getElementById(
      "error-message-no-space-as-first-char"
    );

    const messageRegex = /^[a-z0-9]+([-_\s]{1}[a-z0-9]+)*$/i;

    const regexMessage = "- only contain alphanumeric characters and spaces";
    const maxLengthMessage = "- be 500 characters or less";
    const emptyMessage = "- not be empty";
    const noSpaceAsFirstChar = "- not start with a space";

    let error;

    let noSpaceFirstCharText;
    let regexText;
    let maxLengthText;
    let emptyText;

    if (messageInput.indexOf(" ") === 0) {
      error = true;
      noSpaceFirstCharText = noSpaceAsFirstChar;
      liNoSpaceAsFirstChar.style.display = "block";
    } else {
      error = false;
      noSpaceFirstCharText = "";
      liNoSpaceAsFirstChar.style.display = "none";
    }

    if (!messageRegex.test(messageInput)) {
      error = true;
      regexText = regexMessage;
      liRegex.style.display = "block";
    } else {
      error = false;
      regexText = "";
      liRegex.style.display = "none";
    }

    if (messageInput.length >= 500) {
      error = true;
      maxLengthText = maxLengthMessage;
      liMaxLength.style.display = "block";
    } else {
      error = false;
      maxLengthText = "";
      liMaxLength.style.display = "none";
    }

    if (messageInput.trim() === "") {
      error = true;
      emptyText = emptyMessage;
      liEmpty.style.display = "block";
      wrapper.style.display = "block";
    } else {
      error = false;
      emptyText = "";
      liEmpty.style.display = "none";
    }

    if (
      liNoSpaceAsFirstChar.style.display === "block" ||
      liRegex.style.display === "block" ||
      liMaxLength.style.display === "block" ||
      liEmpty.style.display === "block"
    ) {
      wrapper.style.display = "block";
    } else wrapper.style.display = "none";

    liNoSpaceAsFirstChar.textContent = noSpaceFirstCharText;
    liRegex.textContent = regexText;
    liMaxLength.textContent = maxLengthText;
    liEmpty.textContent = emptyText;
  };

  const validatePhoneValue = () => {
    const wrapper = document.getElementById("phone-error-message");
    let phone = document.getElementById("phone");
    let phoneFormat = document.forms["contact"]["phone"].value.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3"
    );

    const liMaxLength = document.getElementById("error-phone-length");
    const LiRegex = document.getElementById("error-phone-regex");
    const phoneRegex = /^(?=.*[0-9])[- +()0-9]+$/;

    const maxLengthMessage = "- contain 10 numbers";
    const regexMessage = "- only contain numbers";

    phone.value = phoneFormat;

    let maxLengthText;
    let regexText;

    if (!phoneRegex.test(phoneFormat)) {
      error = true;
      regexText = regexMessage;
      LiRegex.style.display = "block";
    } else {
      error = false;
      regexText = "";
      LiRegex.style.display = "none";
    }

    if (phoneFormat.length > 14 || phoneFormat.length < 14) {
      error = true;
      maxLengthText = maxLengthMessage;
      liMaxLength.style.display = "block";
    } else {
      error = false;
      maxLengthText = "";
      liMaxLength.style.display = "none";
    }

    if (
      liMaxLength.style.display === "block" ||
      LiRegex.style.display === "block"
    ) {
      wrapper.style.display = "block";
    } else wrapper.style.display = "none";

    liMaxLength.textContent = maxLengthText;
    LiRegex.textContent = regexText;
  };

  const postFormDataToEmailClient = (e) => {
    e.preventDefault();
    // get form field values
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // Set Initial values
    let to = "corianoharris@gmail.com";
    let uri = "mailto:" + to;
    let body = "";

    // Build Body / Message with all Input Fields
    body += "Name: " + name + "\xa0" + "\r\n";
    body += "Phone Number: " + phone + "\r\n";
    body += "\r\n\r\n" + message;

    // Build final Mailto URI
    uri += "?subject=" + encodeURIComponent(subject);
    uri += "&body=" + encodeURIComponent(body);

    // Open Mailto in New Window / Tab
    window.open(uri, "_blank");

    //reset form
    FORM.reset();
  };

  const copyrightYear = document.querySelector(".copyright-year");
  copyrightYear.innerText = new Date().getFullYear();

  // UTILS

  const displayListOfKeywords = (array, element) => {
    for (item of array) {
      let li = document.createElement("li");
      li.innerHTML = item;
      li.classList.add("list-items");
      element.appendChild(li);
    }
  };

  // EVENT LISTENERS

  window.addEventListener(
    "load",
    () => {
      displayListOfKeywords(communities, communitiesList);
      displayListOfKeywords(clients, clientsList);
      displayListOfKeywords(graphicDesignKeywords, graphicDesignKeywordsList);
      displayListOfKeywords(uxKeywords, uxKeywordsList);
      displayListOfKeywords(uiKeywords, uiKeywordsList);
      displayListOfKeywords(devKeywords, devKeywordsList);
    },
    false
  );

  // nav

  firstNavLink.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.key === "Tab") {
      lastNavLink.focus();
    }
  });

  lastNavLink.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      firstNavLink.focus();
    }
  });

  navHamburger.addEventListener(
    "click",
    () => {
      openNav();
    },
    false
  );

  closeNavBtn.addEventListener(
    "click",
    () => {
      closeNav();
    },
    false
  );

  // form

  // form default button state
  window.addEventListener("DOMContentLoaded", () => {
    submitBtn.style.backgroundColor = "#D3D3D3";
    submitBtn.style.cursor = "none";
  });

  FORM.addEventListener(
    "input",
    () => {
      if (
        nameError.style.display === "block" ||
        emailError.style.display === "block" ||
        phoneError.style.display === "block" ||
        subjectError.style.display === "block" ||
        messageError.style.display === "block"
      ) {
        submitBtn.setAttribute("disabled", true);
        submitBtn.style.backgroundColor = "#D3D3D3";
        submitBtn.style.color = "#be3455";
      } else {
        submitBtn.removeAttribute("disabled");
        submitBtn.style.backgroundColor = "#be3455";
        submitBtn.style.color = "white";
      }
    },
    false
  );

  submitBtn.addEventListener("click", postFormDataToEmailClient, false);

  NAME_FIELD.addEventListener("keydown", validateNameValue, false);
  NAME_FIELD.removeEventListener("blur", validateNameValue);

  PHONE_FIELD.addEventListener("keydown", validatePhoneValue, false);
  PHONE_FIELD.removeEventListener("blur", validatePhoneValue);

  EMAIL_FIELD.addEventListener("keydown", validateEmailValue, false);
  EMAIL_FIELD.removeEventListener("blur", validateEmailValue);

  SUBJECT_FIELD.addEventListener("keydown", validateSubjectValue, false);
  SUBJECT_FIELD.removeEventListener("blur", validateSubjectValue);

  MESSAGE_FIELD.addEventListener("keydown", validateMessageValue, false);
  MESSAGE_FIELD.removeEventListener("blur", validateMessageValue);
})();
