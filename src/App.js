import NavBar from "./components/shared/NavBar/NavBar";
import DropDown from "./components/DropDown/DropDown";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar header="Säätutka" />
      <DropDown />
    </div>
  );
}

export default App;
