// pass city as a parameter
const getWeatherData = async (city) => {

  if(!city) {
   city = "dallas"
  }
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=ennice&units=imperial&appid=${process.env.REACT_APP_APIKEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export default getWeatherData;
