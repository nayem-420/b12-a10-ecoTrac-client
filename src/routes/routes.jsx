import { createBrowserRouter } from "react-router";
import MainLayOuts from "../Layouts/MainLayOuts";
import Home from "../Pages/Home";
import AllChallenges from "../Pages/AllChallenges";
import ChallengeDetail from "../Pages/ChallengeDetail";
import JoinChallenge from "../Pages/JoinChallenge";
import MyActivities from "../Pages/MyActivities";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgetPassword from "../Pages/ForgetPassword";
import NotFound from "../Components/NotFound";
import PrivateRoute from "../Components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // Public Routes
      {
        path: "/challenges",
        element: <AllChallenges />, // Browse all challenges
      },
      {
        path: "/challenges/:id",
        element: <ChallengeDetail />, // Challenge detail (public)
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },

      // Protected Routes
      {
        path: "/challenges/add",
        element: (
          <PrivateRoute>
            <AddChallenge />
          </PrivateRoute>
        ),
      },
      {
        path: "/challenges/join/:id",
        element: (
          <PrivateRoute>
            <JoinChallenge />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-activities",
        element: (
          <PrivateRoute>
            <MyActivities />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
