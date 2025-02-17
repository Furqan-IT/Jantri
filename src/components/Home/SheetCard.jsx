import React, { useState } from "react";
import "./SheetCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus, faFilePen } from "@fortawesome/free-solid-svg-icons";
import Result from "./Result";

const SheetCard = ({ title, date, icon1, icon2, label1, label2 }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="sheetcard">
      <div className="left-content">
        <div className="title">{title}</div>
        <div className="date">{date}</div>
      </div>
      <div className="right-content">
        <div className="icon-group">
          <div className="icon">{icon1}</div>
          <a className="label" onClick={() => setIsPopupOpen(true)}>
            {label1}
          </a>
          {isPopupOpen && (
            <Result title={title} onClose={() => setIsPopupOpen(false)} />
          )}
        </div>
        <div className="icon-group">
          <div className="icon">{icon2}</div>
          <div className="label">{label2}</div>
        </div>
      </div>
    </div>
  );
};

export default SheetCard;
