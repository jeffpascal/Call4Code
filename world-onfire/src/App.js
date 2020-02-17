import React from "react";
import "./App.css";
import Map from "./GoogleMap";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  {
    id: 1,
    name: "Park Slope",
    latitude: "40.6710729",
    longitude: "-73.9988001"
  },
  {
    id: 2,
    name: "Bushwick",
    latitude: "40.6942861",
    longitude: "-73.9389312"
  },
  {
    id: 3,
    name: "East New York",
    latitude: "40.6577799",
    longitude: "-73.9147716"
  },
  {
    id: 4,
    name: "Australia",
    latitude: "-24.810673",
    longitude: "120.514523"
  },
  {
    id: 5,
    name: "Australia 2",
    latitude: "-27.473035",
    longitude: "143.936758"
  }
];
data[0].circle = {
  radius: 900000,
  options: {
    strokeColor: "#ff0000"
  }
};
data[3].circle = {
  radius: 900000,
  options: {
    strokeColor: "#ff0000"
  }
};

data[4].circle = {
  radius: 900000,
  options: {
    strokeColor: "#ff0000"
  }
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input
          id="yearSlider"
          className="slider"
          data-slider-id="yearSliderIncremental"
          type="text"
          data-slider-min="2000"
          data-slider-max="2040"
          data-slider-step="1"
          data-slider-value="2020"
        />
        <Map
          center={{ lat: 40.64, lng: -73.96 }}
          zoom={2}
          places={data}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCTTduBC1YUDGO5gLKi9edM76J0WPoB6EE"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `800px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </header>
    </div>
  );
}

export default App;
