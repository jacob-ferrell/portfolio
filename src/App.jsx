import "./index.css";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './styles/stars.css';

function App() {
  const [showEnlarged, setShowEnlarged] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);
  const [sectionInView, setSectionInView] = useState(null);

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
          //headerLink.classList.add("section-in-view");
        } else {
          entry.target.classList.remove("show");
          //headerLink.classList.remove("section-in-view");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      {showEnlarged ? (
        <EnlargedScreenshot
          show={showEnlarged}
          handleClose={() => setShowEnlarged(false)}
          image={selectedImage}
        />
      ) : null}
      <div className="App">
      
        <nav>
          <div id="links-container">
            <a href="#home" id="greeting-link">
              Home
            </a>
            {/* <a href="#about" id="about-link">
              About
            </a> */}
            <a href="#skills" id="skills-heading-link">
              Skills
            </a>
            <a href="#projects" id="projects-link">
              Projects
            </a>
            <a href="#contact" id="contact-link">
              Contact
            </a>
          </div>
        </nav>
        <div className="content">
          <Home className="hidden" />
          <Skills />
          <Projects
            showEnlarged={showEnlarged}
            setShowEnlarged={setShowEnlarged}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
