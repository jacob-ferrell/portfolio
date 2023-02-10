import "../styles/home.css";
import "../styles/stars.css";
import wave from "../assets/backgrounds/wave.svg";
import waveMobile from "../assets/backgrounds/wave-mobile3.svg";
import { useState, useEffect } from 'react';

const Home = (props) => {

  const [imgSrc, setImgSrc] = useState(wave);

  useEffect(() => {
    const handleMediaQuery = () => {
      if (window.matchMedia('(min-width: 900px)').matches) {
        setImgSrc(wave);
      } else {
        setImgSrc(waveMobile);
      }
    };

    handleMediaQuery();
    window.addEventListener('resize', handleMediaQuery);

    return () => {
      window.removeEventListener('resize', handleMediaQuery);
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
              (window.location.href = "https://drive.google.com/file/d/1Lx5QQW3YQfjZ3nqEHiLh-XuziSQvQi6P/view?usp=share_link")
            }
          >
            My Resume
          </button>
          <button
            id="view-work"
            href="#projects"
            className="home-button hidden"
            onClick={() => {
              window.location.href = "#projects"
            }}
          >
            My Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
