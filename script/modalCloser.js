const successClose1 = document.getElementById('close-modal-btn');
const successClose2 = document.getElementById('close-modal-big-btn');
const successModal = document.querySelector('.success-modal');

const errorClose1 = document.getElementById('close-modal-btn-error');
const errorClose2 = document.getElementById('close-modal-big-btn-error');
const errorModal = document.querySelector('.error-modal');

const blurBackDrop = document.querySelector('.blur-backdrop');

const startScroll = () => {
  successModal.style.display = 'none';
  errorModal.style.display = 'none';
  blurBackDrop.style.display = 'none';
  document.documentElement.style.overflowY = '';
};

const closeSuccessModal = () => {
  startScroll();
};

successClose1.addEventListener('click', closeSuccessModal);
successClose2.addEventListener('click', closeSuccessModal);

const closeErrorModal = () => {
  startScroll();
};

errorClose1.addEventListener('click', closeErrorModal);
errorClose2.addEventListener('click', closeErrorModal);
