import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Blog</h1>
      <ul>
        <li>
          <NavLink to="/"> HOME</NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
