const menuHamburger = document.querySelector(".menu-hamburger");
const navlinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click', () => {
    navlinks.classList.toggle("mobile-menu");
});
