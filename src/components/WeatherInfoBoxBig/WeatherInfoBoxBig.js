import React from "react";
import { Grid } from "@mui/material";
import "./WeatherInfoBoxBig.css";
import dateFormat from "dateformat";

const WeatherInfoBoxBig = ({ weatherData }) => {
  const now = new Date();

  return (
    <Grid container justifyContent="center" className="parent-container">
      <Grid container xs={6} flexDirection="column">
        <div className="top-left-container">
          <h3>{weatherData.name}</h3>
          <p>{weatherData.weather[0].main}</p>
        </div>
      </Grid>
      <Grid container xs={6} justifyContent="right">
        <div className="top-right-container">
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
          <h1>{Math.round(weatherData.main.temp)} &deg;C</h1>
        </div>
      </Grid>
      <Grid container xs={6}>
        <div className="bottom-left-container">
          <h4>{dateFormat(now, "mmmm dS")}</h4>
          <p>{dateFormat(now, "HH:MM")}</p>
        </div>
      </Grid>
      <Grid container xs={6} justifyContent="right">
        <div className="bottom-right-container">
          <p>Wind: {Math.round(weatherData.wind.speed * 10) / 10} m/s</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
          <p>Precipitation (3 h): {weatherData.rain ? weatherData.rain["3h"] : 0} mm</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default WeatherInfoBoxBig;
