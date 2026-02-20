import React, { useEffect, useState } from "react";
import "./style.css";

const MyWeatherComponent = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
   
  useEffect(()=>{
// fetch
    console.log(`i am in city ${country}`);


  } , [country] );

  return (
    <div className="container">
      <h1>
        i am in weather component for {city} {country}
      </h1>
      <button onClick={() => setCity("karnal")}>change to karnal</button>
      <button onClick={() => setCity("Panipat")}>change to Panipat</button>

      <button onClick={() => setCountry("India")}>change to India</button>
      <button onClick={() => setCountry("China")}>change to China</button>
    </div>
  );
};

export default MyWeatherComponent;
