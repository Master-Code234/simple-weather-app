import React from "react";
import WeatherComponent from "../components/Weather";
import WeatherIcon from "../components/WeatherIcon";



export default function Card() {
  return (
    <div className="weather-details">
      <WeatherIcon/>
      <WeatherComponent />   
    </div>
  );
}
