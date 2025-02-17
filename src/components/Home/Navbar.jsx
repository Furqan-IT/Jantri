import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faFolderTree } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ onSheetCreate, options = [] }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Sheet");
  const [selectedSheet, setSelectedSheet] = useState("");

  // Update dropdown selection when options change
  useEffect(() => {
    if (options.length > 0 && selectedOption === "Select Sheet") {
      setSelectedOption(options[0]);
      setSelectedSheet(options[0]);
    }
  }, [options, selectedOption]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedSheet(option);
    setIsDropdownOpen(false);
  };

  const handleCreate = () => {
    if (selectedSheet) {
      onSheetCreate(selectedSheet);
    }
  };

  return (
    <div className="navbar">
      <div className="custom-dropdown">
        <div
          className="dropdown-header"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedOption}
          <FontAwesomeIcon className="dropdown-icon" icon={faChevronDown} />
        </div>
        {isDropdownOpen && (
          <div className="dropdown-options">
            {options.map((option, index) => (
              <div
                key={index}
                className="dropdown-option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
                {index < options.length - 1 && (
                  <div className="option-border" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <button className="create-sheet" onClick={handleCreate}>
        Create Sheet
        <FontAwesomeIcon className="icons" icon={faFolderTree} />
      </button>
      <button className="days-left">230 Days Left</button>
    </div>
  );
};

export default Navbar;
