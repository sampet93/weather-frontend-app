import React from "react";
import { Grid } from "@mui/material";
import "./WeatherInfoBoxBig.css";

const WeatherInfoBoxBig = () => {
  return (
    <Grid container justifyContent="center" className="parent-container">
      <Grid container xs={6} flexDirection="column">
        <div className="top-left-container">
          <h3>Helsinki</h3>
          <p>Scattered clouds</p>
        </div>
      </Grid>
      <Grid container xs={6} justifyContent="right">
        <div className="top-right-container">
          <img src="https://openweathermap.org/img/wn/01n@2x.png" />
          <h1>0 C</h1>
        </div>
      </Grid>
      <Grid container xs={6}>
        <div className="bottom-left-container">
          <h4>May 2nd</h4>
          <p>03:00</p>
        </div>
      </Grid>
      <Grid container xs={6} justifyContent="right">
        <div className="bottom-right-container">
          <p>Wind: 3 m/s</p>
          <p>Humidity: 03:00</p>
          <p>03:00</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default WeatherInfoBoxBig;
