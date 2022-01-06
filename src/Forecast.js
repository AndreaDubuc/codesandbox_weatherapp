import React from "react";
import "./forecast.scss";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          Sat
          <br />
          11°
          <br />
          
          <img className="Forecast-icon" src="10n.png" alt="icon" />
        </div>
        <div className="col">
          Sun
          <br />
          -4°
          <br />
          <img className="Forecast-icon" src="10n.png" alt="icon" />
        </div>
        <div className="col">
          Mon
          <br />
          16°
          <br />
          <img className="Forecast-icon" src="10n.png" alt="icon" />
        </div>
        <div className="col">
          Tue
          <br />
          19°
          <br />
          <img className="Forecast-icon" src="10n.png" alt="icon" />
        </div>
        <div className="col">
          Wed
          <br />
          5°
          <br />
          <img className="Forecast-icon" src="10n.png" alt="icon" />
        </div>
      </div>
    </div>
  );
}
