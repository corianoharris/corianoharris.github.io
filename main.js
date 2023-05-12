const navLinks = document.querySelectorAll(".nav-link-text");
const firstNavLink = document.querySelectorAll(".nav-items")[0];
const lastNavLink = document.querySelectorAll(".nav-items")[2];
const titles = document.querySelectorAll(".title");

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

  console.log(name);

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
