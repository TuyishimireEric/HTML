const emailForm = document.querySelector('#e-mail');
const popupForm = document.querySelector('.formPopup');
const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
  if (/[A-Z]/.test(emailForm.value)) {
    popupForm.style.display = 'flex';
  } else {
    popupForm.style.display = 'none';
  }
});

submit.addEventListener('click', (event) => {
  if (/[A-Z]/.test(emailForm.value)) {
    event.preventDefault();
  }
}, false);
