import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import Patient from "../pages/patient/Patient";
import Therapist from "../pages/therapist/Therapist";
import Login from "../components/patient/auth/Login";
import Register from "../components/patient/auth/Register";
import TherapistProfile from "../pages/patient/profile/TherapistProfile";
import TopTherapist from "../pages/patient/selection/TopTherapist";
import ByPain from "../pages/patient/selection/ByPain";
import BySpecialization from "../pages/patient/selection/BySpecialization";
import HealthAssessment from "../pages/patient/form/HealthAssessment";
import Onboard from "../pages/patient/onboarding/Onboard";
import ResLibrary from "../pages/patient/nav-items/ResLibrary";
import Analytic from "../pages/patient/nav-items/Analytic";
import Notification from "../pages/patient/nav-items/Notification";
import Chat from "../pages/patient/nav-items/Chat";
import Progress from "../pages/patient/nav-items/Progress";
import PatientProfile from "../pages/patient/profile/PatientProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/therapist", element: <Therapist /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/patient",
        element: (
          
            <Patient />
          
        ),
        children: [
          // patient routes
          //selection
          { path: "", element: <Onboard /> },
          { path: "pain", element: <ByPain /> },
          { path: "specialization", element: <BySpecialization /> },
          { path: "top-therapist", element: <TopTherapist /> },

          //profile
          { path: "therapist-profile", element: <TherapistProfile /> },
          { path: "patient-profile", element: <PatientProfile /> },

           //Navbar items
           { path: "progress", element: <Progress /> },
           { path: "chat", element: <Chat />},
           { path: "notification", element: <Notification />},
           { path: "resource-library", element: <ResLibrary /> },
           { path: "analytic", element: <Analytic /> },


           //forms
           { path: "health-assessment", element: <HealthAssessment />},
        ],
      },
    ],
  },
]);

export default router;
