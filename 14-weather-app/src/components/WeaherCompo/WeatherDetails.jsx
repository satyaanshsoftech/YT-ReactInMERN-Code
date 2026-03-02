import React from "react";

const WeatherDetails = ({ weatherData }) => {
  return (
    <>
      <div className="header">
        <h1 className="city">{weatherData.name}</h1>
        <p className="temperature">{weatherData.main.temp}°C</p>
        <p className="condition">{weatherData.weather[0].main}</p>
      </div>

      <div className="weather-details">
        <div>
          <p>Humidity</p>
          <p style={{ fontWeight: "bold" }}>
            {Math.round(weatherData.main.humidity)}%
          </p>
        </div>
        <div>
          <p>Wind Speed</p>
           <p style={{ fontWeight: "bold" }}>
            {Math.round(weatherData.wind.speed)} mph
           </p>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
