import React from 'react';
import './App.css';
import MapContainer from './GoogleMap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <input id="yearSlider" className="slider" data-slider-id='yearSliderIncremental' type="text" data-slider-min="2000" data-slider-max="2040" data-slider-step="1" data-slider-value="2020"/>
      <MapContainer></MapContainer>
        
      </header>
    </div>
  );
}

export default App;
