'use strict';

var burger = document.getElementsByClassName('burger')[0];
var mobileMenu = document.querySelector('.header-menu');
var loupe = document.getElementsByClassName('ic-loupe')[0];
var searchForm = document.getElementsByClassName('search')[0].children[0];

// open mobile menu
burger.addEventListener('click', function () {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('is-hidden');
});
// open search form
loupe.addEventListener('click', function () {
    searchForm.classList.toggle('block');
});