import React from "react";
import Styles from "./Footer.module.scss";

const { footer } = Styles;

const Footer = () => {
  return (
    <footer className={footer}>
      <p>Ⓒ 2022 Adam MacDonald</p>
    </footer>
  );
};

export default Footer;
