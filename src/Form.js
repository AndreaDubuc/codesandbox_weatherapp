import React from "react";
import "./form.scss";

export default function Form() {
  return (
    <div className="Form">
      <form className="search-form">
        <input
          type="text"
          placeholder="City..."
          autoComplete="off"
          className="input-box"
        ></input>{" "}
        <button type="button" className="location">
          {" "}
          <i className="fas fa-map-marker-alt"></i>{" "}
        </button>
        <button className="search-box">Search</button>
      </form>
    </div>
  );
}
