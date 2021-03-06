import React, { useState, useEffect } from "react";
import { Grid, CircularProgress, Box } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import DropDown from "./components/DropDown/DropDown";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

import { fetchCurrentWeatherData, fetchCurrentForecastData } from "./fetchWeatherData";
import cities from "./cities";

import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [weatherInfoObjects, setWeatherInfoObjects] = useState();

  useEffect(() => {
    if (selectedCity.id !== 0) {
      const fetch = async () => {
        const newWeatherData = await fetchCurrentWeatherData(selectedCity.id);
        const newForecastData = await fetchCurrentForecastData(selectedCity.id);
        setWeatherData(newWeatherData);
        setForecastData(newForecastData);
      };
      fetch();
    } else {
      const fetchAll = async () => {
        // Go through all cities and generate objects
        const objects = await Promise.all(
          cities.map(async (city, index) => {
            if (city.id === 0) return null;
            const newWeatherData = await fetchCurrentWeatherData(city.id);
            const newForecastData = await fetchCurrentForecastData(city.id);
            setWeatherData(newWeatherData);
            setForecastData(newForecastData);
            return (
              <WeatherInfo
                key={city.id}
                weatherData={newWeatherData}
                forecastData={newForecastData}
              />
            );
          })
        );

        setWeatherInfoObjects(
          objects.filter((data) => {
            return data !== null;
          })
        );
      };
      fetchAll();
    }
  }, [selectedCity]);

  const handleSelected = (id) => {
    setWeatherData(null);
    setForecastData(null);
    cities.forEach((city) => {
      if (city.id === id) {
        setSelectedCity(city);
      }
    });
  };

  return (
    <>
      <NavBar header="S????tutka" />
      <Grid container>
        <Grid container xs={12} justifyContent="center">
          <DropDown selectHandler={handleSelected} items={cities} defaultId={0} />
        </Grid>
        <Grid container xs={12} justifyContent="center">
          {weatherData && forecastData ? (
            selectedCity.id === 0 ? (
              weatherInfoObjects
            ) : (
              <WeatherInfo weatherData={weatherData} forecastData={forecastData} />
            )
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
