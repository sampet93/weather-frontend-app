import React from "react";
import "./NavBar.css";

const AppBar = ({ header }) => {
  return (
    <div className="top-header">
      <h2>{header}</h2>
    </div>
  );
};

export default AppBar;
