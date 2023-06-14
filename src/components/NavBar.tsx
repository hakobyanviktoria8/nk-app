import React from "react";
import { Link } from "react-router-dom";
import "./../styles/navBar.scss";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Employees</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
      </ul>
    </nav>
  );
};
