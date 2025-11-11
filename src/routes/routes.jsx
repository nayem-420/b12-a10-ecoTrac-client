import { createBrowserRouter } from "react-router";
import MainLayOuts from "../Layouts/MainLayOuts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts></MainLayOuts>,
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
