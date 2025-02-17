import React from "react";
import "./Result.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Result = ({ title, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2>{title}</h2>
          <FontAwesomeIcon
            icon={faTimes}
            className="close-icon"
            onClick={onClose}
          />
        </div>
        <p className="popup-subtitle">Add result</p>
        <div className="input-group">
          <div className="input-field">
            <label>Jodi</label>
            <input type="text" />
          </div>
          <div className="input-field">
            <label>In</label>
            <input type="text" />
          </div>
          <div className="input-field">
            <label>Out</label>
            <input type="text" />
          </div>
        </div>
        <div className="button-group">
          <button className="btn undeclared">Undeclared</button>
          <button className="btn declared">Declared</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
