import React from "react";
import Styles from "./Contact.module.scss";

const { contactSection } = Styles;

const Contact = () => {
  return (
    <section className={contactSection}>
      <div id="contact">
        <h2>Contact me:</h2>
        <ul>
          <li>LinkedIn</li>
          <li>GitHub</li>
          <li>Twitter</li>
          <li>email</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
