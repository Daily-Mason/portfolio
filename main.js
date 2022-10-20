const navbar__toggleBtn = document.querySelector('.navbar__toggle-btn');
const navbar__menu = document.querySelector('.navbar__menu');
const navbar = document.querySelector('#navbar');


navbar__toggleBtn.addEventListener('click', () => {
    navbar__menu.classList.toggle('active');
}); 

window.addEventListener('scroll', () => {
    console.log(scrollY);
    if (scrollY >= 100) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});
