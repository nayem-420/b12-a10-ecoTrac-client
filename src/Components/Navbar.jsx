import React from "react";
import logo from "../assets/ecoTrac-logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  const activeRoutes = ({ isActive }) =>
    isActive
      ? "bg-gradient-to-r from-green-500 via-emerald-400 to-teal-400 text-white font-semibold rounded-md px-3 py-1 shadow-md transition-all duration-300"
      : "text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-100 hover:to-teal-100 rounded-md px-3 py-1 transition-all duration-300";
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink className={activeRoutes} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={activeRoutes} to={"/challenges"}>
                Challenges
              </NavLink>
            </li>
            <li>
              <NavLink className={activeRoutes} to={"/my-activities"}>
                MyActivities
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="btn btn-ghost">
          <img src={logo} className="w-8 rounded-full" alt="" />
          <NavLink to={'/'} className="text-xl font-bold">
            eco<span className="text-blue-500">Trac</span>
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className={activeRoutes} to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={activeRoutes} to={"/challenges"}>
              Challenges
            </NavLink>
          </li>
          <li>
            <NavLink className={activeRoutes} to={"/my-activities"}>
              MyActivities
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
