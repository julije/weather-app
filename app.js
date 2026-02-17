const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherBox = document.getElementById("weather-box");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");

async function getWeather() {
  try {
    const city = cityInput.value.trim();
    if (!city) {
      alert("Upiši naziv grada");
      return;
    }

    weatherBox.style.display = "none";

    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=hr`,
    );
    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      alert("Grad nije pronađen");
      return;
    }

    const location = geoData.results[0];

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true&hourly=relativehumidity_2m`,
    );
    const weatherData = await weatherResponse.json();

    const current = weatherData.current_weather;
    const humidityNow = weatherData.hourly.relativehumidity_2m[0];

    cityName.textContent = location.name;
    temp.textContent = `${current.temperature}°C`;
    description.textContent = "Trenutno vrijeme";
    humidity.textContent = `${humidityNow}%`;
    wind.textContent = `${current.windspeed} km/h`;

    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1116/1116453.png";

    weatherBox.style.display = "block";
    cityInput.value = "";
  } catch (error) {
    console.error(error);
    alert("Greška pri dohvaćanju podataka");
  }
}

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});
