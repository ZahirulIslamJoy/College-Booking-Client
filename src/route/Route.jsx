import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../home/home/Home";
import Register from "../home/register/Register";
import Login from "../home/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
        {
            path: "/register",
            element:<Register></Register>, 
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        

    ]
  },
]);

export default router;