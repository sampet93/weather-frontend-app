import React from "react";
import { Grid } from "@mui/material";
import WeatherInfoBoxSmall from "../WeatherInfoBoxSmall/WeatherInfoBoxSmall";
import WeatherInfoBoxBig from "../WeatherInfoBoxBig/WeatherInfoBoxBig";

import "./WeatherInfo.css";

const WeatherInfo = () => {
  return (
    <Grid container justifyContent="center">
      <WeatherInfoBoxBig />
      <WeatherInfoBoxSmall />
    </Grid>
  );
};

export default WeatherInfo;
