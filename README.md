# Weather App

This Weather App is a simple web application that allows users to check the weather conditions for various locations around the world. Users can select a location from a dropdown menu, and the app will display real-time weather information for the chosen location. It's a great project for learning how to fetch data from an API and update the user interface dynamically.

## Features
- Dynamic selection of locations from a dropdown menu.
- Display of current weather conditions, including temperature, weather type, description, cloudiness, wind speed, and more.
- Location-specific sunrise and sunset times.
- Clean and user-friendly interface.

## Prerequisites
Before using the Weather App, you need to have the following prerequisites:
- A code editor (e.g., Visual Studio Code, Sublime Text, or any other text editor of your choice).
- A web browser to run the HTML, CSS, and JavaScript code.

## Getting Started
1. Clone or download this project to your local machine.
2. Open the project folder in your code editor.

## Usage
1. Open the `index.html` file in a web browser.
2. The app will display the weather information for the default location, which is "Zocca, Italy."
3. To check the weather for a different location, use the "Select Location" dropdown menu and choose a location from the list.

## API Key
To fetch weather data, the app uses the OpenWeatherMap API. You need to obtain an API key from OpenWeatherMap to use this project. Replace the placeholder `defaultApiKey` in the `script.js` file with your own API key.

```javascript
const apiKey = "your-api-key-here"; // Replace with your OpenWeatherMap API key
