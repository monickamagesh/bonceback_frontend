import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import TherapistCard from "../../components/patient/selection/TherapistCard";
import TopTherapist from "./selection/TopTherapist";

const Patient = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div>Patient main screen - monicka version</div>
      <TopTherapist />
    </>
  );
};

export default Patient;
