import React from "react";
import "./Sheetcard.css";

const Sheetcard = ({ title, icon1, label1, icon2, label2 }) => {
  return (
    <div className="sheetcard">
      <div className="left-content">
        <div className="title">{title}</div>
      </div>
      <div className="right-content">
        <div className="icon-group">
          <div className="icon">{icon1}</div>
          <div className="label">{label1}</div>
        </div>
        <div className="icon-group">
          <div className="icon">{icon2}</div>
          <div className="label">{label2}</div>
        </div>
      </div>
    </div>
  );
};

export default Sheetcard;
