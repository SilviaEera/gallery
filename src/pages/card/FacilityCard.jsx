import React from "react";
import "./Facilities.css";

const FacilityCard = (props) => {
  return (
    <div className="facilityCard">
      <div className="facilityCardWrapper">
        <div className="facilityCardImg">
          <img src={props.img} alt="" />
        </div>
        <div className="facilityCardText">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
