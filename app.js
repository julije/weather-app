const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherBox = document.getElementById("weather-box");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const weatherIcon = document.getElementById("weatherIcon");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

async function getWeather() {
  try {
    if (!cityInput.value) {
      alert("Molim upiši naziv grada!");
      return;
    }

    weatherBox.style.display = "none";

    const grad = cityInput.value;

    const url = `https://wttr.in/${grad}?format=j1`;

    console.log("URL:", url);

    const izvor = await fetch(url);
    const podatci = await izvor.json();

    console.log("Podatci:", podatci);

    if (!podatci.current_condition || podatci.current_condition.length === 0) {
      alert("Grad nije pronađen!");
      return;
    }

    const trenutno = podatci.current_condition[0];
    const lokacija = podatci.nearest_area[0];

    cityName.innerHTML = lokacija.areaName[0].value;
    temp.innerHTML = `${trenutno.temp_C}°C`;
    description.innerHTML = trenutno.weatherDesc[0].value;
    weatherIcon.src = trenutno.weatherIconUrl[0].value;
    humidity.innerHTML = `${trenutno.humidity}%`;
    wind.innerHTML = `${trenutno.windspeedKmph} km/h`;

    weatherBox.style.display = "block";
    cityInput.value = "";
  } catch (error) {
    console.log("Greška:", error);
    alert("Došlo je do greške. Pokušaj ponovo.");
  }
}

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getWeather();
  }
});
