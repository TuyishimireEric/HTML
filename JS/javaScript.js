// eslint-disable-next-line no-unused-vars
function showMenu() {
  document.querySelector('.navigation').classList.toggle('active');
  document.querySelector('.menu-list').classList.toggle('active');
}

function hideMenu() {
  document.querySelector('.navigation.active').classList.remove('active');
  document.querySelector('.menu-list.active').classList.remove('active');
}
