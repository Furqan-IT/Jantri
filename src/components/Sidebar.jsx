import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faUsers,
  faEnvelope,
  faCircleInfo,
  faFileInvoice,
  faHouseChimney,
  faPrint,
  faRectangleList,
  faSheetPlastic,
  faUserPlus,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Fallback values if no user is found
  const userName = user?.name || "Guest";
  const userEmail = user?.email || "guest@example.com";
  const firstLetter = userName.charAt(0).toUpperCase();

  // Logout function
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user"); // Remove user data from localStorage
    setIsAuthenticated(false); // Update authentication state
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="user-info">
          <div className="user-circle">{firstLetter}</div>
          <div className="user-details">
            <h3>{userName}</h3>
            <p>{userEmail}</p>
          </div>
        </div>
        <ul>
          <li>
            <Link to="/home" className="home-text">
              <FontAwesomeIcon className="icon" icon={faHouseChimney} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/add-sheet">
              <FontAwesomeIcon className="icon" icon={faSheetPlastic} />
              Add Sheet
            </Link>
          </li>
          <li>
            <Link to="/add-client">
              <FontAwesomeIcon className="icon" icon={faUserPlus} />
              Add Client
            </Link>
          </li>
          <li>
            <Link to="/khata">
              <FontAwesomeIcon className="icon" icon={faRectangleList} />
              Khata
            </Link>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faPrint} /> Print
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faFileInvoice} /> Account
              report
            </a>
          </li>
          <li>
            <Link to="/sub-account">
              <FontAwesomeIcon className="icon" icon={faUsers} />
              Sub account
            </Link>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              Support
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faFileLines} />
              Terms and condition
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faCircleInfo} />
              About software
            </a>
          </li>
          <li>
            <a onClick={handleLogout}>
              <FontAwesomeIcon className="icon" icon={faPowerOff} />
              Logout
            </a>
          </li>
        </ul>
        <p className="app-version">App Version 1.1</p>
      </div>
    </div>
  );
};

export default Sidebar;
