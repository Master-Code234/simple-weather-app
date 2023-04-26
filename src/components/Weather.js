import React, { useState, useEffect } from "react";
import getWeatherData from "../services/weatherMap-api";

export default function WeatherComponent() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeatherData();
      setWeatherData(data);
    };
    fetchData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-bar">
      <label className="temp">
        <h3>Temp</h3>
        <hr />
        <h2>{Math.round(weatherData.main.temp)}</h2>
      </label>
      <label className="wind">
        <h3>Wind</h3>
        <hr />
        <h2>{weatherData.wind.speed}</h2>
      </label>
      <label className="humid">
        <h3>humidity</h3>
        <hr />
        <h2>{weatherData.main.humidity}</h2>
      </label>
    </div>
  );
};

