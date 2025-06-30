import React from "react";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    technologies: ["React", "Vite", "CSS"],
    link: "https://github.com/your_username/portfolio-website",
  },
  {
    title: "E-commerce App",
    description: "A full-featured e-commerce web application with user authentication.",
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/your_username/ecommerce-app",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using the OpenWeather API.",
    technologies: ["JavaScript", "API", "HTML/CSS"],
    link: "https://github.com/your_username/weather-app",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using the OpenWeather API.",
    technologies: ["JavaScript", "API", "HTML/CSS"],
    link: "https://github.com/your_username/weather-app",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using the OpenWeather API.",
    technologies: ["JavaScript", "API", "HTML/CSS"],
    link: "https://github.com/your_username/weather-app",
  }
];

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;