// src/About.js
import React from "react";
import "./About.css";

function About() {
  return (
    <section>
      <div className="about" id="about">
      <h1 className="about-title">about.</h1>
      <p className="about-intro">
        I am a web developer based in Dublin, Ireland.
      </p>
      <p className="about-desc">
        I enjoy turning complex real-life problems into simple and intuitive web applications. When I'm not coding, you'll find me learning new skills, cooking, running, or working out in the gym.
      </p>
      </div>
    </section>
  );
}

export default About;
