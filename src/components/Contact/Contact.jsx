import React from "react";
import Styles from "./Contact.module.scss";

const { contactSection } = Styles;

const Contact = () => {
  return (
    <section className={contactSection}>
      <div id="contact">Contact</div>
    </section>
  );
};

export default Contact;
