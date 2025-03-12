// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// OpenWeatherMap API URL with Trier, Germany's latitude and longitude
const apiKey = 'b4635b41512cb7d06f8fb094d949ebc1';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.749992&lon=6.637143&units=imperial&appid=${apiKey}`;

// Define an asynchronous function to fetch weather data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Output data for testing
      displayResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to display the results in the HTML document
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`; // Current temperature
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; // Icon URL
  let desc = data.weather[0].description; // Weather description
  
  // Set attributes for the weather icon
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  
  // Update caption text
  captionDesc.textContent = `${desc}`;
}

// Invoke the function to fetch and display weather data
apiFetch();
