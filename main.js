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
const steps = document.querySelectorAll('.step-round');

const toggle_step_active = e => {
  const current_step = e.target.parentNode; 
  const all_steps = [...steps].map(step => step.parentNode)

  all_steps.filter(step => {
    if(step === current_step) {
      step.classList.add('is-step-active');
    } else {
      step.classList.remove('is-step-active');
    }
  })
}

steps.forEach(step => step.addEventListener('click', toggle_step_active));
