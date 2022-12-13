import "./App.css";
import { useState } from "react";
import Home from "./components/Home";

function App() {

  return (
    <div className="App">
      <nav>
        <div id="links-container">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
      </nav>
      <div className="content">
        <Home />
        <section id='about'>

        </section>
        <section id='skills'>

        </section>
        <section id='projects'>

        </section>
        <section id='contact'>
        </section>
        

      </div>
    </div>
  );
}

export default App;
