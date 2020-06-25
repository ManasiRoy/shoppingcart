import React from "react";
import { NavLink } from "react-router-dom";


const mainNavigation = ({ cartItemNumber }) => (

  <NavLink to="/cart"> {cartItemNumber}</NavLink>

);

export default mainNavigation;
