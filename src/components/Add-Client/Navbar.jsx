import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onSaveClient }) => {
  const [rates, setRates] = useState({
    title: "",
    jodiRate: "",
    jodiCommission: "",
    harafRate: "",
    harafCommission: "",
    partnership: "",
    incentiveMonth: "",
    openingBalance: "",
    utarKhata: "",
  });

  const handleChange = (event) => {
    setRates({
      ...rates,
      [event.target.name]: event.target.value,
    });
  };

  const handleSaveClient = () => {
    onSaveClient(rates);
  };

  return (
    <div className="navbar5">
      {/* Inputs for Add Client */}
      <div className="I1">
        <p className="nav-title1">Enter Client Name</p>
        <input
          type="text"
          className="custom-dropdown1-1"
          placeholder=""
          name="title"
          value={rates.title}
          onChange={handleChange}
        />
      </div>
      <div className="I2">
        <p className="nav-title">Jodi Rate</p>
        <input
          type="text"
          className="custom-dropdown1-2"
          placeholder=""
          name="jodiRate"
          value={rates.jodiRate}
          onChange={handleChange}
        />
      </div>
      <div className="I3">
        <p className="nav-title">Jodi Commission</p>
        <input
          type="text"
          className="custom-dropdown1-3"
          placeholder=""
          name="jodiCommission"
          value={rates.jodiCommission}
          onChange={handleChange}
        />
      </div>
      <div className="I4">
        <p className="nav-title">Haraf Rate</p>
        <input
          type="text"
          className="custom-dropdown1-4"
          placeholder=""
          name="harafRate"
          value={rates.harafRate}
          onChange={handleChange}
        />
      </div>
      <div className="I5">
        <p className="nav-title">Haraf Commission</p>
        <input
          type="text"
          className="custom-dropdown1-5"
          placeholder=""
          name="harafCommission"
          value={rates.harafCommission}
          onChange={handleChange}
        />
      </div>
      <div className="I6">
        <p className="nav-title">Partnership</p>
        <input
          type="text"
          className="custom-dropdown1-6"
          placeholder=""
          name="partnership"
          value={rates.partnership}
          onChange={handleChange}
        />
      </div>
      <div className="I7">
        <p className="nav-title"> Incentive Month</p>
        <input
          type="text"
          className="custom-dropdown1-7"
          placeholder=""
          name="incentiveMonth"
          value={rates.incentiveMonth}
          onChange={handleChange}
        />
      </div>
      <div className="I8">
        <p className="nav-title">Opening Balance</p>
        <input
          type="text"
          className="custom-dropdown1-8"
          placeholder=""
          name="openingBalance"
          value={rates.openingBalance}
          onChange={handleChange}
        />
      </div>
      <div className="I9">
        <p className="nav-title">Utar Khata</p>
        <input
          type="text"
          className="custom-dropdown1-9"
          placeholder=""
          name="utarKhata"
          value={rates.utarKhata}
          onChange={handleChange}
        />
      </div>

      {/* Save Client Button */}
      <button className="days-left-btn" onClick={handleSaveClient}>
        Save Client
      </button>
    </div>
  );
};

export default Navbar;
