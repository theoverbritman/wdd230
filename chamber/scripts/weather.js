const apiKey = 'b4635b41512cb7d06f8fb094d949ebc1';
const city = 'Austin';
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Current weather
        document.getElementById('temp').textContent = Math.round(data.list[0].main.temp);
        document.getElementById('condition').textContent = data.list[0].weather[0].description;

        // 3-day forecast (assuming 3-hour intervals, so picking every 8th entry)
        document.getElementById('day1').textContent = Math.round(data.list[8].main.temp);
        document.getElementById('day2').textContent = Math.round(data.list[16].main.temp);
        document.getElementById('day3').textContent = Math.round(data.list[24].main.temp);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

fetchWeather();
