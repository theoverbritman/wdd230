// Fetch current weather and forecast data
const apiKey = 'b4635b41512cb7d06f8fb094d949ebc1'; // Replace with your OpenWeatherMap API key

// Current weather
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cozumel,MX&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('tempMax').textContent = data.main.temp_max;
        document.getElementById('weatherData').innerHTML = `
            <p>Current Temp: ${data.main.temp}°F</p>
            <p>Humidity: ${data.main.humidity}%</p>
            ${data.weather.map(w => `<p>${w.main}: ${w.description} <img src="http://openweathermap.org/img/wn/${w.icon}.png" alt="${w.description}"></p>`).join('')}
        `;
    })
    .catch(error => console.error('Error fetching current weather:', error));

// Tomorrow's forecast at 3:00 PM
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Cozumel,MX&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        const tomorrow3pm = data.list.find(item => item.dt_txt.includes('15:00:00'));
        document.getElementById('weatherData').innerHTML += `<p>Tomorrow at 3:00 PM: ${tomorrow3pm.main.temp}°F</p>`;
    })
    .catch(error => console.error('Error fetching forecast:', error));