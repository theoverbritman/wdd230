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
