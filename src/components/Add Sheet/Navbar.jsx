import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onSheetSave }) => {
  const [sheetName, setSheetName] = useState("");

  const handleCreate = () => {
    if (sheetName.trim()) {
      onSheetSave(sheetName);
      setSheetName(""); // Clear input after creating a sheet
    }
  };
  return (
    <div className="navbar2">
      <input
        type="text"
        className="custom-dropdown2"
        placeholder="Enter Sheet Name"
        value={sheetName}
        onChange={(e) => setSheetName(e.target.value)}
      />
      <button className="create-sheet2" onClick={handleCreate}>
        Save Sheet
      </button>
      <button className="days-left">230 Days Left</button>
    </div>
  );
};

export default Navbar;
