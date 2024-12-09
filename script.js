const info = document.querySelectorAll('.info');
const btnShow = document.querySelectorAll('.open');
const btnHide = document.querySelectorAll('.close');

for (let i = 0; i < btnShow.length; i++) {
	// The function that enables the Info to Close
	const closeInfo = function() {
		info[i].classList.add('hidden');
		btnHide[i].classList.add('close');
		btnShow[i].style.display = 'block';
	};

	// The function that enables the Info to Open
	const showInfo = function() {
		console.log('Button clicked');
		info[i].classList.remove('hidden');
		btnHide[i].classList.remove('close');
		btnShow[i].style.display = 'none';
	};

	// When clicked the Info Open
	btnShow[i].addEventListener('click', showInfo);
	// When Clicked the Info Closes
	btnHide[i].addEventListener('click', closeInfo);
}
