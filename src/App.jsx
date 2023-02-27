import "./index.css";
import "./styles/stars.css";
import { useEffect } from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NoScroll from "./hooks/NoScroll";
import RedirectOnReload from "./hooks/RedirectOnReload";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
          entry.target.classList.remove("button-hover");
        }
      });


    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleLinkClick(e) {
    clearLinks();
    e.target.classList.add("section-in-view");
  }

  function handleResize() {
    document.querySelector('.section-in-view').click();
  }

  function clearLinks() {
    document.querySelectorAll("#links-container a").forEach((link) => {
      link.classList.remove("section-in-view");
    });
  }

  return (
      <NoScroll>
        <div className="App">
          <RedirectOnReload />
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
            <Home className="hidden" clearLinks={clearLinks}/>
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
