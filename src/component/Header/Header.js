import React from 'react';
import { NavLink } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
const Header = () => {
  const { user, logout } = useAuth();
  console.log(user?.displayName);
    return (
      <div className="bg-indigo-200 h-18 p-4 flex px-5 fixed top-0 inset-x-0">
        <NavLink
          className="font-bold border border-gray-300 hover:border-red-200 py-0 px-4 mx-4"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className="font-bold border hover:border-red-200 py-0 px-4 mx-4"
          to="/service"
        >
          Service
        </NavLink>
        <NavLink
          className="font-bold border hover:border-red-200 py-0 px-4 mx-4"
          to="/shop"
        >
          Shop
        </NavLink>
        <NavLink
          className="font-bold border hover:border-red-200 py-0 px-4 mx-4"
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className="font-bold border hover:border-red-200 py-0 px-4 mx-4"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="font-bold border hover:border-red-200 py-0 px-4 mx-4"
          to="/contact"
        >
          Contact Us
        </NavLink>
        <span className="font-bold border border-gray-300 hover:border-red-200 py-0 px-4 mx-4">
          {user.email}
        </span>
        {user.email ? (
          <button
            className="font-bold border border-gray-300 hover:border-red-200 py-0 px-4 mx-4"
            type="button"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <NavLink
            className="font-bold border hover:border-red-200 py-0 px-4 mx-4"
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    );
};

export default Header;