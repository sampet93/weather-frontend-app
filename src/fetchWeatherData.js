const axios = require("axios");

const fetchCurrentWeatherData = async (cityId) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=b648b490fdc58867b39423ec33386dac&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchCurrentForecastData = async (cityId) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=b648b490fdc58867b39423ec33386dac&units=metric`
    );
    const slicedResponse = response.data.list.slice(0, 5);
    return slicedResponse;
  } catch (error) {
    console.error(error);
  }
};

export { fetchCurrentWeatherData, fetchCurrentForecastData };
