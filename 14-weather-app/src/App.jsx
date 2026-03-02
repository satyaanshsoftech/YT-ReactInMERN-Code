import React, { useEffect, useState } from "react";
import WeatherDetails from "./components/WeaherCompo/WeatherDetails";
import Forecast from "./components/ForecastCompo/Forecast";

const App = () => {
  const [city, setCity] = useState("Panipat");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  // please enter your own key
  // take it from openweathermap website

  function handleChange(e) {
    const { value } = e.target;
    setCity(value);
    console.log("city", value);
  }

  useEffect(() => {
    const fetchWeatherData = async (cityName) => {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`;

      try {
        const weatherResponse = await fetch(weatherUrl);
        if (!weatherResponse.ok) {
          throw new Error("city  data not found");
        }
        const wData = await weatherResponse.json();
        setWeatherData(wData);
        console.log("wdata", wData);

        const foreCastResponse = await fetch(forecastUrl);
        if (!foreCastResponse.ok) {
          throw new Error("city forecast data not found");
        }

        const fData = await foreCastResponse.json();

        const foreData = fData.list.filter((item, index) => index % 8 === 0);

        console.log("fdata", foreData);

        setForecastData(foreData);
      } catch (err) {
        console.log("error", err.message);
      }
    };

    fetchWeatherData(city);
  }, [city]);

  return (
    <div className="container">
      <input
        type="text"
        className="city-input"
        name="city"
        value={city}
        onChange={handleChange}
        placeholder="Enter the city"
      />
      <div className="wrapper">
        {weatherData && weatherData.main && (
          <WeatherDetails weatherData={weatherData} />
        )}
        {forecastData && forecastData.length > 0 && (
          <Forecast forecastData={forecastData} />
        )}
      </div>
    </div>
  );
};

export default App;
