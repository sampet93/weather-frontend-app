import React from "react";
import WeatherInfoBoxSmall from "../WeatherInfoBoxSmall/WeatherInfoBoxSmall";
import WeatherInfoBoxBig from "../WeatherInfoBoxBig/WeatherInfoBoxBig";

import "./WeatherInfo.css";

const WeatherInfo = () => {
  return (
    <div>
      <WeatherInfoBoxBig />
      <WeatherInfoBoxSmall />
    </div>
  );
};

export default WeatherInfo;
