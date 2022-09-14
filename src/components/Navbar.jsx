import React from "react";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <HashLink smooth to="/#hero" isactive="true">
            top
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about">
            about
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#projects">
            projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact">
            contact
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
