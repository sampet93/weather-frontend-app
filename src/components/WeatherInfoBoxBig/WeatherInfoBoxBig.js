import React from "react";
import { Grid } from "@mui/material";
import "./WeatherInfoBoxBig.css";

const WeatherInfoBoxBig = () => {
  return (
    <Grid container justifyContent="center" className="parent-container">
      <Grid container xs={6} flexDirection="column">
        <Grid item className="top-left-container">
          <h2>Helsinki</h2>
          <p>Scattered clouds</p>
        </Grid>
      </Grid>
      <Grid container xs={6}>
        <Grid item justifyContent="center">
          <h2>Testi</h2>
        </Grid>
      </Grid>
      <Grid container xs={6}>
        <Grid item className="bottom-left-container">
          <h3>May 2nd</h3>
          <p>03:00</p>
        </Grid>
      </Grid>
      <Grid container xs={6} justifyContent="right">
        <Grid item justifyContent="right">
          <div className="bottom-right-container">
            <p>Wind: 3 m/s</p>
            <p>Humidity: 03:00</p>
            <p>03:00</p>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WeatherInfoBoxBig;
