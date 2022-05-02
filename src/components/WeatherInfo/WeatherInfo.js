import React from "react";
import { Grid } from "@mui/material";
import WeatherInfoBoxSmall from "../WeatherInfoBoxSmall/WeatherInfoBoxSmall";
import WeatherInfoBoxBig from "../WeatherInfoBoxBig/WeatherInfoBoxBig";

import "./WeatherInfo.css";

const WeatherInfo = () => {
  return (
    <Grid container justifyContent="center" flexDirection="row" className="weather-info-container">
      <Grid container xs={12} justifyContent="center">
        <WeatherInfoBoxBig />
      </Grid>
      <Grid container xs={12} flexDirection="row" justifyContent="space-between">
        <Grid item xs="auto">
          <WeatherInfoBoxSmall />
        </Grid>
        <Grid item xs="auto">
          <WeatherInfoBoxSmall />
        </Grid>
        <Grid item xs="auto">
          <WeatherInfoBoxSmall />
        </Grid>
        <Grid item xs="auto">
          <WeatherInfoBoxSmall />
        </Grid>
        <Grid item xs="auto">
          <WeatherInfoBoxSmall />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WeatherInfo;
