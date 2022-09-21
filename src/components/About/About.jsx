import React from "react";
import Styles from "./About.module.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const { aboutSection } = Styles;

const About = ({ summary }) => {
  return (
    <section id="about" className={aboutSection}>
      <div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{summary}</ReactMarkdown>
      </div>
    </section>
  );
};

export default About;
