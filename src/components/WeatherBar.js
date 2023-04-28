import React from "react";
import "./WeatherBar.css"

export default function WeatherBar({  high,low, humidity, wind, visibility,pressure }) {
  return (
    <div className="weather-info">
      <div className="pressure">
        high
        <h2>{Math.round(high)}°</h2>
      </div>
      <div className="low">
        low
        <h2> {Math.round(low)}° </h2>
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
        <h2> {Math.round(visibility /1609)} miles</h2>
      </div>
    </div>
  );
}
