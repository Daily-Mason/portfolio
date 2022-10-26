'use strict';

const navbar__toggleBtn = document.querySelector('.navbar__toggle-btn');
const navbar__menu = document.querySelector('.navbar__menu');
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// Show menu whe press the Toggle Btn
navbar__toggleBtn.addEventListener('click', () => {
    navbar__menu.classList.toggle('active');
}); 


// Handle scrolling when tapping on the navbar menu
const navbar__menu__box = document.querySelector('.navbar__menu__box');

navbar__menu__box.addEventListener('click', (event) => {
    var target = event.target;
    var link = target.dataset.link;
    if (link == null) {
        return;
    }
    console.log(event.target.dataset.link);
    scrollIntoView(link);
})
// Handle click on "contact" button on home
const home__contactBtn = document.querySelector('.home__contact');
home__contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact')
})

function scrollIntoView(selector) {
    var scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({
        'behavior':'smooth'
    });
}

// Make transparent the navbar when it is scrolled to the top
window.addEventListener('scroll', () => {
    // console.log(scrollY);
    if (scrollY >= navbarHeight) {
        navbar.classList.add('navbar__dark');
    } else {
        navbar.classList.remove('navbar__dark');
    }
});

// Make transparent the Home according the scrolling
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
    console.log(`scrollY : ${window.scrollY}`);
    console.log(`homeHeight : ${homeHeight}`);
    home.style.opacity = 1-(scrollY / homeHeight);
    }
);


const arrow__btn = document.querySelector('.arrow__scrollUp');
// Show Arrow button when the scroll over the half of home
window.addEventListener('scroll', () => {
    if (scrollY >= homeHeight/2) {
        arrow__btn.classList.add('show');
    } else {
        arrow__btn.classList.remove('show');
    }
});
// Arrow button to scroll to top
arrow__btn.addEventListener('click', () => {
    scrollIntoView('#home');
});