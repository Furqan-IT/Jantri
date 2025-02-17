import React, { useEffect, useState } from "react";
import "./AddSheet.css";
import { faPen, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import Sheetcard from "./Sheetcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddSheet = () => {
  const [sheets, setSheets] = useState([]);

  // Load sheets from localStorage on page load (using global "sheets")
  useEffect(() => {
    const storedSheets = JSON.parse(localStorage.getItem("sheets")) || [];
    setSheets(storedSheets);
  }, []);

  // Function to handle sheet creation
  const handleCreateSheet = (sheetTitle) => {
    // Check for duplicate (case-insensitive)
    const exists = sheets.some(
      (sheet) => sheet.title.toLowerCase() === sheetTitle.toLowerCase()
    );
    if (exists) {
      alert("Sheet already exists!");
      return;
    }

    const newSheet = {
      title: sheetTitle,
    };

    const updatedSheets = [...sheets, newSheet];
    setSheets(updatedSheets);
    localStorage.setItem("sheets", JSON.stringify(updatedSheets)); // Persist sheets globally
  };

  return (
    <div className="homepage">
      <Navbar onSheetSave={handleCreateSheet} />
      <div className="sheetcard-container">
        {sheets.map((sheet, index) => (
          <Sheetcard
            key={index}
            title={sheet.title}
            icon1={
              <FontAwesomeIcon icon={faPencil} style={{ color: "#2cf22f" }} />
            }
            icon2={
              <FontAwesomeIcon icon={faTrash} style={{ color: "#fb1818" }} />
            }
            label1="Edit Name"
            label2="Delete Sheet"
          />
        ))}
      </div>
    </div>
  );
};

export default AddSheet;
