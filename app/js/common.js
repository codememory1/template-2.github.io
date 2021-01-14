let openModal = document.querySelector('.navigation__item.auth');
let closeModal = document.querySelector('.modal__close');
let modal = document.querySelector('.modal');

openModal.onclick = () => {
	modal.classList.add('active');

	document.body.style.overflow = 'hidden';
};

closeModal.onclick = () => {
	modal.classList.remove('active');

	document.body.style.overflow = 'auto';
};