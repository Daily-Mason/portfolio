'use strict';

const navbar__toggleBtn = document.querySelector('.navbar__toggle-btn');
const navbar__menu = document.querySelector('.navbar__menu');
const navbar__menu__item = document.querySelector('.navbar__menu__item');
var navbar__array = document.getElementsByClassName('navbar__menu__item')
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// Show menu whe press the Toggle Btn
navbar__toggleBtn.addEventListener('click', () => {
    navbar__menu.classList.toggle('active');
}); 

// Add Border to Active NavBtn when cliked
console.log(navbar__array)

// Make transparent the navbar when it is scrolled to the top
window.addEventListener('scroll', () => {
    if (scrollY >= navbarHeight) {
        navbar.classList.add('navbar__dark');
    } else {
        navbar.classList.remove('navbar__dark');
    }
});
