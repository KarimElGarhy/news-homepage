const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');
const closeMenu = document.querySelector('#close-menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


closeMenu.addEventListener('click', () => {
  menu.classList.add('hidden');
});
