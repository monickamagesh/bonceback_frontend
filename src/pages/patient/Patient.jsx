import React from "react";
import PatientSidebar from "../../components/common/PatientSidebar";
import TopTherapist from "./selection/TopTherapist";

const Patient = () => {
  return (
    <section className="flex flex-row  gap-4 items-start justify-start bg-[#F0F0F0]">
      <header className="fixed top-0 m-4 rounded-2xl bg-white p-4 z-40  w-[20%] h-screen">
        <PatientSidebar />
      </header>
      <section className="lg:w-1/5 sm:w-2/5 h-screen w-ful mr-16"></section>
      <main className="my-4">
        <TopTherapist />
      </main>
    </section>
  );
};

export default Patient;
