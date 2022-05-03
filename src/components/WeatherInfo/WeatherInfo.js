import React from "react";
import { Grid } from "@mui/material";
import WeatherInfoBoxSmall from "../WeatherInfoBoxSmall/WeatherInfoBoxSmall";
import WeatherInfoBoxBig from "../WeatherInfoBoxBig/WeatherInfoBoxBig";

import "./WeatherInfo.css";

const WeatherInfo = ({ weatherData, forecastData }) => {
  return (
    <Grid container justifyContent="center" flexDirection="row" className="weather-info-container">
      <Grid container xs={12} justifyContent="center">
        <WeatherInfoBoxBig weatherData={weatherData} />
      </Grid>
      <Grid container xs={12} flexDirection="row" justifyContent="space-between">
        {forecastData.map((forecast, index) => {
          return (
            <Grid item xs="auto" key={index}>
              <WeatherInfoBoxSmall forecast={forecast} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default WeatherInfo;
