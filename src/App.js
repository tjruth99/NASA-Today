import React from 'react';
import './App.css';

import APOD from "./components/APOD";
import CuriosityPictures from './components/RoverPhotos';

function App() {
  return (
    <div className="App">
      <APOD />
      <CuriosityPictures />
    </div>
  );
}

export default App;
