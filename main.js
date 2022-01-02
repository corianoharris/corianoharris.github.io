
const navLinks = document.querySelectorAll(".nav-item");
const firstNavLink = document.querySelectorAll(".nav-item")[0];
const lastNavLink = document.querySelectorAll(".nav-item")[2];
const titles = document.querySelectorAll(".title");


firstNavLink.addEventListener('keydown', (e) => {
	if(e.shiftKey && e.key === 'Tab') {
		lastNavLink.focus();
	}
})

lastNavLink.addEventListener('keydown', (e) => {
	if(e.key === 'Tab') {
		firstNavLink.focus();
	}
})

const navLinksContainer = document.querySelector(".nav-items");
const navIcon = document.querySelector(".nav-icon");

navIcon.addEventListener('click', () => {
 navLinksContainer.classList.toggle("hidden");
	for ( let i = 0; i < titles.length; i++) {
		titles[i].classList.toggle("paddingNone");
	}	
 })

const form = document.forms['contact'];

if (form) {
	const submitBtn = document.getElementById('submit');
	submitBtn.addEventListener('click', contact_submit, false);
}

function contact_submit(e) {
	// Stop Form From Submitting
	e.preventDefault();

	// Set Initial Variables
	var target = e.target || e.srcElement;
	var to = 'corianoharris@gmail.com';
	var uri = 'mailto:' + to;
	var body = '';

	// Set Form Values to Variables
	var name = document.getElementById('name').value;
	var subject = document.getElementById('subject').value;
	var email = document.getElementById('email').value;
	var tel = document.getElementById('phone').value;
	var message = document.getElementById('message').value;

	console.log(name);

	// Build Body / Message with all Input Fields
	body += 'Name: ' + name + '\xa0' + '\r\n';
	body += 'Phone Number: ' + tel + '\r\n';
	body += message + '\r\n\r\n';

	// Build final Mailto URI
	uri += "from=" + encodeURIComponent(email);
	uri += '?subject=' + encodeURIComponent(subject);
	uri += '&body=' + encodeURIComponent(body);

	// Open Mailto in New Window / Tab
	window.open(uri, '_blank');
}

const copyrightYear = document.querySelector('.copyright-year');
copyrightYear.innerText = new Date().getFullYear();

const divMe = document.querySelector("#me");
const divWork = document.querySelector("#work");
const divContact = document.querySelector("#contact");

