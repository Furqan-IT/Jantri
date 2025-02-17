import React, { useState, useEffect } from "react";
import "./AddClient.css";
import Navbar from "./Navbar";
import Sheetcard from "./Sheetcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const AddClient = () => {
  const [sheets, setSheets] = useState([]);

  // Load sheets from localStorage when the component mounts
  useEffect(() => {
    const storedSheets = localStorage.getItem("sheets-client");
    if (storedSheets) {
      try {
        const parsedSheets = JSON.parse(storedSheets);
        if (Array.isArray(parsedSheets)) {
          setSheets(parsedSheets);
        }
      } catch (error) {
        console.error("Error parsing sheets from local storage:", error);
      }
    }
  }, []);

  // Save sheets to localStorage whenever the sheets state changes
  useEffect(() => {
    if (sheets.length > 0) {
      try {
        localStorage.setItem("sheets-client", JSON.stringify(sheets));
      } catch (error) {
        console.error("Error saving sheets to local storage:", error);
      }
    }
  }, [sheets]);

  const handleSaveClient = async (data) => {
    // Retrieve the logged-in user's ID from localStorage
    let uid = "";
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        uid = userData._id || userData.id || "";
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }

    // Create a new client object with additional properties including uid
    const newClient = {
      ...data,
      icon1: "faPencil", // Storing the icon name for later reconstruction
      icon2: "faTrash",
      label1: "Edit Name",
      label2: "Delete Sheet",
      uid, // Add the logged-in user's ID
    };

    try {
      // Send the client data to the backend API
      const response = await fetch(
        "https://asichambyal.online:3000/api/user/clients",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newClient),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save client data");
      }

      const savedData = await response.json();
      console.log("Client saved to backend:", savedData);
      alert("Client added successfully!");

      // Update state and localStorage locally only after a successful API call
      setSheets((prevSheets) => {
        const updatedSheets = [...prevSheets, newClient];
        localStorage.setItem("sheets-client", JSON.stringify(updatedSheets));
        return updatedSheets;
      });
    } catch (error) {
      console.error("Error saving client:", error);
      alert("Client not added due to some problem");
    }
  };

  // Function to get the FontAwesomeIcon component based on the icon name
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "faPencil":
        return <FontAwesomeIcon icon={faPencil} style={{ color: "#2cf22f" }} />;
      case "faTrash":
        return <FontAwesomeIcon icon={faTrash} style={{ color: "#fb1818" }} />;
      default:
        return null;
    }
  };

  return (
    <div className="homepage5">
      <Navbar onSaveClient={handleSaveClient} />
      <div className="sheetcard-container">
        {sheets.map((sheet, index) => (
          <Sheetcard
            key={index}
            title={sheet.title}
            icon1={getIconComponent(sheet.icon1)} // Reconstruct the icon component
            icon2={getIconComponent(sheet.icon2)}
            label1={sheet.label1}
            label2={sheet.label2}
            jodiRate={sheet.jodiRate}
            jodiCommission={sheet.jodiCommission}
            harafRate={sheet.harafRate}
            harafCommission={sheet.harafCommission}
            partnership={sheet.partnership}
            incentiveMonth={sheet.incentiveMonth}
            openingBalance={sheet.openingBalance}
            utarKhata={sheet.utarKhata}
          />
        ))}
      </div>
    </div>
  );
};

export default AddClient;
