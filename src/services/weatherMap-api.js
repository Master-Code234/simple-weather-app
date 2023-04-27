// pass city as a parameter 
const getWeatherData = async (city) => {

  // Todo create an if statement that checks if the city is null 

  city = 'dallas'
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_APIKEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export default  getWeatherData;
