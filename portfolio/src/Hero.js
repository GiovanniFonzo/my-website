import React from "react";
import "./Hero.css";
import reactNative from "./assets/icons-image/React Native.svg";
import curlyBrackets from "./assets/icons-image/Curly Brackets.svg";
import sql from "./assets/icons-image/SQL.svg";
import github from "./assets/icons-image/GitHub.svg";
import git from "./assets/icons-image/Git.svg";
import restApi from "./assets/icons-image/Rest API.svg";
import php from "./assets/icons-image/PHP.svg";
import python from "./assets/icons-image/Python.svg";
import sourceCode from "./assets/icons-image/Source Code.svg";
import programming from "./assets/icons-image/Programming.svg";
import css3 from "./assets/icons-image/CSS3.svg";
import js from "./assets/icons-image/JS.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Giovanni</h1>
          <h2>I am a Web Developer</h2>
          <button className="cta-btn">View My Projects</button>
        </div>

        <div className="icons-container">
          <img src={reactNative} className="hero-icon" alt="React Native" />
          <img src={curlyBrackets} className="hero-icon" alt="Curly Brackets" />
          <img src={sql} className="hero-icon" alt="SQL" />
          <img src={github} className="hero-icon" alt="GitHub" />
          <img src={git} className="hero-icon" alt="Git" />
          <img src={restApi} className="hero-icon" alt="Rest API" />
          <img src={php} className="hero-icon" alt="PHP" />
          <img src={python} className="hero-icon" alt="Python" />
          <img src={sourceCode} className="hero-icon" alt="Source Code" />
          <img src={programming} className="hero-icon" alt="Programming" />
          <img src={css3} className="hero-icon" alt="CSS3" />
          <img src={js} className="hero-icon" alt="JavaScript" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
