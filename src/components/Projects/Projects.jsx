import React from "react";
import Styles from "./Projects.module.scss";
import uniqid from "uniqid";
import { useState } from "react";
import { useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const { projectSection, projectGrid, projectTile, projectThumbnail } = Styles;

const ProjectTile = ({ project, getFromStorage }) => {
  const { thumbnail, live, repo, title, summary } = project;

  const [imageURL, setImageURL] = useState("");

  const [summaryText, setSummaryText] = useState("");

  useEffect(() => {
    const getAndSet = async (uri, setter) => {
      const result = await getFromStorage(uri);
      setter(result);
    };

    const getMarkDown = async () => {
      const result = await getFromStorage(summary);

      fetch(result)
        .then((result) => result.text())
        .then((text) => setSummaryText(text));
    };
    getAndSet(thumbnail, setImageURL);
    getMarkDown();
  }, [getFromStorage, summary, thumbnail]);

  return (
    <div className={projectTile}>
      <div>
        <div>
          <img src={imageURL} alt="thumbnail" className={projectThumbnail} />
        </div>

        <div>
          <h3>{title}</h3>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {summaryText}
          </ReactMarkdown>
        </div>
      </div>
      <div>
        <p>
          Live: <a href={live}>{live}</a>
        </p>
        <p>
          Repo: <a href={repo}>{repo}</a>
        </p>
      </div>
    </div>
  );
};

const Projects = ({ projects, getFromStorage }) => {
  console.log(projects);
  const projectList = projects.map((project) => (
    <ProjectTile
      key={uniqid()}
      project={project}
      getFromStorage={getFromStorage}
    />
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
