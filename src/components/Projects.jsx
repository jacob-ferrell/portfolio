import "../styles/Projects.css";
import "../styles/Skills.css";
import { useState, useEffect } from "react";
import bugTracker from "../assets/projectScreenshots/bug-tracker-screenshot2.png";
import cookBook from "../assets/projectScreenshots/cookbook-screenshot.png";
import chesstopia from "../assets/projectScreenshots/chesstopia.gif";
import kebabCase from "../utils/kebabCase";
import ProjectDetails from "./ProjectDetails";

const Projects = (props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener when component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleTransitionEnd() {
    setIsHidden(false);
  }


  const projects = [
    {
      name: "Chesstopia",
      img: chesstopia,
      description:
        "An online chess game created with React, Java/Spring and PostgreSQL featuring real-time multiplayer play",
      repo: "https://github.com/jacob-ferrell/chesstopia",
      demo: "https://jacob-ferrell.com/chesstopia",
    },
    {
      name: "Bug Tracker",
      img: bugTracker,
      description: "A project management app created using the MERN stack",
      repo: "https://github.com/jacob-ferrell/bug-tracker",
      demo: "https://bugtracker.jacobferrell.net",
    },
    {
      name: "CookBook",
      img: cookBook,
      description:
        "A recipe book app used for discovering and sharing recipes.  Created using Django",
      repo: "https://github.com/jacob-ferrell/django-recipe-book",
      demo: "https://cookbook.jacob-ferrell.com/",
    },
    
  ].map((project, i, p) => {
    const { name, demo, img } = project;
    const id = kebabCase(name);
    return (
      <div id={id} onTransitionEnd={i === p.length - 1 ? handleTransitionEnd : null} className={`project ${isHidden ? 'hidden' : ''}`} key={name}>
        <div className="skill-heading">
          <a className="no-hover" href={demo}>
            {name}
          </a>
        </div>
        <a href={demo}>
            <img
              className={`${kebabCase(name)}-img`}
              src={img}
              alt={name + "-thumbnail"}
            ></img>
        </a>
        {name == "Chesstopia" && isSmallScreen ? (
          <div className="description-container">
            <ProjectDetails project={project} />
          </div>
        ) : (
          <ProjectDetails project={project} />
        )}
      </div>
    );
  });

  return (
    <>
      <section id="projects">
        <h1 className={`section-heading ${isHidden ? 'hidden' : ''}`}>Projects</h1>
        <div className="projects-container">{projects}</div>
      </section>
    </>
  );
};

export default Projects;
