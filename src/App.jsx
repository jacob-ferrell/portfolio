import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import './styles/home.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <nav>
        <div id="links-container">
          <a href="">About</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
      </nav>
      <section id='home'>
        <div id='greeting'>
          <span className="name">Jacob Ferrell</span>
          <span>full-stack web developer</span>
        </div>
      </section>
    </div>
  );
}

export default App;
