import React from "react";

export default function Header({ temp, icon, conditions, feels }) {

  return (
    <div className="header">
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/w/${icon}.png`}
        alt="Weather icon"
      />
      <h2>
      
        {Math.round(temp)} <span className="deg">°F</span>
      </h2>

      <p className="conditions">
        {conditions}
        <br />
        <span className="feels"> feels like {Math.round(feels)}</span>
      </p>

    </div>
  );
}
