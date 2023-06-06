window.addEventListener(
  "load",
  () => {
    renderListItems(communitiesISupport, communitiesISupportList);
    renderListItems(CLIENTS, clientsList);
    renderListItems(graphicDesignSkills, graphicDesignSkillsList);
    renderListItems(uxSkills, uxSkillsList);
    renderListItems(uiSkills, uiSkillsList);
    renderListItems(devSkills, devSkillsList);
  },
  false
);

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
const communitiesISupport = ["Tech901", "GiveCamp Memphis", "UX Mastery"];
const graphicDesignSkills = ["page layout"];
const uxSkills = ["quantitative research", "analytics"];
const uiSkills = ["sketch", "invision", "mockups", "color theory", "adobe xd"];
const devSkills = [
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
 * const SOFT_SKILLS
 * const SOFT_LIST = document.getElementById("js-soft-list");
 */

// ul elements
const clientsList = document.getElementById("js-clients-list");
const communitiesISupportList = document.getElementById("js-community-list");
const graphicDesignSkillsList = document.getElementById("js-graphic-list");
const uxSkillsList = document.getElementById("js-ux-list");
const uiSkillsList = document.getElementById("js-ui-list");
const devSkillsList = document.getElementById("js-dev-list");

// input elements
const NAME_FIELD = document.getElementById("name");
const EMAIL_FIELD = document.getElementById("email");
const PHONE_FIELD = document.getElementById("phone");
const SUBJECT_FIELD = document.getElementById("subject");
const MESSAGE_FIELD = document.getElementById("message");

// navigation
const navLinks = document.querySelectorAll(".nav-link-text");
const firstNavLink = document.querySelectorAll(".nav-items")[0];
const lastNavLink = document.querySelectorAll(".nav-items")[2];
const navHamburger = document.getElementById("nav-hamburger");
const closeNavBtn = document.getElementById("nav-closebtn");

function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

// form
const FORM = document.forms["contact"];
const nameInput = document.getElementById("name").value;
const subjectInput = document.getElementById("subject").value;
const emailInput = document.getElementById("email").value;
const telInput = document.getElementById("phone").value;
const messageInput = document.getElementById("message").value;

// error parent element
const nameErrorWrapper = document.getElementById("name-error-message");
const emailErrorWrpper = document.getElementById("email-error-message");
const phoneErrorWrapper = document.getElementById("phone-error-message");
const subjectErrorWrapper = document.getElementById("subject-error-message");
const messageErrorWrpper = document.getElementById("message-error-message");
const submitBtn = document.getElementById("submit");
const submitButtonCircle = document.querySelector("#submit-circle");
const nameErrorMessage = document.getElementById("name-error-message");
const li = document.getElementById("name-errors");

// Form validations

const validateEmail = () => {
  let emailInput = document.forms["contact"]["email"].value;
  const wrapper = document.getElementById("email-error-message");

  const liRegex = document.getElementById("error-email-regex");
  const liMaxLength = document.getElementById("error-email-length");
  const liEmpty = document.getElementById("error-email-empty");

  let emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z]{2,10}\.[a-zA-Z]{2,10}$/;

  const regexMessage =
    "Minimum of 2 characters before and after @ sign and minimum of 2 character after.";
  const maxLengthMessage = "Email should be less than 50 characters or less";
  const emptyMessage = "Email can't be empty";

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

const validateName = () => {
  let nameInput = document.forms["contact"]["fullname"].value;
  const wrapper = document.getElementById("name-error-message");

  const liRegex = document.getElementById("error-name-regex");
  const liMaxLength = document.getElementById("error-name-length");
  const liEmpty = document.getElementById("error-name-empty");
  const liNoSpaceAsFirstChar = document.getElementById(
    "error-name-no-space-as-first-char"
  );

  const nameRegex = /^[a-zA-Z\s]+$/;

  const noSpaceAsFirstChar = "Name can't start with a space";
  const regexMessage = "Name can only contain alphabets and spaces";
  const maxLengthMessage = "Name should be 25 characters or less";
  const emptyMessage = "Name can't be empty";

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

const validateSubject = () => {
  let subjectInput = document.forms["contact"]["subject"].value;
  const wrapper = document.getElementById("subject-error-message");

  const liRegex = document.getElementById("error-subject-regex");
  const liMaxLength = document.getElementById("error-subject-length");
  const liEmpty = document.getElementById("error-subject-empty");
  const liNoSpaceAsFirstChar = document.getElementById(
    "error-subject-no-space-as-first-char"
  );

  const subjectRegex = /^[a-z0-9]+([-_\s]{1}[a-z0-9]+)*$/i;

  const noSpaceAsFirstChar = "Subject can't start with a space";
  const regexMessage =
    "Subject can only contain alphanumeric characters and spaces";
  const maxLengthMessage = "Subject should be 50 characters or less";
  const emptyMessage = "Subject can't be empty";

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

const validateMessage = () => {
  let messageInput = document.forms["contact"]["message"].value;
  const wrapper = document.getElementById("message-error-message");

  const liRegex = document.getElementById("error-message-regex");
  const liMaxLength = document.getElementById("error-message-length");
  const liEmpty = document.getElementById("error-message-empty");
  const liNoSpaceAsFirstChar = document.getElementById(
    "error-message-no-space-as-first-char"
  );

  const messageRegex = /^[a-z0-9]+([-_\s]{1}[a-z0-9]+)*$/i;

  const regexMessage =
    "Message can only contain alphanumeric characters and spaces";
  const maxLengthMessage = "Message should be 500 characters or less";
  const emptyMessage = "Message can't be empty";
  const noSpaceAsFirstChar = "Message can't start with a space";

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

const validatePhone = () => {
  const wrapper = document.getElementById("phone-error-message");
  let phone = document.getElementById("phone");
  let phoneFormat = document.forms["contact"]["phone"].value.replace(
    /(\d{3})(\d{3})(\d{4})/,
    "($1) $2-$3"
  );

  const liMaxLength = document.getElementById("error-phone-length");
  const LiRegex = document.getElementById("error-phone-regex");
  const phoneRegex = /^(?=.*[0-9])[- +()0-9]+$/;

  // const phoneFormat = phoneInput.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

  const maxLengthMessage = "Max numbers is 10";
  const regexMessage = "Phone can only contain numbers";

  console.log(phone.value.length);

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

  if (phoneFormat.length >= 14) {
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

const contact_submit = (e) => {
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
};

const copyrightYear = document.querySelector(".copyright-year");
copyrightYear.innerText = new Date().getFullYear();

// UTILS

const renderListItems = (array, element) => {
  for (item of array) {
    let li = document.createElement("li");
    li.innerHTML = item;
    li.classList.add("list-items");
    element.appendChild(li);
  }
};

// EVENT LISTENERS

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

FORM.addEventListener(
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

NAME_FIELD.addEventListener("keydown", validateName, false);
NAME_FIELD.removeEventListener("blur", validateName);

PHONE_FIELD.addEventListener("keydown", validatePhone, false);
PHONE_FIELD.removeEventListener("blur", validatePhone);

EMAIL_FIELD.addEventListener("keydown", validateEmail, false);
EMAIL_FIELD.removeEventListener("blur", validateEmail);

SUBJECT_FIELD.addEventListener("keydown", validateSubject, false);
SUBJECT_FIELD.removeEventListener("blur", validateSubject);

MESSAGE_FIELD.addEventListener("keydown", validateMessage, false);
MESSAGE_FIELD.removeEventListener("blur", validateMessage);

submitBtn.addEventListener("click", contact_submit, false);
