import React from "react";

import "./WeatherInfoBoxSmall.css";

const WeatherInfoBoxSmall = ({ forecast }) => {
  return (
    <div className="parent-container">
      <div className="top-container">
        <p>{forecast.dt_txt.substring(forecast.dt_txt.length - 8, forecast.dt_txt.length - 3)}</p>
        <img
          className="image-small"
          src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
        />
        <h3>{Math.round(forecast.main.temp)} &deg;C</h3>
      </div>
      <div className="bottom-container">
        <p>{Math.round(forecast.wind.speed * 10) / 10} m/s</p>
        <p>{forecast.main.humidity} %</p>
        <p>{forecast.rain ? forecast.rain["3h"] : 0} mm</p>
      </div>
    </div>
  );
};

export default WeatherInfoBoxSmall;
