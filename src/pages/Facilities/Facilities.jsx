import React from "react";
import Facility from "./Facility";
import { GiMaterialsScience } from "react-icons/gi";
import { GiElectricalResistance } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiBuilding } from "react-icons/bi";
import { GiThreeFriends } from "react-icons/gi";
import FacilityCard from "./FacilityCard";
import labImg from "../../assets/lab2.jpg";
import teacherImg from "../../assets/teacher1.jpg";
import studentImg from "../../assets/students.jpg";
import campusImg from "../../assets/campus1.jpg";

const Facilities = () => {
  return (
    <div className="facilities container">
      <div className="facilitiesWrapper">
        <h2 className="facilitiesHeading">Our Facilities</h2>
        <div className="facilityNameWrapper">
          <Facility ico={<GiMaterialsScience />} text={"Hi-Tech Labs"} />
          <Facility ico={<FaChalkboardTeacher />} text={"Best Teachers"} />
          <Facility ico={<BiBuilding />} text={"Big Campus"} />
          <Facility ico={<GiThreeFriends />} text={"Student Friendly"} />
        </div>
        <h2 className="facilitiesHeading">Take a Look At Our Institution</h2>
        <div className="facilityCardsWrapper">
          <FacilityCard img={labImg} text={"Our Hi-tech Lab"} />
          <FacilityCard img={teacherImg} text={"Best Techers"} />
          <FacilityCard img={campusImg} text={"Well Equiped Campus"} />
          <FacilityCard img={studentImg} text={"Our Students"} />
          <FacilityCard img={labImg} text={"Our Hi-tech Lab"} />
          <FacilityCard img={teacherImg} text={"Best Techers"} />
          <FacilityCard img={campusImg} text={"Well Equiped Campus"} />
          <FacilityCard img={studentImg} text={"Our Students"} />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
