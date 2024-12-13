import { createBrowserRouter } from "react-router-dom";
import React from 'react'
import App from "../App";
import Home from "../pages/landing/Home";
import Patient from "../pages/patient/Patient";
import Therapist from "../pages/therapist/Therapist";
import Login from "../components/patient/auth/Login";
import Register from "../components/patient/auth/Register";
import TherapistProfile from "../pages/patient/profile/TherapistProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Patient /> },
            { path: "/patient", element: <Patient /> },
            { path: "/therapist", element: <Therapist /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/therapistprofile", element: <TherapistProfile /> },


        ]
    }

]);

export default router;