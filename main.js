'use strict';

const navbar__toggleBtn = document.querySelector('.navbar__toggle-btn');
const navbar__menu = document.querySelector('.navbar__menu');
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// Show menu whe press the Toggle Btn
navbar__toggleBtn.addEventListener('click', () => {
    navbar__menu.classList.toggle('active');
});
window.addEventListener('scroll', () => {
    navbar__menu.classList.remove('active');
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


// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
        // console.log(project.dataset.type);
        if (filter === '*' || filter === project.dataset.type) {
            project.classList.remove('hidden');
        } else if (project.dataset.type == filter) {
            project.classList.remove('hidden');
        } else {
            project.classList.add('hidden');
        }
    });
        projectContainer.classList.remove('anim-out');
    }, 200);
    // Remove selection from previous item and select new one
    var active__btn = document.querySelector('.category__btn.active');
    if (active__btn === null) {
        return;
    } else {
        var target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
        // console.log(target);
        active__btn.classList.remove('active');
        target.classList.add('active');
    }

    // console.log(filter);
});
