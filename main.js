// Toggle menu icon
const menu_icon = document.querySelector('#menu-icon');
const small_menu = document.querySelector('#show-menu');

const open_menu = e => {
  e.preventDefault();
  console.log('icon clicked');
  small_menu.classList.toggle('visible');
}

menu_icon.addEventListener('click', open_menu);

// Modifier la couleur des steps
const steps = document.querySelector('.steps-list');

const toggle_step_active = e => {
  const current_step = e.target; 
  console.dir(current_step)

  current_step.classList.contains('is-step-active') ? current_step.classList.remove('is-step-active') : current_step.classList.add('is-step-active');
}

steps.addEventListener('click', toggle_step_active);
