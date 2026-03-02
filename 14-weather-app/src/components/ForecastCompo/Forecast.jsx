import React from "react";
import sun from '../../../public/small.png'

const Forecast = ({ forecastData }) => {
  console.log("in forecast", forecastData);

  return (
    <>
      <h2 className="forecast-header">Next days forecast</h2>
      <div className="forecast">
        <div className="forecast-days">
          {forecastData.map((day, index) => {
            return(<div key={index} className="forecast-day">
              <p>
                {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </p>
              <img src={sun} className="sun-img" alt="" />
              <p>{Math.round(day.main.temp)}°C</p>
            </div>);
          })}
        </div>
      </div>
    </>
  );
};

export default Forecast;
