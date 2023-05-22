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

// form
const form = document.forms["contact"];

if (form) {
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", contact_submit, false);
}

function contact_submit(e) {
  // Stop Form From Submitting
  e.preventDefault();

  // Set Initial Variables
  var target = e.target || e.srcElement;
  var to = "corianoharris@gmail.com";
  var uri = "mailto:" + to;
  var body = "";

  // Set Form Values to Variables
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var email = document.getElementById("email").value;
  var tel = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Build Body / Message with all Input Fields
  body += "Name: " + name + "\xa0" + "\r\n";
  body += "Phone Number: " + tel + "\r\n";
  body += message + "\r\n\r\n";

  // Build final Mailto URI
  uri += "from=" + encodeURIComponent(email);
  uri += "?subject=" + encodeURIComponent(subject);
  uri += "&body=" + encodeURIComponent(body);

  // Open Mailto in New Window / Tab
  window.open(uri, "_blank");
}

const copyrightYear = document.querySelector(".copyright-year");
copyrightYear.innerText = new Date().getFullYear();
