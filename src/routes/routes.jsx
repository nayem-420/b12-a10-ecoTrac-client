import { createBrowserRouter } from "react-router";
import MainLayOuts from "../Layouts/MainLayOuts";
import Home from "../Pages/Home";
import ChallengeDetail from "../Pages/ChallengeDetail";
import MyActivities from "../Pages/MyActivities";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgetPassword from "../Pages/ForgetPassword";
import NotFound from "../Components/NotFound";
import PrivateRoute from "../Components/PrivateRoute";
import Challenges from "../Pages/Challenges";
import AllChallenges from "../Pages/AllChallenge";
import JoinChallenge from "../Pages/JoinChallenge";
import AddChallenge from "../Pages/AddChallenge";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/challenges",
        element: <Challenges />,
      },
      {
        path: "/all-challenges",
        element: <AllChallenges />,
      },

      {
        path: "/challenges/:id",
        element: <ChallengeDetail />,
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
