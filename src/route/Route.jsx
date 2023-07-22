import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../home/home/Home";
import Register from "../home/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
        {
            path: "/register",
            element:<Register></Register>, 
        }
    ]
  },
]);

export default router;