// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Humberger
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function() {
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
})


$('#projects a').on('mouseover', function () {
    $(this).find('.description').removeClass('opacity-0');
    $(this).find('.description').addClass('description-active');
})

$('#projects a').on('mouseout', function () {
    $(this).find('.description').addClass('opacity-0');
    $(this).find('.description').removeClass('description-active');
})