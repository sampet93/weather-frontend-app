import React from "react";

import "./WeatherInfoBoxSmall.css";

const WeatherInfoBoxSmall = () => {
  return (
    <div className="parent-container">
      <div className="top-container">
        <p>15:00</p>
        <img className="image-small" src="https://openweathermap.org/img/wn/01n@2x.png" />
        <h3>-1 C</h3>
      </div>
      <div className="bottom-container">
        <p>2.1 m/s</p>
        <p>5 %</p>
        <p>1 mm</p>
      </div>
    </div>
  );
};

export default WeatherInfoBoxSmall;
