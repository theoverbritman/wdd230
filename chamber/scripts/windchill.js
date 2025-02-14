document.addEventListener("DOMContentLoaded", function () {
    function calculateWindChill(tempF, windSpeed) {
        if (tempF <= 50 && windSpeed > 3.0) {
            return (
                35.74 +
                0.6215 * tempF -
                35.75 * Math.pow(windSpeed, 0.16) +
                0.4275 * tempF * Math.pow(windSpeed, 0.16)
            ).toFixed(2);
        } else {
            return "N/A";
        }
    }

    function updateWindChill() {
        let tempF = parseFloat(document.getElementById("temp").textContent);
        let windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

        let windChill = calculateWindChill(tempF, windSpeed);
        document.getElementById("windChill").textContent = windChill;
    }

    async function fetchWeather() {
        try {
            let response = await fetch("https://wttr.in/Austin?format=j1");
            let data = await response.json();

            let tempF = data.current_condition[0].temp_F;
            let windSpeed = data.current_condition[0].windspeedMiles;

            document.getElementById("temp").textContent = tempF;
            document.getElementById("windSpeed").textContent = windSpeed;

            updateWindChill();
        } catch (error) {
            document.getElementById("temp").textContent = "N/A";
            document.getElementById("windSpeed").textContent = "N/A";
            document.getElementById("windChill").textContent = "N/A";
        }
    }

    fetchWeather();
});
