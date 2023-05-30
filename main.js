window.addEventListener(
  "load",
  (event) => {
    renderListItems(COMMUNITIES, COMMUNITY_LIST);
    renderListItems(CLIENTS, CLIENTS_LIST);
    renderListItems(GRAPHIC_DESIGN, GRAPHIC_LIST);
    renderListItems(UX, UX_LIST);
    renderListItems(UI, UI_LIST);
    renderListItems(DEV, DEV_LIST);
  },
  false
);

/**
 * CONSTANTS
 * LISTS
 */

const CLIENTS = [
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
const COMMUNITIES = ["Tech901", "GiveCamp Memphis", "UX Mastery"];
const GRAPHIC_DESIGN = ["page layout"];
const UX = ["quantitative research", "analytics"];
const UI = ["sketch", "invision", "mockups", "color theory", "adobe xd"];
const DEV = [
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
// const SOFT_SKILLS = [""];

// ul list elements
const CLIENTS_LIST = document.getElementById("js-clients-list");
const COMMUNITY_LIST = document.getElementById("js-community-list");
const GRAPHIC_LIST = document.getElementById("js-graphic-list");
const UX_LIST = document.getElementById("js-ux-list");
const UI_LIST = document.getElementById("js-ui-list");
const DEV_LIST = document.getElementById("js-dev-list");
const SOFT_LIST = document.getElementById("js-soft-list");

// input elements
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const telField = document.getElementById("phone");
const subjectField = document.getElementById("subject");
const messageField = document.getElementById("message");

// util functions

function renderListItems(array, element) {
  for (item of array) {
    let li = document.createElement("li");
    li.innerHTML = item;
    li.classList.add("list-items");
    element.appendChild(li);
  }
}

// navigation
const navLinks = document.querySelectorAll(".nav-link-text");
const firstNavLink = document.querySelectorAll(".nav-items")[0];
const lastNavLink = document.querySelectorAll(".nav-items")[2];

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

const navHamburger = document.getElementById("nav-hamburger");
const closeNavBtn = document.getElementById("nav-closebtn");

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

function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

const maxLength = 5;
// Regular expression for alphabets and space

// form
const form = document.forms["contact"];
const nameInput = document.getElementById("name").value;
const subjectInput = document.getElementById("subject").value;
const emailInput = document.getElementById("email").value;
const telInput = document.getElementById("phone").value;
const messageInput = document.getElementById("message").value;

//error parent element
const nameErrorWrapper = document.getElementById("name-error-message");
const emailErrorWrpper = document.getElementById("email-error-message");
const phoneErrorWrapper = document.getElementById("phone-error-message");
const subjectErrorWrapper = document.getElementById("subject-error-message");
const messageErrorWrpper = document.getElementById("message-error-message");

const submitBtn = document.getElementById("submit");
const submitButtonCircle = document.querySelector("#submit-circle");
submitBtn.addEventListener("click", contact_submit, false);

function contact_submit(e) {
  // Stop Form From Submitting
  e.preventDefault();

  // Set Initial letiables
  let target = e.target || e.srcElement;
  let to = "corianoharris@gmail.com";
  let uri = "mailto:" + to;
  let body = "";

  // Build Body / Message with all Input Fields
  body += "Name: " + nameInput + "\xa0" + "\r\n";
  body += "Phone Number: " + telInput + "\r\n";
  body += message + "\r\n\r\n";

  // Build final Mailto URI
  uri += "from=" + encodeURIComponent(emailInput);
  uri += "?subject=" + encodeURIComponent(subjectInput);
  uri += "&body=" + encodeURIComponent(body);

  // Open Mailto in New Window / Tab
  window.open(uri, "_blank");
}

// Form validations

function validateEmail() {
  let emailInput = document.forms["contact"]["email"].value;
  const wrapper = document.getElementById("email-error-message");

  const liRegex = document.getElementById("error-email-regex");
  const liMaxLength = document.getElementById("error-email-length");
  const liEmpty = document.getElementById("error-email-empty");
  let emailRegex = /^[a-zA-Z][a-zA-Z0-9.]+@[a-zA-Z]{2,10}\.[a-zA-Z]{2,10}$/;

  const regexMessage =
    "Minimum of 2 characters before and after @ sign and minimum of 2 character after .";
  const maxLengthMessage = "Email should be less than 50 characters or less";
  const emptyMessage = "Email is required";

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

  if (emailInput.length > 50) {
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
}

const nameErrorMessage = document.getElementById("name-error-message");
const li = document.getElementById("name-errors");

// async function validateName() {
//   await validateRegex(nameRegex, messageRegex);
//   await validateMaxLength(messageMaxLength);
//   await validateEmptyInput(messageEmpty);
// }

/**
 *
 * @param {*} input
 * @param {*} regex
 * @param {*} errorElement
 * @param {*} message
 *
 * Util fns for validation
 */

const validateName = () => {
  let nameInput = document.forms["contact"]["fullname"].value;
  const wrapper = document.getElementById("name-error-message");

  const liRegex = document.getElementById("error-name-regex");
  const liMaxLength = document.getElementById("error-name-length");
  const liEmpty = document.getElementById("error-name-empty");

  const nameRegex = /^[a-zA-Z\s]+$/;

  const regexMessage = "Name can only contain alphabets and space";
  const maxLengthMessage = "Name should be 25 characters or less";
  const emptyMessage = "Name is required";

  let error;

  let regexText;
  let maxLengthText;
  let emptyText;

  if (!nameRegex.test(nameInput)) {
    error = true;
    regexText = regexMessage;
    liRegex.style.display = "block";
    wrapper.style.display = "block";
  } else {
    error = false;
    regexText = "";
    liRegex.style.display = "none";
    wrapper.style.display = "none";
  }

  if (nameInput.length > 25) {
    error = true;
    maxLengthText = maxLengthMessage;
    liMaxLength.style.display = "block";
    wrapper.style.display = "block";
  } else {
    error = false;
    maxLengthText = "";
    liMaxLength.style.display = "none";
    wrapper.style.display = "none";
  }

  if (nameInput.trim() === "") {
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

const validateSubject = () => {
  let subjectInput = document.forms["contact"]["subject"].value;
  const wrapper = document.getElementById("subject-error-message");

  const liRegex = document.getElementById("error-subject-regex");
  const liMaxLength = document.getElementById("error-subject-length");
  const liEmpty = document.getElementById("error-subject-empty");

  const subjectRegex = /^[a-zA-Z\s]+$/;

  const regexMessage = "Subject can only contain alphabets and space";
  const maxLengthMessage = "Subject should be 50 characters or less";
  const emptyMessage = "Subject is required";

  let error;

  let regexText;
  let maxLengthText;
  let emptyText;

  if (!subjectRegex.test(subjectInput)) {
    error = true;
    regexText = regexMessage;
    liRegex.style.display = "block";
  } else {
    error = false;
    regexText = "";
    liRegex.style.display = "none";
  }

  if (subjectInput.length > 25) {
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

const validateMessage = () => {
  let messageInput = document.forms["contact"]["message"].value;
  const wrapper = document.getElementById("message-error-message");

  const liRegex = document.getElementById("error-message-regex");
  const liMaxLength = document.getElementById("error-message-length");
  const liEmpty = document.getElementById("error-message-empty");

  const messageRegex = /^[a-zA-Z\s]+$/;

  const regexMessage = "Message can only contain alphabets and space";
  const maxLengthMessage = "Message should be 1000 characters or less";
  const emptyMessage = "Message is required";

  let error;

  let regexText;
  let maxLengthText;
  let emptyText;

  if (!messageRegex.test(messageInput)) {
    error = true;
    regexText = regexMessage;
    liRegex.style.display = "block";
  } else {
    error = false;
    regexText = "";
    liRegex.style.display = "none";
  }

  if (messageInput.length > 1000) {
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

const validatePhone = () => {
  const wrapper = document.getElementById("phone-error-message");
  const phone = document.getElementById("phone");
  let phoneInput = document.forms["contact"]["phone"].value.replace(
    /(\d{3})(\d{3})(\d{4})/,
    "$1-$2-$3"
  );
  const liMaxLength = document.getElementById("error-phone-length");
  const LiRegex = document.getElementById("error-name-regex");
  const phoneRegex = /^[0-9]*$/;

  // const phoneFormat = phoneInput.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

  phone.value = phoneInput;

  const maxLengthMessage = "MMust be 10 numbers";
  const regexMessage = "Phone can only contain numbers";

  let maxLengthText;
  let regexText;

  if (!phoneRegex.test(phoneInput)) {
    error = true;
    regexText = regexMessage;
    LiRegex.style.display = "block";
  } else {
    error = false;
    regexText = "";
    LiRegex.style.display = "none";
  }

  if (phoneInput.length > 10) {
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

// input event listeners

nameField.addEventListener("keydown", validateName, false);
nameField.removeEventListener("blur", validateName);

telField.addEventListener("keydown", validatePhone, false);
telField.removeEventListener("blur", validatePhone);

emailField.addEventListener("keydown", validateEmail, false);
emailField.removeEventListener("blur", validateEmail);

subjectField.addEventListener("keydown", validateSubject, false);
subjectField.removeEventListener("blur", validateSubject);

messageField.addEventListener("keydown", validateMessage, false);
messageField.removeEventListener("blur", validateMessage);

form.addEventListener(
  "input",
  () => {
    if (
      nameErrorWrapper.style.display === "block" ||
      emailErrorWrpper.style.display === "block" ||
      phoneErrorWrapper.style.display === "block" ||
      subjectErrorWrapper.style.display === "block" ||
      messageErrorWrpper.style.display === "block"
    ) {
      submitBtn.setAttribute("disabled", true);
      submitButtonCircle.style.backgroundColor = "#D3D3D3";
    } else {
      submitBtn.setAttribute("disabled", false);
      submitButtonCircle.style.backgroundColor = "#be3455";
    }
  },
  false
);

const copyrightYear = document.querySelector(".copyright-year");
copyrightYear.innerText = new Date().getFullYear();
