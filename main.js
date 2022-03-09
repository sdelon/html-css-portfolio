const menu_icon = document.querySelector('#menu-icon');
const small_menu = document.querySelector('#show-menu');

const open_menu = e => {
  e.preventDefault();
  console.log('icon clicked');
  small_menu.classList.toggle('visible');
}

menu_icon.addEventListener('click', open_menu);
