import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../home/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>
  },
]);

export default router;