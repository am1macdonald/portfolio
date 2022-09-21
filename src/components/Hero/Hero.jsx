import React from "react";
import Styles from "./Hero.module.scss";
const { heroDiv, clipFront, clipBack, shapeContainer } = Styles;

const Hero = () => {
  return (
    <section id="hero" className={heroDiv}>
      <div>
        <h1>
          Adam
          <br />
          MacDonald
        </h1>
        <p>Front-End Web Developer</p>
        <p>
          JavaScript | HTML | CSS | SASS | Webpack | jQuery | Bootstrap | React
        </p>
      </div>
      <div className={shapeContainer}>
        <div className={clipFront}></div>
        <div className={clipBack}></div>
      </div>
    </section>
  );
};

export default Hero;
