import "../styles/Projects.css";
import "../styles/Skills.css";
import bugTracker from "../assets/projectScreenshots/bug-tracker-screenshot2.png";
import cookBook from "../assets/projectScreenshots/cookbook-screenshot.png";

const Projects = (props) => {

  const projects = [
    {
      name: "Bug Tracker",
      img: bugTracker,
      description: "A project management app created using the MERN stack",
      repo: "https://github.com/jacob-ferrell/bug-tracker",
      demo: "https://bug-tracker-rcf6.onrender.com/",
    },
    {
      name: "CookBook",
      img: cookBook,
      description:
        "A recipe book app used for discovering and sharing recipes.  Created using Django",
      repo: "https://github.com/jacob-ferrell/django-recipe-book",
      demo: "https://cookbook-backend.onrender.com/",
    },
  ].map((project) => {
    return (
      <div id={kebabCase(project.name)} className="project hidden" key={project.name}>
        <div className="skill-heading">{project.name}</div>
        <img src={project.img} href={project.demo} alt={project.name + '-thumbnail'}></img>
        <div className="project-description">{project.description}</div>
        <a href={project.repo}>- GitHub Repo -</a>
        <a href={project.demo}>-Live Demo-</a>
      </div>
    );
  });

  const images = {
    "bug-tracker": bugTracker,
  };

  function kebabCase(str) {
    return str.toLowerCase().replace(/\s/g, '-');
  }

  return (
    <>
      <section id="projects">
        <h1 className="section-heading hidden">Projects</h1>
        <div className="projects-container">
          {projects}
        </div>
      </section>
    </>
  );
};

export default Projects;
