import React from "react";
import Styles from "./Projects.module.scss";

const { projectSection, projectGrid, projectTile } = Styles;

const ProjectTile = ({ data }) => {
  const { img, title, summary } = data;

  return (
    <div className={projectTile}>
      <img src={img} alt={`${title}, thumbnail`} />
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
};

const Projects = ({ projectLibrary }) => {
  const projectList = projectLibrary.map((proj) => <ProjectTile data={proj} />);

  return (
    <section className={projectSection}>
      <div id="projects" className={projectGrid}>
        {projectList}
      </div>
    </section>
  );
};

export default Projects;
