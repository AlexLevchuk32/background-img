'use strict';

const uploadBtn = document.querySelector('.form__btn-uppload');
const applydBtn = document.querySelector('.form__btn-apply');
const imgInput = document.querySelector('#img-input');

let img = '';

imgInput.addEventListener('change', (elem) => {
	img = elem.target.files[0];
	applydBtn.disabled = false;
});

uploadBtn.addEventListener('click', () => {
	imgInput.click();
});

applydBtn.addEventListener('click', () => {
	if (img == '') return;

	const reader = new FileReader();

	reader.onload = (elem) => {
		document.querySelector(
			'body',
		).style.backgroundImage = `url(${elem.target.result})`;
	};
	reader.readAsDataURL(img);
});
