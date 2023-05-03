

import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherBar from "./components/WeatherBar";
import getWeatherData from "./services/weatherMap-api";
import WeatherInfo from "./components/WeatherInfo";
import { useState, useEffect } from "react";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async (city) => {
    const data = await getWeatherData(city);
    setWeatherData(data);
  };

 

  useEffect(() => { 
    getWeather();
  }, []);

  if (!weatherData) {
    return <div>Loading Weather...</div>;
  }

  return (
    <div className="App">
      <SearchBar getWeather={getWeather} />

      <WeatherInfo
        location={weatherData.name}
        country={weatherData.sys.country}
        temp={weatherData.main.temp}
        icon={weatherData.weather[0].icon}
        conditions={weatherData.weather[0].main}
        feels={weatherData.main.feels_like}
        min={weatherData.main.temp_min}
        humidity={weatherData.main.humidity}
      />

      <WeatherBar
        high={weatherData.main.temp_max}
        low={weatherData.main.temp_min}
        humidity={weatherData.main.humidity}
        wind={weatherData.wind.speed}
        visibility={weatherData.visibility}
        pressure={weatherData.main.pressure}
      />
    </div>
  );
}
