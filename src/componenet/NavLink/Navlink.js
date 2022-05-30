import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlink = () => {
  const activeLink = ({ isActive }) => {
    return {
      margin: "1rem 0",
      color: isActive ? "red" : "",
    }};
  return (
    <div>
      <NavLink style={activeLink} to='/home'>Home</NavLink>
      <NavLink style={activeLink} to='/about'>About</NavLink>
      <NavLink  style={activeLink} to='/friends'>Friend</NavLink>
    </div>
  );
};

export default Navlink;