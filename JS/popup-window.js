// eslint-disable-next-line no-unused-vars
function showMenu() {
  document.querySelector('.navigation').classList.toggle('active');
  document.querySelector('.menu-list').classList.toggle('active');
}

// eslint-disable-next-line no-unused-vars
function hideMenu() {
  document.querySelector('.navigation.active').classList.remove('active');
  document.querySelector('.menu-list.active').classList.remove('active');
}

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal0) {
  if (modal0 == null) return;
  modal0.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal0) {
  if (modal0 == null) return;
  modal0.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal0 = document.querySelector(button.dataset.modalTarget);
    openModal(modal0);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal0 = button.closest('.modal0');
    closeModal(modal0);
  });
});

/* modal1 */

function closeModal1(modal1) { // eslint-disable-line
  if (modal1 == null) return;
  modal1.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal1 = document.querySelector(button.dataset.modalTarget);
    openModal(modal1);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal1 = button.closest('.modal1');
    closeModal1(modal1);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal0.active');
  modals.forEach((modal0) => {
    closeModal(modal0);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal1.active');
  modals.forEach((modal1) => {
    closeModal(modal1);
  });
});
