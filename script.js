// Array of locations with latitude, longitude, and display names
const locations = [
  { name: "Zocca, Italy", coords: "44.34,10.99" },
  { name: "New York, USA", coords: "40.7128,-74.0060" },
  { name: "Delhi, India", coords: "28.6139,77.2090" },
  // Add more locations as needed
  { name: "London, UK", coords: "51.5074,-0.1278" },
  { name: "Tokyo, Japan", coords: "35.682839,139.759455" },
  { name: "Sydney, Australia", coords: "-33.8688,151.2093" },
  { name: "Paris, France", coords: "48.8566,2.3522" },
  { name: "Berlin, Germany", coords: "52.5200,13.4050" },
  { name: "Toronto, Canada", coords: "43.651070,-79.347015" },
  { name: "Dubai, UAE", coords: "25.276987,55.296249" },
  { name: "Cape Town, South Africa", coords: "-33.9249,18.4241" },
  { name: "Rio de Janeiro, Brazil", coords: "-22.9083,-43.1964" },
  { name: "Los Angeles, USA", coords: "34.052235,-118.243683" },
  { name: "Moscow, Russia", coords: "55.7558,37.6176" },
  { name: "Beijing, China", coords: "39.9042,116.4074" },
];

// Function to generate location options
function generateLocationOptions() {
  const locationSelect = document.getElementById("location-select");
  locations.forEach((location) => {
    const option = document.createElement("option");
    option.value = location.coords;
    option.textContent = location.name;
    locationSelect.appendChild(option);
  });
}

generateLocationOptions();

// Function to fetch weather data for the selected location
function fetchWeatherData(latitude, longitude, apiKey) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      updateUI(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data: ", error);
    });
}

// Function to update the UI with weather data
function updateUI(data) {
  const locationName = data.name;
  const temperature = (data.main.temp - 273.15).toFixed(2);
  const weatherType = data.weather[0].main;
  const weatherDescription = data.weather[0].description;
  const cloudiness = data.clouds.all;
  const windSpeed = data.wind.speed;
  const feelsLike = (data.main.feels_like - 273.15).toFixed(2);
  const tempMin = (data.main.temp_min - 273.15).toFixed(2);
  const tempMax = (data.main.temp_max - 273.15).toFixed(2);
  const pressure = data.main.pressure;
  const humidity = data.main.humidity;
  const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  document.getElementById(
    "location"
  ).textContent = `Weather in ${locationName}, Italy`;
  document.getElementById("temperature").textContent = temperature;
  document.getElementById("weather-type").textContent = weatherType;
  document.getElementById("weather-description").textContent =
    weatherDescription;
  document.getElementById("cloudiness").textContent = cloudiness;
  document.getElementById("wind-speed").textContent = windSpeed;
  document.getElementById("feels-like").textContent = feelsLike;
  document.getElementById("temp-min").textContent = tempMin;
  document.getElementById("temp-max").textContent = tempMax;
  document.getElementById("pressure").textContent = pressure;
  document.getElementById("humidity").textContent = humidity;
  document.getElementById("sunrise-time").textContent = sunriseTime;
  document.getElementById("sunset-time").textContent = sunsetTime;
}

// Handle location change event
document
  .getElementById("location-select")
  .addEventListener("change", function () {
    const selectedLocation = this.value.split(",");
    const latitude = selectedLocation[0];
    const longitude = selectedLocation[1];
    const apiKey = "809c3f5ec9a0118f21ccce465781cae5"; // Replace with your API key
    fetchWeatherData(latitude, longitude, apiKey);
  });

// Fetch weather data for the default location (Zocca, Italy) on page load
const defaultLatitude = 44.34;
const defaultLongitude = 10.99;
const defaultApiKey = "809c3f5ec9a0118f21ccce465781cae5"; // Replace with your API key
fetchWeatherData(defaultLatitude, defaultLongitude, defaultApiKey);
