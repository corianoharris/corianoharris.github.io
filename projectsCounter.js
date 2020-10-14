window.addEventListener(
	'DOMContentLoaded',
	function () {
		allCounter(),
			uxCounter(),
			uiCounter(),
			appsCounter(),
			designsCounter(),
			talksCounter();
		console.log('upload first');
	},
	false
);

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
