const emailForm = document.querySelector('.e-mail');
const popUpForm = document.querySelector('.form-popup');
const submit = document.querySelector('.submit');

emailForm.addEventListener('input', () => {
  if (/[A-Z]/.test(emailForm.value)) {
    popUpForm.style.display = 'block';
  } else {
    popUpForm.style.display = 'none';
  }
});
submit.addEventListener('click', (event) => {
  if (/[A-Z]/.test(emailForm.value)) {
    event.preventDefault();
  }
}, false);
