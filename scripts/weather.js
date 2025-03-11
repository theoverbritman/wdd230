const apiKey = 'b4635b41512cb7d06f8fb094d949ebc1';
const city = 'Austin';
const country = 'US';

const weatherDescription = document.getElementById('weather-description');
const weatherIcon = document.getElementById('weather-icon');

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`);
        const data = await response.json();

        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const temp = data.main.temp;

        weatherDescription.textContent = `${temp}°F - ${description.charAt(0).toUpperCase() + description.slice(1)}`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}.png`;
        weatherIcon.style.display = 'inline';
    } catch (error) {
        console.error('Failed to fetch weather data', error);
        weatherDescription.textContent = 'Failed to load weather';
    }
}

fetchWeather();
