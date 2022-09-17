import React from "react";
import styles from "./Navbar.module.scss";

const { nav, navlist } = styles;

const Navbar = () => {
  return (
    <nav className={nav}>
      <ul className={navlist}>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contac">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;