import "../styles/Skills.css";
import html from "../assets/softwareLogos/html.png";
import css from "../assets/softwareLogos/css.png";
import git from "../assets/softwareLogos/git.png";
import github from "../assets/softwareLogos/github.png";
import js from "../assets/softwareLogos/js.png";
import react from "../assets/softwareLogos/react.png";
import bootstrap from "../assets/softwareLogos/bootstrap.png";
import node from "../assets/softwareLogos/node.png";
import express from "../assets/softwareLogos/express.png";
import mongo from "../assets/softwareLogos/mongo.png";
import django from '../assets/softwareLogos/django.jpg'
import python from '../assets/softwareLogos/python.png'

const Skills = (props) => {
  const createSkills = (skills) => {
    return Object.keys(skills).map((skill) => {
      return (
        <div className="skill-item" key={skill}>
          <img className="skill-image" src={skills[skill]}></img>
          <span>{skill}</span>
        </div>
      );
    });
  };

  const frontEnd = {
    HTML5: html,
    CSS3: css,
    Javascript: js,
    "React JS": react,
    Bootstrap: bootstrap,
  };

  const backEnd = {
    "Node.js": node,
    "Express.js": express,
    MongoDB: mongo,
    Django: django,
    Python: python
  };

  const versionControl = {
    Git: git,
    GitHub: github,
  };

  return (
    <section id="skills">
      <h1 id='skills-heading' className="section-heading hidden">Skills</h1>
      <div className="skills-container">
        <div className="front-end-container skills hidden">
          <div className="skill-heading">
            <span>Front End</span>
          </div>
          {createSkills(frontEnd)}
        </div>
        <div className="back-end-container skills hidden">
          <div className="skill-heading">Back End</div>
          {createSkills(backEnd)}
        </div>
        <div className="other-skills skills hidden">
          <div className="skill-heading">Version Control</div>

          {createSkills(versionControl)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
