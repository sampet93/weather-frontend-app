import React from "react";
import "./DropDown.css";

const DropDown = ({ selectHandler, items }) => {
  return (
    <div className="dropdown-container">
      <select
        onChange={(e) => selectHandler(Number(e.target.value))}
        name="locations"
        id="locations"
        className="dropdown-select"
      >
        {items.map((city) => {
          return (
            <option value={city.id} key={city.id}>
              {city.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
