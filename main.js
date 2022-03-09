console.log('Hello');
const fruits = ['pommes', 'bananes', 'poires', 'raisins'];
console.log(fruits)
const pomme = fruits.filter(fruit => fruit.includes('p'))
console.log(pomme)

const annee_en_cours = document.querySelector('#year');
const date = new(Date)
annee_en_cours.textContent = date.getFullYear();
