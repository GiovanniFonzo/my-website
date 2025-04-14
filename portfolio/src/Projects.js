import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h1 className="projects-title">projects.</h1>
      <p className="projects-intro">Check out my latest web applications.</p>
      <p className="projects-desc">
        I've built full-stack applications using Flask, Laravel, and JavaScript,
        implementing database interactions, API integrations, and a structured MVC
        architecture to ensure scalability and maintainability.
      </p>

      <div className="project-list">
        {/* Flask Project */}
        <div className="project-card">
          <div className="project-content">
            <h2>flask.</h2>
            <p>Tech Stack: Flask, SQLAlchemy, PostgreSQL, REST API</p>
            <ul className="project-points">
              <li>Secure authentication</li>
              <li>CRUD operations</li>
              <li>API data fetching</li>
            </ul>
          </div>
          <button className="cta-btn">Flask Application</button>
        </div>

        {/* Laravel Project */}
        <div className="project-card">
          <div className="project-content">
            <h2>laravel.</h2>
            <p>Tech Stack: Laravel, MySQL, Blade, REST API</p>
            <ul className="project-points">
              <li>Role-based access</li>
              <li>API integrations</li>
              <li>Real-time updates</li>
            </ul>
          </div>
          <button className="cta-btn">Laravel Application</button>
        </div>

        {/* JavaScript Project */}
        <div className="project-card">
          <div className="project-content">
            <h2>javascript.</h2>
            <p>Tech Stack: Vanilla JS / React, Node.js, MongoDB, Fetch API</p>
            <ul className="project-points">
              <li>Frontend-heavy UI</li>
              <li>Real-time data sync</li>
              <li>API-driven workflow</li>
            </ul>
          </div>
          <button className="cta-btn">JavaScript Application</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
