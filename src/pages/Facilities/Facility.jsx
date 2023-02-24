import React from "react";
import { GiMaterialsScience } from "react-icons/gi";
import "./Facilities.css";

const Facility = (props) => {
  return (
    <div className="facilityCardName">
      <div className="facilityCardNameWrapper">
        <div className="facilityNameIcon">{props.ico}</div>
        <div className="facilityNameText">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Facility;
