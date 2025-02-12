const darkModeToggle = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

// Fix: Use correct variable name
darkModeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    main.classList.toggle("dark-mode");

    // Save dark mode preference in localStorage
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
});

// Fix: Load saved dark mode preference on page load
if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
    main.classList.add("dark-mode");
    darkModeToggle.checked = true; // Ensure the switch stays in the correct position
}

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
