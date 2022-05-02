const axios = require("axios");

const URL = `https://api.openweathermap.org/data/2.5/weather?id=634963&appid=b648b490fdc58867b39423ec33386dac&units=metric`;

export default async function fetchWeatherData() {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
