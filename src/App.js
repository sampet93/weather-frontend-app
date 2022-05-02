import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import DropDown from "./components/DropDown/DropDown";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

import fetchWeatherData from "./fetchWeatherData";

import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState("");

  useEffect(() => {
    setWeatherData(fetchWeatherData());
  }, []);

  return (
    <div>
      <NavBar header="Säätutka" />
      <DropDown />
      <WeatherInfo />
    </div>
  );
}

export default App;
