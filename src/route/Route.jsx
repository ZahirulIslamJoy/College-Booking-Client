import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../home/home/Home";
import Register from "../home/register/Register";
import Login from "../home/login/Login";
import College from "../navpages/college/College";
import ClgDetails from "../navpages/college/ClgDetails";
import Admission from "../navpages/admission/Admission";
import AdmissionDetails from "../navpages/admission/AdmissionDetails";
import Myclg from "../navpages/myclg/Myclg";
import Main from "../main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
        {
            path: "/register",
            element:<Register></Register>, 
        },
        {
            path: "/",
            element:<Home></Home>, 
        },
        
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path: "/clg",
            element:<College></College>
        },
        {
            path: "/clg/:id",
            element:<ClgDetails></ClgDetails>
        },
        {
            path: "/admission",
            element:<Admission></Admission>,
        },
        {
            path: "/admission/:id",
            element:<AdmissionDetails></AdmissionDetails>,
        },
        {
            path: "/myclg",
            element:<Myclg></Myclg>,
        },

    ]
  },
]);

export default router;