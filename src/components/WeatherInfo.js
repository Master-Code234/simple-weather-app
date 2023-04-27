import React from "react";

export default function WeatherInfo({
  temp,
  icon,
  conditions,
  feels,
  location,
}) {
  return (
    <div className="weather">
      <div className="location">
        <h1>{location} </h1>
      </div>
      <div className="weather-image">
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt="Weather icon"
          width={90}
          height={90}
        />
      </div>
      <div className="temp">
        <h1>{Math.round(temp)}°F</h1>
      </div>
      <div className="conditions">
        <h3>{conditions}</h3>
      </div>
      <div className="weather-stats">
         feels like {feels}
      </div>
    </div>
  );
}
