import React from "react";
import "./NavBar.css";

const AppBar = ({ header }) => {
  return (
    <div className="top-header">
      <h1>{header}</h1>
    </div>
  );
};

export default AppBar;
