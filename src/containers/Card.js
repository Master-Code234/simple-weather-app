import WeatherBar from "../components/WeatherBar";
import getWeatherData from "../services/weatherMap-api";
import WeatherInfo from "../components/WeatherInfo";
import React, { useState, useEffect } from "react";


export default function Card() {
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    const data = await getWeatherData();
    setWeatherData(data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  if (!weatherData) {
    return <div>Loading Weather...</div>;
  }

  return (
    <div className="weather-details">

      

      <WeatherInfo
        location={weatherData.name}
        temp={weatherData.main.temp}
        icon={weatherData.weather[0].icon}
        conditions={weatherData.weather[0].main}
        feels={weatherData.main.feels_like}
        min={weatherData.main.temp_min}
      />

      <WeatherBar
        temp={weatherData.main.temp}
        humidity={weatherData.main.humidity}
        wind={weatherData.wind.speed}
        visibility={weatherData.visibility}
      />
    </div>

  );
}
