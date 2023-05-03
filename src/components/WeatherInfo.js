import "./WeatherInfo.css";


export default function WeatherInfo({
  temp,
  icon,
  conditions,
  feels,
  location,
 country



}) {
 let today = new Date()
 const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 let currentDay = today.getDay()
 const currentDate = daysOfWeek[currentDay]


  return (
    <div className="weather">
      <div className="date">
        {`${currentDate}`}
      </div>
      <div className="location">
        <h1>{location} ,{country}</h1>
      </div>
      
      <div className="weather-image">
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt="Weather icon"
          width={90}
          height={90}
        />
        <h1>{Math.round(temp)} °F</h1>
      </div>
      <div className="conditions">
        <h3>{conditions}</h3>
      </div>
      <div className="feels">
        feels like {Math.round(feels)}°
        
      </div>

    </div>
  );
}
