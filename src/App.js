import NavBar from "./components/NavBar/NavBar";
import DropDown from "./components/DropDown/DropDown";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar header="Säätutka" />
      <DropDown />
      <WeatherInfo />
    </div>
  );
}

export default App;
