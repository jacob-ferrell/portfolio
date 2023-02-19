import "../styles/Home.css";
import "../styles/stars.css";
import wave from "../assets/backgrounds/wave.svg";
import waveMobile from "../assets/backgrounds/wave-mobile3.svg";
import linkedin from "../assets/softwareLogos/linkedin.png"
import github from "../assets/softwareLogos/github-white.png"
import email from '../assets/softwareLogos/email.png'
import { useState, useEffect } from "react";

const Home = (props) => {
  const [imgSrc, setImgSrc] = useState(wave);

  useEffect(() => {
    const handleMediaQuery = () => {
      if (window.matchMedia("(min-width: 700px)").matches) {
        setImgSrc(wave);
      } else {
        setImgSrc(waveMobile);
      }
    };

    handleMediaQuery();
    window.addEventListener("resize", handleMediaQuery);

    return () => {
      window.removeEventListener("resize", handleMediaQuery);
    };
  }, []);

  return (
    <section id="home" className="wave layer1">
      <div className="stars"></div>
      <div className="twinkling"></div>

      <img id="wave" src={imgSrc}></img>
      <div id="greeting">
        <div id="text-container">
          <div className="name hidden">Jacob Ferrell</div>
          <div className="description hidden">full-stack web developer</div>
        </div>
        <div id="buttons-container">
          <button
            id="resume"
            className="home-button hidden"
            onClick={() =>
              (window.location.href =
                "https://docs.google.com/document/d/1EjZxIKgkSwgWMlyLXrC8quvW_wmdEaaPp8r1xO8JL68/export?format=pdf")
            }
          >
            My Resume
          </button>
          <button
            id="view-work"
            href="#projects"
            className="home-button hidden"
            onClick={() => {
              /* window.location.href = "#projects" */
              document.getElementById("projects-link").click();
            }}
          >
            My Projects
          </button>
          
        </div>
        <div id="link-container">
            <a href="#contact" className="grow"><img id="email" src={email} alt="Email" /></a>
            <a href="https://www.linkedin.com/in/mjferrell" className="grow"><img id="linkedin" src={linkedin} alt="LinkedIn" /></a>
            <a href="https://www.github.com/jacob-ferrell" className="grow"><img id="github" src={github} alt="GitHub" /></a>
          </div>
      </div>
    </section>
  );
};

export default Home;
