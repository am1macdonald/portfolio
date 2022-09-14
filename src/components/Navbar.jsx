import React from "react";
import { NavHashLink } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavHashLink smooth to={"/"}>
            top
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to={"/#about"}>
            about
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to={"/#projects"}>
            projects
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to={"/#contact"}>
            contact
          </NavHashLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
