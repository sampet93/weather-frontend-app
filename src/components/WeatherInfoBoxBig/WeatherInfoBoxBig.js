import React from "react";
import { Grid } from "@mui/material";
import "./WeatherInfoBoxBig.css";

const WeatherInfoBoxBig = () => {
  return (
    <Grid container justifyContent="center" className="parent-container">
      <Grid item xs={6}>
        <div className="flex-container top-left-container">
          <p>Testi</p>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="flex-container top-right-container">
          <p>Testi</p>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="flex-container bottom-left-container">
          <p>Testi</p>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="flex-container bottom-right-container">
          <p>Testi</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default WeatherInfoBoxBig;
