import React from 'react';
import { NavLink } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
const Header = () => {
  const { user, logout } = useAuth();
  console.log(user?.displayName);
    return (
      <div className="bg-green-700 h-18 p-4 flex px-5 fixed top-0 inset-x-0">
        <NavLink
          className="font-bold border border-gray-300 hover:border-red-200 py-0 px-4 mx-4 text-white"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className="font-bold border hover:border-red-200 py-0 px-4 mx-4 text-white"
          to="/product"
        >
          Product
        </NavLink>
        <NavLink
          className="font-bold border hover:border-red-200 py-0 px-4 mx-4 text-white"
          to="/review"
        >
          Review
        </NavLink>
        <NavLink
          className="font-bold border hover:border-red-200 py-0 px-4 mx-4 text-white"
          to="/career"
        >
          Career
        </NavLink>
        <NavLink
          className="font-bold border hover:border-red-200 py-0 px-4 mx-4 text-white"
          to="/about"
        >
          About Us
        </NavLink>
        <NavLink
          className="font-bold border hover:border-red-200 py-0 px-4 mx-4 text-white"
          to="/contact"
        >
          Contact Us
        </NavLink>
        <span className="font-bold border border-gray-300 hover:border-red-200 py-0 px-4 mx-4 text-white">
          {user.email}
        </span>
        {user.email ? (
          <button
            className="font-bold border border-gray-300 hover:border-red-200 py-0 px-4 mx-4 text-white"
            type="button"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <NavLink
            className="font-bold border hover:border-red-200 py-0 px-4 mx-4 text-white"
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    );
};

export default Header;