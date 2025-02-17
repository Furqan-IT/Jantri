import React from "react";
import "./Account.css";
import Navbar from "./Navbar";
import SheetCard from "./SheetCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Account = () => {
  return (
    <div className="homepage">
      <Navbar />
      <SheetCard
        title="Ajay Diwan"
        daysleft="230 Days"
        mobile="0313045040"
        password="password"
        lable1="All"
        label2="5"
        icon1=<FontAwesomeIcon icon={faPencil} style={{ color: "#2cf22f" }} />
        label3="Edit"
      />
    </div>
  );
};

export default Account;
