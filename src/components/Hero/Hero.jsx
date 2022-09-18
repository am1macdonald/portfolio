import React from "react";
import Styles from "./Hero.module.scss";
import profilePic from "./me_lol-t500x500.jpg";
const { heroDiv } = Styles;

const Hero = () => {
  return (
    <section id="hero" className={heroDiv}>
      <div>
        <h1>
          Adam
          <br />
          MacDonald
        </h1>
        <p>Web-developer | Animal | Lover</p>
        <p>JavaScript | HTML | CSS | SASS | Webpack | jQuery | Bootstrap | React</p>
      </div>
      <div>
        <img src={profilePic} alt="a picture of me probably" />
      </div>
    </section>
  );
};

export default Hero;
