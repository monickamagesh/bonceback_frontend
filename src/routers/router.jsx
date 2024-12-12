import { createBrowserRouter } from "react-router-dom";
import React from 'react'
import App from "../App";
import Home from "../pages/landing/Home";
import Patient from "../pages/patient/Patient";
import Therapist from "../pages/therapist/Therapist";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Patient /> },
            { path: "/patient", element: <Patient /> },
            { path: "/therapist", element: <Therapist /> },


        ]
    }

]);

export default router;