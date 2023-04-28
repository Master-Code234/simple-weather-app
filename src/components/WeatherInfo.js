import React from "react";
import "./WeatherInfo.css";
import WeatherBar from "./WeatherBar";


export default function WeatherInfo({
  temp,
  icon,
  conditions,
  feels,
  location,
  humidity,
 country
}) {
  return (
    <div className="weather">
      <div className="location">
        <h1>{location} ,{country} </h1>
      </div>
      <div className="weather-image">
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt="Weather icon"
          width={90}
          height={90}
        />
        <h1>{Math.round(temp)}°F</h1>
      </div>
      <div className="temp"></div>
      <div className="conditions">
        <h3>{conditions}</h3>
      </div>
    </div>
  );
}
