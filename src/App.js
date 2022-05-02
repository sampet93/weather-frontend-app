import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import DropDown from "./components/DropDown/DropDown";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

import fetchWeatherData from "./fetchWeatherData";

import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState("");

  useEffect(() => {
    setWeatherData(fetchWeatherData());
  }, []);

  return (
    <>
      <NavBar header="Säätutka" />
      <Grid container>
        <Grid container xs={12} justifyContent="center">
          <DropDown />
        </Grid>
        <Grid container xs={12} justifyContent="center">
          <WeatherInfo />
          <WeatherInfo />
          <WeatherInfo />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
