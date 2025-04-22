async function getWeather() {
    const apiKey = "1203e6258067a416b68897203ca6f0af"; 
    const city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
        const response = await fetch(url);
        const data = await response.json();
  
        document.getElementById("weather-result").innerHTML = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            
        `;
    } catch (error) {
        document.getElementById("weather-result").innerHTML = "<p>City not found. Please try again!</p>";
    }
  }
  