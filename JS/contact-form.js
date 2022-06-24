const emailForm = document.querySelector('#e-mail');
const popupForm = document.querySelector('.formPopup');
const submit = document.querySelector('#submit');

emailForm.addEventListener('input', () => {
  if (/[A-Z]/.test(emailForm.value)) {
    popupForm.style.display = 'block';
  } else {
    popupForm.style.display = 'none';
  }
});

submit.addEventListener('click', (event) => {
  if (/[A-Z]/.test(emailForm.value)) {
    event.preventDefault();
  }
}, false);
