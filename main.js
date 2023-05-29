window.addEventListener("load", (event) => {
  renderListItems(COMMUNITIES, COMMUNITY_LIST);
  renderListItems(CLIENTS, CLIENTS_LIST);
  renderListItems(GRAPHIC_DESIGN, GRAPHIC_LIST);
  renderListItems(UX, UX_LIST);
  renderListItems(UI, UI_LIST);
  renderListItems(DEV, DEV_LIST);
});

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
const textMessageField = document.getElementById("message");

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

if (form) {
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", contact_submit, false);
}

function contact_submit(e) {
  // Stop Form From Submitting
  e.preventDefault();

  // if (!validateRegex(nameInput, nameRegex, nameErrorMessage, messageRegex)) {
  //   return; // Exit if any validation fails
  // }

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

// name

// function validateName() {
//   let nameRegex = /^[a-zA-Z\s]+$/; // Regular expression for alphabets and space
//   let maxLength = 30;
//   const nameErrorMessage = document.getElementById("name-error-message");

//   if (nameInput.trim() === "") {
//     nameErrorMessage.innerHTML = "Name is required";
//     nameErrorMessage.style.display = "block";
//   } else nameErrorMessage.style.display = "none";

//   if (!nameRegex.test(nameInput)) {
//     nameErrorMessage.innerHTML = "Name can only contain alphabets and space";
//     nameErrorMessage.style.display = "block";
//   } else nameErrorMessage.style.display = "none";

//   if (nameInput.length > maxLength) {
//     nameErrorMessage.innerHTML = "Name should be less than 20 characters";
//     nameErrorMessage.style.display = "block";
//   } else nameErrorMessage.style.display = "none";
// }

// function validateTel() {
//   let nameRegex = /^[a-zA-Z\s]+$/; // Regular expression for alphabets and space
//   let maxLength = 10;
//   const nameErrorMessage = document.getElementById("name-error-message");

//   if (nameInput.trim() === "") {
//     nameErrorMessage.innerHTML = "Name is required";
//     nameErrorMessage.style.display = "block";
//   } else nameErrorMessage.style.display = "none";

//   if (!nameRegex.test(nameInput)) {
//     nameErrorMessage.innerHTML = "Name can only contain alphabets and space";
//     nameErrorMessage.style.display = "block";
//   } else nameErrorMessage.style.display = "none";

//   if (nnameInput.length > maxLength) {
//     nameErrorMessage.innerHTML = "Name should be 10 numbers";
//     nameErrorMessage.style.display = "block";
//   } else nameErrorMessage.style.display = "none";
// }

function validateEmail() {
  let emailInput = document.forms["contact"]["email"].value;
  console.log(emailInput);
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

  const liName = document.getElementById("error-name-regex");
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
    liName.style.display = "block";
    wrapper.style.display = "block";
  } else {
    error = false;
    regexText = "";
    liName.style.display = "none";
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
    liName.style.display === "block" ||
    liMaxLength.style.display === "block" ||
    liEmpty.style.display === "block"
  ) {
    wrapper.style.display = "block";
  } else wrapper.style.display = "none";

  liName.textContent = regexText;
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

nameField.addEventListener("input", validateName, false);
nameField.removeEventListener("blur", validateName);

telField.addEventListener("input", validatePhone, false);
telField.removeEventListener("blur", validatePhone);

emailField.addEventListener("input", validateEmail, false);
emailField.removeEventListener("blur", validateEmail);

// if (nameInput.trim() < nameInput) {
//   nameErrorMessage.style.display = "none";
// }

const copyrightYear = document.querySelector(".copyright-year");
copyrightYear.innerText = new Date().getFullYear();
