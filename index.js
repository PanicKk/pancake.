const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => navMenu.classList.toggle("show")));