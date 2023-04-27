import React from "react";

export default function WeatherBar({ temp, humidity, wind, visibility }) {
  return (
    <div className="weather-info">
      <div className="current-conditions">
        <h1>Current Conditions </h1>
      </div>
      <div className="weather-temp">
        Current temp:
        <h2> {Math.round(temp)}°F </h2>
      </div>
      <div className="humidity">
        Humidity:
        <h2>{humidity}%</h2>
      </div>
      <div className="wind-speed">
        Wind Speed:
        <h2>{Math.round(wind)} mph</h2>
      </div>
      <div className="visibility">
        Visibility
        <h2> {visibility}</h2>
      </div>
    </div>
  );
}
