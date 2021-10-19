import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
const Header = () => {
  const { id } = useParams();
  const { user, logout } = useAuth();
  console.log(user?.displayName);
    return (
      <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to={`/shop/${id}`}>Shop</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <span>{ user.displayName}</span>
        {user?.displayName?
          (<button type="button" onClick={logout}>logout</button>):(<NavLink to="/login">Login</NavLink>)}
           
      </div>
    );
};

export default Header;