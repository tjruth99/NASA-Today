import React from "react";
import "./App.css";

import NASALogo from "./nasa-logo.png";
import APOD from "./components/APOD";

function App() {
  return (
    <div className="app">
      <div className="header">
        <img src={NASALogo} className="logo" alt="NASA Logo" />
        <span className="title">Astronomy Pictures of the Day</span>
      </div>
      <div className="container">
        <APOD />
      </div>
      <div className="footer">
        Website made by Tyler Ruth{" "}
        <a className="github-link" href="https://github.com/tjruth99">
          (@tjruth99)
        </a>{" "}
        and is not affiliated with NASA
      </div>
    </div>
  );
}

export default App;
