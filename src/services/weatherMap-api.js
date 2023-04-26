const apiKey = "c004e4efd68a2d4337fa2cbd822bf32b";
const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=${apiKey}`;


const getWeatherData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export default  getWeatherData;
