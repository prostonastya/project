const burger = document.getElementsByClassName('burger')[0];
const mobileMenu = document.querySelector('.header-menu');
const loupe = document.getElementsByClassName('ic-loupe')[0];
const searchForm = document.getElementsByClassName('search')[0].children[0];

// open mobile menu
burger.addEventListener('click', (function() {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('is-hidden');
}));
// open search form
loupe.addEventListener('click', ()=>{
    searchForm.classList.toggle('block');
});