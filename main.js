// Replace YOUR_API_KEY with your actual API key from OpenWeatherMap
const apiKey = "ef3290558dfade4cd31073d7b4f7e769";

// Replace YOUR_CITY with the city you want to get the weather for
const city = "Poznan";

// Make a GET request to the OpenWeatherMap API
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${poznan}&appid=${ef3290558dfade4cd31073d7b4f7e769}`
)
  .then((response) => response.json())
  .then((data) => {
    // Extract the relevant data from the API response
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `https://home.openweathermap.org/assets/logo_white-011958e697955be95bdc4af6a4d1913dbf9df990cb9101a67c439879293f5947.png`;

    // Create the HTML for the weather app
    const weatherApp = `
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
      <img src="${`https://home.openweathermap.org/assets/logo_white-011958e697955be95bdc4af6a4d1913dbf9df990cb9101a67c439879293f5947.pngonUrl`} alt="Weather icon">
    `;

    // Insert the HTML into the "weather-app" div
    document.getElementById("weather-app").innerHTML = weatherApp;
  })
  .catch((error) => {
    console.log("Error: " + error);
  });
