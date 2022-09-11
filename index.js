const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const icon = document.querySelector(".bx");

hamburgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    icon.classList.toggle("bx-menu");
    icon.classList.toggle("bx-x");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.toggle("show")
    icon.classList.toggle("bx-menu");
    icon.classList.toggle("bx-x");
}));