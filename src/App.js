import React from "react";
import "./App.css";

import APOD from "./components/APOD";

function App() {
  return (
    <div className="app">
      <div className="container">
        <APOD />
      </div>
    </div>
  );
}

export default App;
