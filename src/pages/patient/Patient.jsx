import React from "react";
import Sidebar from "../../components/common/Sidebar";
import TopTherapist from "./selection/TopTherapist";

const Patient = () => {
  return (
    <section className="flex flex-row gap-4 items-start justify-start">
      <header className="fixed top-20 p-8 z-40 w-[20%] h-screen">
        <Sidebar />
      </header>
      <section className="lg:w-1/5 sm:w-2/5 h-screen w-full"></section>
      <main className="p-8 bg-white w-3/4 border mt-5">
        <TopTherapist />
      </main>
    </section>
  );
};

export default Patient;
