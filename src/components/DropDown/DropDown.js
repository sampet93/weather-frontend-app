import React from "react";
import "./DropDown.css";

const DropDown = () => {
  return (
    <div className="dropdown-container">
      <select name="locations" id="locations">
        <option value="all">Kaikki kaupungit</option>
        <option value="tampere">Tampere</option>
        <option value="jyvaskyla">Jyväskylä</option>
        <option value="kuopio">Kuopio</option>
        <option value="espoo">Espoo</option>
      </select>
    </div>
  );
};

export default DropDown;
