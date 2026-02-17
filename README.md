# ⛅ Weather Dashboard

A responsive weather application built with vanilla JavaScript that provides real-time weather data for any city worldwide.

## 🌐 Live Demo

> _[Add GitHub Pages link here once deployed]_

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Real-time temperature display
- 💧 Current humidity levels
- 💨 Wind speed information
- ⌨️ Search via button click or Enter key
- 📱 Responsive design

## 🛠️ Technologies Used

- **HTML5** — semantic markup
- **CSS3** — responsive layout, gradient background, glassmorphism styling
- **JavaScript (ES6+)** — async/await, Fetch API, DOM manipulation
- **Open-Meteo API** — free, no API key required
  - Geocoding API for city coordinates
  - Weather Forecast API for current conditions

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/julije/weather-app.git
   ```
2. Open `index.html` in your browser — no build tools or dependencies required.

## 📡 API Usage

This app uses two free endpoints from [Open-Meteo](https://open-meteo.com/):

| Endpoint                         | Purpose                         |
| -------------------------------- | ------------------------------- |
| `geocoding-api.open-meteo.com`   | Convert city name → coordinates |
| `api.open-meteo.com/v1/forecast` | Fetch current weather data      |

## 📁 Project Structure

```
weather-app/
├── index.html    # Main HTML structure
├── style.css     # Styling and responsive layout
├── app.js        # JavaScript logic and API calls
└── README.md
```

## 👨‍💻 Author

**Julije** — [github.com/julije](https://github.com/julije)
