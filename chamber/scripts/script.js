const darkModeToggle = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
});

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