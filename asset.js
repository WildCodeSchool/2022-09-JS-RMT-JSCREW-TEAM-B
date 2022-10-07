const menuHamburger = document.querySelector(".menu-hamburger");
const navlinks = document.querySelector(".mobile-menu")

menuHamburger.addEventListener('click', () => {
    navlinks.classList.toggle("visible-menu");
});
