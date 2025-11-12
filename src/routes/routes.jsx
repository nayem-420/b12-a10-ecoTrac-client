import { createBrowserRouter } from "react-router";
import MainLayOuts from "../Layouts/MainLayOuts";
import Challenges from "../Pages/Challenges";
import MyActivities from "../Pages/MyActivities";
import Home from "../Pages/Home";
import AllChallenges from "../Pages/AllChallenge";
import NotFound from "../Components/NotFound";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
        element: <AllChallenges></AllChallenges>,
      },
      {
        path: "/my-activities",
        element: <MyActivities></MyActivities>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);
