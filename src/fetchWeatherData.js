const axios = require("axios");

const fetchCurrentWeatherData = async (cityId) => {
  try {
    const response = await axios.get(`https://weather-ette.herokuapp.com/api/weather/${cityId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchCurrentForecastData = async (cityId) => {
  try {
    const response = await axios.get(`https://weather-ette.herokuapp.com/api/forecast/${cityId}`);
    const slicedResponse = response.data.list.slice(0, 5);
    return slicedResponse;
  } catch (error) {
    console.error(error);
  }
};

export { fetchCurrentWeatherData, fetchCurrentForecastData };
