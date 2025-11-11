import { createBrowserRouter } from "react-router";
import MainLayOuts from "../Layouts/MainLayOuts";
import Challenges from "../Pages/Challenges";
import MyActivities from "../Pages/MyActivities";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts></MainLayOuts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/challenges",
        element: <Challenges></Challenges>,
      },
      {
        path: "/my-activities",
        element: <MyActivities></MyActivities>,
      },
    ],
  },
  {
    path: "/auth",
    element: <div>auth layouts</div>,
  },
  {
    path: "/*",
    element: <div>404 Not found</div>,
  },
]);
