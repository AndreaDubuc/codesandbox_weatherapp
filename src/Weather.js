import React from "react";
import "./weather.css";

export default function App() {
  return (
    <div className="d-flex flex-row justify-content-evenly">
      <div className="p-2">
        <div>
          <h1 className="city">Ottawa</h1>
          <h2 className="day-hour">
            Friday
            <br />
            20:54
          </h2>
        </div>
      </div>
      <div className="p-2">
        <img
          className="mainicon"
          src="../assets/10n.png"
          alt="main forecast icon"
        ></img>
      </div>

      <div className="p-2">
        <span className="temperature" id="temperature">
          21
        </span>
        <span className="units">
          <span id="celsius-link" className="active">
            °C
          </span>
          <span> | </span>
          <span id="fahrenheit-link">°F</span>
        </span>
        <div>
          <h3 className="weather-description">Rain</h3>
        </div>
      </div>
    </div>
  );
}
