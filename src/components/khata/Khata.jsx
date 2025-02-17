import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sheetcard from "./Sheetcard";
import "./Khata.css";

const Khata = () => {
  return (
    <div className="homepage3">
      <Navbar />
      <div className="Homepage-content">
        <div className="sheetcard-container3">
          {/* {sheets.map((sheet, index) => ( */}
          <Sheetcard
            // key={index}
            title="Ajay Kumar"
            label1="5000"
            label2="17600"
          />
          <Sheetcard
            // key={index}
            title="Ajay Kumar"
            label1=""
            label2="1600"
          />
          <Sheetcard
            // key={index}
            title="Ajay Kumar"
            label1="2400"
            label2="17800"
          />
          {/* ))} */}
        </div>
        <div className="sheetcard-container4">
          <Sheetcard
            title="FB 27-10-24"
            result="Result 38"
            amount1="5310"
            amount2="18500"
            clientName="Ajay Kumar"
            plus="5000"
            minus="-4500"
          />
          <Sheetcard
            title="GB 27-10-24"
            result="Result 38"
            amount1="2400"
            amount2="17800"
            clientName="Ajay Kumar"
            plus=""
            minus="-4500"
          />
          <Sheetcard
            title="GL 27-10-24"
            result="Result 38"
            amount1="1350"
            amount2="17600"
            clientName="Ajay Kumar"
            plus="310"
            minus="-4500"
          />
          <Sheetcard
            title="DS 27-10-24"
            result="Result 38"
            amount1="900"
            amount2="17600"
            clientName="Ajay Kumar"
            plus=""
            minus="-4500"
          />
          <Sheetcard
            title="SC 27-10-24"
            result="Result 38"
            amount1="1560"
            amount2="17600"
            clientName="Ajay Kumar"
            plus=""
            minus="-4500"
          />
        </div>
      </div>
    </div>
  );
};

export default Khata;
