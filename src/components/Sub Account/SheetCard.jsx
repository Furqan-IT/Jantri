import React from "react";
import "./SheetCard.css";

const SheetCard = ({
  title,
  mobile,
  password,
  label1,
  label2,
  lable3,
  icon1,
  daysleft,
}) => {
  return (
    <div className="sheetcard">
      <div className="left-content">
        <div className="title">
          {title}<p className="title-2">{daysleft}</p>
        </div>
        <div className="mobile-no">Mobile Number - {mobile}</div>
        <div className="password">Password - {password}</div>
      </div>
      <div className="right-content">
        <div className="icon-group">
          <div className="icon">Sheets</div>
          <div className="label">{label1}</div>
        </div>
        <div className="icon-group">
          <div className="icon">Clint,s</div>
          <div className="label">{label2}</div>
        </div>
        <div className="icon-group">
          <div className="icon">{icon1}</div>
          <div className="label">{lable3}</div>
        </div>
      </div>
    </div>
  );
};

export default SheetCard;
