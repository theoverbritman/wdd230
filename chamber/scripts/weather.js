// Fetch Weather Data for Austin, TX
async function fetchWeather() {
    try {
        let response = await fetch("https://wttr.in/Austin?format=j1");
        let data = await response.json();

        let temp = data.current_condition[0].temp_C;
        let condition = data.current_condition[0].weatherDesc[0].value;

        document.getElementById("temp").textContent = temp;
        document.getElementById("condition").textContent = condition;
    } catch (error) {
        document.getElementById("temp").textContent = "N/A";
        document.getElementById("condition").textContent = "Could not load";
    }
}
fetchWeather();

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const body = document.body;

    // Toggle menu on button click
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        body.classList.toggle("menu-open"); // Prevent scrolling when menu is open
    });

    // Close menu when a menu link is clicked
    document.querySelectorAll("#nav-menu a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            body.classList.remove("menu-open");
        });
    });
});
