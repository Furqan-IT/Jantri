import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar4">
      {/* Custom Select Sheet Dropdown */}
      {/* Input for Sheet Name */}
      <input
        type="text"
        className="custom-dropdown3"
        placeholder="Enter Name"
      />
      <input type="text" className="custom-dropdown4" placeholder="Mobile No" />
      <input type="text" className="custom-dropdown5" placeholder="Password" />

      {/* Days Left Button */}
      <button className="days-left-btn">Save</button>
    </div>
  );
};

export default Navbar;
