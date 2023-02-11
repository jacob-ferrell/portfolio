import "./index.css";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/stars.css";
import NoScroll from "./components/NoScroll";
import RedirectOnReload from "./components/RedirectOnReload";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        /* const id = entry.target.id;
        const headerLink = document.getElementById(`${id}-link`); */
        /* document
          .querySelectorAll(".links-container a")
          .forEach((link) => link.classList.remove("section-in-view")); */
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          /* if (entry.target.classList.includes('home-button')) {
            entry.target.addEventListener('mouseover', () => {
              const button = entry.target;
              const prevDelay = entry.target.style.transitionDelay;
              button.classList.add('button-hover');
            })
          } */
          //headerLink.classList.add("section-in-view");
        } else {
          entry.target.classList.remove("show");
          entry.target.classList.remove("button-hover");
          //headerLink.classList.remove("section-in-view");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  function handleLinkClick(e) {
    document.querySelectorAll("#links-container a").forEach((link) => {
      link.classList.remove("section-in-view");
    });
    e.target.classList.add("section-in-view");
  }

  return (
      <NoScroll>
        <div className="App">
          {/* <RedirectOnReload /> */}
          <nav>
            <div id="links-container">
              <a
                href="#home"
                id="greeting-link"
                onClick={handleLinkClick}
                className="section-in-view"
              >
                Home
              </a>
              {/* <a href="#about" id="about-link">
              About
            </a> */}
              <a
                href="#skills"
                id="skills-heading-link"
                onClick={handleLinkClick}
              >
                Skills
              </a>
              <a href="#projects" id="projects-link" onClick={handleLinkClick}>
                Projects
              </a>
              <a href="#contact" id="contact-link" onClick={handleLinkClick}>
                Contact
              </a>
            </div>
          </nav>
          <div className="content">
            <Home className="hidden" />
            <Skills />
            <Projects
            />
            <Contact />
          </div>
        </div>
      </NoScroll>
  );
}

export default App;
