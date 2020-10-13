const navMenu = document.getElementById('js-nav');

const navDisplayBtn = document.getElementById('js-displayNavBtn');
const navCollapseBtn = document.getElementById('js-collapseNavBtn');

const theme = document.getElementById('js-themeChanger');
//Check local storage for theme, and set the class or not
const isLightThemeEnabled = localStorage.getItem('light-theme-enabled');

const form = document.forms['contact'];

/* Projects */

const allCounter = () => {
	let allCounter = document.querySelectorAll('.filterItem');
	document.getElementById('all-counter').innerHTML = allCounter.length;
};

const uxCounter = () => {
	let uxCounter = document.querySelectorAll('.card-ux');
	document.querySelector('.ux-counter').innerHTML = uxCounter.length;
};

const uiCounter = () => {
	let uiCounter = document.querySelectorAll('.card-ui');
	document.querySelector('.ui-counter').innerHTML = uiCounter.length;
};

const appsCounter = () => {
	let appsCounter = document.querySelectorAll('.card-apps');
	document.querySelector('.apps-counter').innerHTML =
		appsCounter.length;
};

const designsCounter = () => {
	let designsCounter = document.querySelectorAll('.card-designs');
	document.querySelector('.designs-counter').innerHTML =
		designsCounter.length;
};

const talksCounter = () => {
	let talksCounter = document.querySelectorAll('.card-talks');
	document.querySelector('.talks-counter').innerHTML =
		talksCounter.length;
};

// Nav Open & Close

let displayNav = () => {
	document.getElementById('js-nav').style.display = 'block';
};

let collapseNav = () => {
	document.getElementById('js-nav').style.display = 'none';
};

// Change Theme
if (theme) {
	theme.addEventListener(
		'click',
		function () {
			let lightThemeEnabled = document.body.classList.toggle(
				't-secondary'
			);
			localStorage.setItem('light-theme-enabled', lightThemeEnabled);
			collapseNav();
		},
		false
	);
}

if (isLightThemeEnabled === 'true') {
	document.body.classList.add('t-secondary');
}

// Project Card

// Project 1

let displayProjectOne = () => {
	document.getElementById('js-projectOne').style.display = 'block';
};

let collapseProjectOne = () => {
	document.getElementById('js-projectOne').style.display = 'none';
};

// Project 2

let displayProjectTwo = () => {
	document.getElementById('js-projectTwo').style.display = 'block';
};

let collapseProjectTwo = () => {
	document.getElementById('js-projectTwo').style.display = 'none';
};

// Project 3

let displayProjectThree = () => {
	document.getElementById('js-projectThree').style.display = 'block';
};

let collapseProjectThree = () => {
	document.getElementById('js-projectThree').style.display = 'none';
};

// Project 4

let displayProjectFour = () => {
	document.getElementById('js-projectFour').style.display = 'block';
};

let collapseProjectFour = () => {
	document.getElementById('js-projectFour').style.display = 'none';
};

// Project 5

let displayProjectFive = () => {
	document.getElementById('js-projectFive').style.display = 'block';
};

let collapseProjectFive = () => {
	document.getElementById('js-projectFive').style.display = 'none';
};

// Project 6

let displayProjectSix = () => {
	document.getElementById('js-projectSix').style.display = 'block';
};

let collapseProjectSix = () => {
	document.getElementById('js-projectSix').style.display = 'none';
};

// Project 7

let displayProjectSeven = () => {
	document.getElementById('js-projectSeven').style.display = 'block';
};

let collapseProjectSeven = () => {
	document.getElementById('js-projectSeven').style.display = 'none';
};

// Project 8

let displayProjectEight = () => {
	document.getElementById('js-projectEight').style.display = 'block';
};

let collapseProjectEight = () => {
	document.getElementById('js-projectEight').style.display = 'none';
};

// Project 9

let displayProjectNine = () => {
	document.getElementById('js-projectNine').style.display = 'block';
};

let collapseProjectNine = () => {
	document.getElementById('js-projectNine').style.display = 'none';
};

// Filter

const filter = document.getElementById('filter');

if (filter) {
	//Filter fn

	function filterSelection(c) {
		var thumbnailCard, i;
		thumbnailCard = document.getElementsByClassName('filterItem');
		if (c == 'c-pills-all') c = '';
		for (i = 0; i < thumbnailCard.length; i++) {
			removeThumbnailCard(thumbnailCard[i], 'show');
			if (thumbnailCard[i].className.indexOf(c) > -1)
				showThumbnailCard(thumbnailCard[i], 'show');
		}
	}

	filterSelection('c-pills-all');

	function showThumbnailCard(element, name) {
		var i, arr1, arr2;
		arr1 = element.className.split(' ');
		arr2 = name.split(' ');
		for (i = 0; i < arr2.length; i++) {
			if (arr1.indexOf(arr2[i]) == -1) {
				element.className += ' ' + arr2[i];
			}
		}
	}

	function removeThumbnailCard(element, name) {
		var i, arr1, arr2;
		arr1 = element.className.split(' ');
		arr2 = name.split(' ');
		for (i = 0; i < arr2.length; i++) {
			while (arr1.indexOf(arr2[i]) > -1) {
				arr1.splice(arr1.indexOf(arr2[i]), 1);
			}
		}
		element.className = arr1.join(' ');
	}

	// Add active class to the current button (highlight it)
}

const btns = document.getElementsByClassName('js-btn');

if (btns) {
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function () {
			var current = document.getElementsByClassName('active');
			current[0].className = current[0].className.replace(
				' active',
				''
			);
			this.classList += ' active';
		});
	}
}

//Form fn

/* Contact Form */

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
	var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
	var subject = document.getElementById('subject').value;
	var email = document.getElementById('email').value;
	var tel = document.getElementById('tel').value;
	var message = document.getElementById('message').value;
	// var lastname = target.elements["lastname"].value;
	// var subject = target.elements["subject"].value;
	// var email = target.elements["email"].value;
	// var tel = target.elements["tel"].value;
	// var message = target.elements["message"].value;

	console.log(firstname);

	// Build Body / Message with all Input Fields
	body += 'Name: ' + firstname + '\xa0' + lastname + '\r\n';
	body += 'Phone Number: ' + tel + '\r\n';
	body += message + '\r\n\r\n';

	// Build final Mailto URI
	// uri += "from=" + encodeURIComponent(email);
	uri += '?subject=' + encodeURIComponent(subject);
	uri += '&body=' + encodeURIComponent(body);

	// Open Mailto in New Window / Tab
	window.open(uri, '_blank');
	alert('Message created for submission.');
}

// Top Btn Scroll

//Get the button
const scrollBtn = document.getElementById('scrollToTopBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunctionBtn();
};

function scrollFunctionBtn() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		scrollBtn.style.display = 'block';
	} else {
		scrollBtn.style.display = 'none';
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// Projects Counter

// const projectsCounter = () => {
// 	allCounter(),
// 		uxCounter(),
// 		uiCounter(),
// 		appsCounter(),
// 		designsCounter(),
// 		talksCounter();
// };

// // Scroll and change content when It reaches the end of the section
// let section = document.querySelectorAll(".c-section__content");
// let bodyText = document.querySelectorAll(".content");

// for (var i; i < section.length; i++) {
//   section[i].addEventListener(
//     "scroll",
//     function () {
//       if (section[i].scrollTop > 50) {
//         bodyText[i].classList = "greyed-text";
//       }

//       if (
//         section[i].scrollTop < 50 ||
//         document.documentElement.scrollTop < 50
//       ) {
//         bodyText[i].classList.remove = "greyed-text";
//       }
//     },
//     false
//   );
// }
