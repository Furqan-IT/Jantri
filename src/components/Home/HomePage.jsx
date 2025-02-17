import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import "./HomePage.css"; // Ensure this file is updated
import Navbar from "./Navbar";
import SheetCard from "./SheetCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus, faFilePen } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  // globalSheets: list of sheet names (strings) from AddSheet page (global list)
  const [globalSheets, setGlobalSheets] = useState([]);
  // createdSheets: sheetcards created on the HomePage via the Create Sheet button
  const [createdSheets, setCreatedSheets] = useState([]);

  // Load global sheets from localStorage on page load and extract titles only
  useEffect(() => {
    const storedSheets = JSON.parse(localStorage.getItem("sheets")) || [];
    const sheetTitles = storedSheets.map((sheet) => sheet.title);
    setGlobalSheets(sheetTitles);
  }, []);

  // Function to handle sheet creation on HomePage via dropdown
  const handleCreateSheet = (sheetTitle) => {
    // Check if a sheetcard for this title already exists (case-insensitive)
    const exists = createdSheets.some(
      (sheet) => sheet.title.toLowerCase() === sheetTitle.toLowerCase()
    );
    if (exists) {
      alert("Sheet already created on Home page");
      return;
    }
    // Create new sheet card
    const newSheet = {
      title: sheetTitle,
      date: `Date: ${new Date().toLocaleDateString("en-GB")}`,
    };
    setCreatedSheets([...createdSheets, newSheet]);
  };

  return (
    <div className="homepage">
      {/* Pass globalSheets as dropdown options */}
      <Navbar onSheetCreate={handleCreateSheet} options={globalSheets} />
      <div className="sheetcard-container">
        {createdSheets.map((sheet, index) => (
          <SheetCard
            key={index}
            title={sheet.title}
            date={sheet.date}
            icon1={<FontAwesomeIcon icon={faFileCirclePlus} />}
            icon2={<FontAwesomeIcon icon={faFilePen} />}
            label1="Add Result"
            label2="Open Sheet"
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
