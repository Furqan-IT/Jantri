import React from "react";
import "./Sheetcard.css";
const Sheetcard = ({
  title,
  jodiRate,
  jodiCommission,
  harafRate,
  harafCommission,
  partnership,
  incentiveMonth,
  icon1,
  label1,
  icon2,
  label2,
  openingBalance,
  utarKhata,
}) => {
  return (
    <div className="sheetcard-client">
      <div className="top-content">
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
      <div className="sheetcard-bottom-content">
        <div className="bottom-item">
          <span className="label1">Jodi Rate</span>
          <span className="value1">{jodiRate}</span>
        </div>
        <div className="bottom-item">
          <span className="label1">Jodi Commission</span>
          <span className="value1">{jodiCommission}</span>
        </div>
        <div className="bottom-item">
          <span className="label1">Haraf Rate</span>
          <span className="value1">{harafRate}</span>
        </div>
        <div className="bottom-item">
          <span className="label1">Haraf Commission</span>
          <span className="value1">{harafCommission}</span>
        </div>
        <div className="bottom-item">
          <span className="label1">Partnership</span>
          <span className="value1">{partnership}</span>
        </div>
        <div className="bottom-item">
          <span className="label1">Incentive Month</span>
          <span className="value1">{incentiveMonth}</span>
        </div>
      </div>
    </div>
  );
};

export default Sheetcard;
