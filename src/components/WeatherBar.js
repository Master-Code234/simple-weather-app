import React from 'react'

export default function WeatherBar({temp, humidity,wind, visibility}) {
  
  return (
    <div className='weather-bar'>

      <p>Temp <br/>{Math.round(temp)}°F</p>
      <p>humidity <br/>{humidity}%</p>
      <p>Wind <br/>{wind} mph</p>
      <p>Visibility <br/> {visibility} </p>

    </div>
  )
}
