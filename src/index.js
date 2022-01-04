import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form.js";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";

import "./index.css";

function WeatherApp() {
  return (
    <div>
      <div className="container">
        <Form />
        <Weather />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherApp />, rootElement);
