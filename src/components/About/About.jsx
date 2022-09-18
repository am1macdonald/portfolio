import React from "react";
import Styles from "./About.module.scss";

const { aboutSection } = Styles;

const About = () => {
  return (
    <section id="about" className={aboutSection}>
      <div>
        <p>This is a paragraph about how I got into programming.</p>
      </div>
      <div>
        <p>This is a paragraph about how good I am at programming stuff.</p>
      </div>
    </section>
  );
};

export default About;
