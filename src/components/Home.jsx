import "../styles/home.css";
import "../styles/stars.css";
import wave from "../assets/backgrounds/wave.svg";

const Home = (props) => {
  return (
    <section id="home" className="wave layer1">
      <div className="stars"></div>
      <div className="twinkling"></div>

      <img id="wave" src={wave}></img>
      <div id="greeting">
        <div id="text-container">
          <div className="name hidden">Jacob Ferrell</div>
          <div className="description hidden">full-stack web developer</div>
        </div>
        <div id='buttons-container'>
          <button id="resume" className="home-button hidden">
            My Resume
          </button>
          <button id="view-work" className="home-button hidden">
            My Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
