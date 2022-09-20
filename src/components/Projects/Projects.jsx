import React from "react";
import Styles from "./Projects.module.scss";
import uniqid from "uniqid";
import { useState } from "react";
import { useEffect } from "react";

const { projectSection, projectGrid, projectTile, projectThumbnail } = Styles;

const ProjectTile = ({ project, getImage }) => {
  const { thumbnail, live, repo, title } = project;

  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const getURL = async () => {
      const result = await getImage(thumbnail);
      setImageURL(result);
      console.log(result);
    };
    getURL();
  }, []);

  return (
    <div className={projectTile}>
      <div>
        <img src={imageURL} alt="thumbnail" className={projectThumbnail} />
        <div>
          <h3>{title}</h3>
          <p>
            Live: <a href={live}>{live}</a>
          </p>
          <p>
            Repo: <a href={repo}>{repo}</a>
          </p>
        </div>
      </div>

      <div>
        <summary></summary>
      </div>
    </div>
  );
};

const Projects = ({ projects, getImage }) => {
  console.log(projects);
  const projectList = projects.map((project) => (
    <ProjectTile key={uniqid()} project={project} getImage={getImage} />
  ));

  return (
    <section className={projectSection}>
      <div id="projects" className={projectGrid}>
        {projectList}
      </div>
    </section>
  );
};

export default Projects;
