// hamburger.js
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        // Toggle icon between hamburger and X
        hamburger.textContent = navMenu.classList.contains("show") ? "✖" : "≡";
    });
});
