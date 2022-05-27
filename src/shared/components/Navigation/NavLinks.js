import React from "react";
import { NavLink } from "react-router-dom";


import "./NavLinks.scss";

const NavLinks = () => {





  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Ana Sayfa
        </NavLink>
      </li>

      <li>
        <NavLink to="/task1">TASK 1</NavLink>
      </li>

      <li>
        <NavLink to="/task2">TASK 2</NavLink>
      </li>
      <li>
        <NavLink to="/task3">TASK 3</NavLink>
      </li>
     
    </ul>
  );
};

export default NavLinks;
