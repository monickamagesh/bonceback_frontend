import React from "react";
import TherapistCard from "../../../components/patient/selection/TherapistCard";

const TopTherapist = () => {
  const therapists = [
    {
      name: "Dr. Kat Mach",
      specialization: "Neurological Physical Therapist",
      rating: 4.0,
      image: "https://via.placeholder.com/248x237",
    },
    {
      name: "Dr. Dipu Karunan",
      specialization: "Orthopedic Physical Therapist",
      rating: 4.0,
      image: "https://via.placeholder.com/248x237",
    },
    {
      name: "Dr. Vignesh Prabhas",
      specialization: "Hand & Health Physical Therapist",
      rating: 4.0,
      image: "https://via.placeholder.com/248x237",
    },
    {
      name: "Dr. Diti V Jain",
      specialization: "Sports Physical Therapist",
      rating: 4.0,
      image: "https://via.placeholder.com/248x237",
    },
    {
      name: "Dr. Monicka Magesh",
      specialization: "Pediatric Physical Therapist",
      rating: 4.0,
      image: "https://via.placeholder.com/248x237",
    },
    {
      name: "Dr. Ram Charan",
      specialization: "General Physical Therapist",
      rating: 3.0,
      image: "https://via.placeholder.com/248x237",
    },
    {
      name: "Dr. John Peterson",
      specialization: "Lymphatic Physical Therapist",
      rating: 3.0,
      image: "https://via.placeholder.com/248x237",
    },
    {
      name: "Dr. Sonali Raikar",
      specialization: "Respiratory Physical Therapist",
      rating: 3.0,
      image: "https://via.placeholder.com/248x237",
    },
    {
      name: "Dr. Vizhi Prabha",
      specialization: "Cardiovascular Physical Therapist",
      rating: 3.0,
      image: "https://via.placeholder.com/248x237",
    },
    {
      name: "Dr. Rohit Chawla",
      specialization: "Workplace Physical Therapist",
      rating: 3.0,
      image: "https://via.placeholder.com/248x237",
    },
    {
      name: "Dr. Hira Nandhini",
      specialization: "Women’s Health Physical Therapist",
      rating: 3.0,
      image: "https://via.placeholder.com/248x237",
    },
    {
      name: "Dr. Anurag Krishna",
      specialization: "Geriatric Physical Therapist",
      rating: 3.0,
      image: "https://via.placeholder.com/248x237",
    },
  ];

  return (
    <div className="w-[1080px] mx-auto bg-white border rounded-xl ">
      <div className="flex w-2/3 mx-auto py-8 justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Top Rated Therapists
        </h1>
        <div className="flex items-center gap-4">
          <div className="text-lg font-medium text-gray-600">page 01/24</div>
          <button className="px-6 py-3 bg-white border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white">
            Prev
          </button>
          <button className="px-6 py-3 bg-white border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white">
            Next
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 px-[96px]">
        {therapists.map((therapist, index) => (
          <TherapistCard
            key={index}
            name={therapist.name}
            specialization={therapist.specialization}
            rating={therapist.rating}
            image={therapist.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TopTherapist;
