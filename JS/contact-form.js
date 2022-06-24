const email = document.querySelector('#e-mail');
const popForm = document.querySelector('.formPopup');
const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
  if (/[A-Z]/.test(email.value)) {
    popForm.style.display = 'flex';
  } else {
    popForm.style.display = 'none';
  }
});

submit.addEventListener('click', (event) => {
  if (/[A-Z]/.test(email.value)) {
    event.preventDefault();
  }
}, false);
