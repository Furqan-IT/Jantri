import React from "react";
import "./Sheetcard.css";
const Sheetcard = ({ title, label1, label2 }) => {
  return (
    <div className="sheetcard-khata">
      <div className="left-content">
        <div className="title">{title}</div>
      </div>
      <div className="right-content-khata">
        <div className="icon-group">
          <a className="label1-khata">{label1}</a>
        </div>
        <div className="icon-group">
          <div className="label2-khata">{label2}</div>
        </div>
      </div>
    </div>
  );
};

export default Sheetcard;
