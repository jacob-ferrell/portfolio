import kebabCase from "../utils/kebabCase";

export default function ProjectDetails({ project }) {
  const { name, demo, img, repo, description } = project;
  return (
    <>
          <div className="project-description">{description}</div>
          <a href={repo} className="project-link">
            -GitHub Repo-
          </a>
          <a href={demo} className="project-link">
            -Live Demo-
          </a>
    </>
  );
}
