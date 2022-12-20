import "../styles/Projects.css";
import "../styles/Skills.css";
import { useState } from "react";
import bugTracker from "../assets/projectScreenshots/bug-tracker-screenshot2.png";

const Projects = (props) => {
  const [enlarged, setEnlarged] = useState({
    "bug-tracker": false,
  });

  const images = {
    "bug-tracker": bugTracker,
  };
  const enlargedStyle = {
    width: "100vw,",
    height: "fit-content",
    position: "absolute",
    left: "-30vw",
  };
  const minimizedStyle = {
    height: "30vh",
    width: "fit-content",
  };
  return (
    <>
      
      <section id="projects">
        <h1 className="section-heading">Projects</h1>
        <div className="projects-container">
          <div className="project">
            <div className="skill-heading">Bug Tracker</div>
            <img
              src={bugTracker}
              id="bug-tracker"
              onClick={(e) => {
                props.setSelectedImage(images[e.target.id]);
                props.setShowEnlarged(true);
              }}
              style={enlarged["bug-tracker"] ? enlargedStyle : minimizedStyle}
            ></img>
            <div>A project management app created using the MERN stack</div>
            <a href="https://github.com/jacob-ferrell/bug-tracker">- GitHub Repo -</a>
            <a href="https://bug-tracker-rcf6.onrender.com/">-Live Demo-</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
