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

function openModal1(modal1) {
  if (modal1 == null) return;
  modal1.classList.add('active');
  overlay.classList.add('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal1 = document.querySelector(button.dataset.modalTarget);
    openModal1(modal1);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal1 = button.closest('.modal1');
    closeModal(modal1);
  });
});

/* modal2 */

function openModal2(modal2) {
  if (modal2 == null) return;
  modal2.classList.add('active');
  overlay.classList.add('active');
}

function closeModal2(modal2) {
  if (modal2 == null) return;
  modal2.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal2 = document.querySelector(button.dataset.modalTarget);
    openModal2(modal2);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal2 = button.closest('.modal2');
    closeModal2(modal2);
  });
});

/* modal3 */

function openModal3(modal3) {
  if (modal3 == null) return;
  modal3.classList.add('active');
  overlay.classList.add('active');
}

function closeModal3(modal3) {
  if (modal3 == null) return;
  modal3.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal3 = document.querySelector(button.dataset.modalTarget);
    openModal3(modal3);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal3 = button.closest('.modal3');
    closeModal3(modal3);
  });
});

overlay.addEventListener('click', () => {
  const modals1 = document.querySelectorAll('.modal0.active'),
  modals1.forEach('modal0' => () {
    closeModal(modal0);
  });
});

overlay.addEventListener('click', () => {
  const modals2 = document.querySelectorAll('.modal1.active');
  modals2.forEach('modal1' => () {
    closeModal(modal1);
  });
});
