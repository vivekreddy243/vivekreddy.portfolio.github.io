import React from "react";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    technologies: ["React", "Vite", "CSS"],
    link: "https://github.com/your_username/portfolio-website",
    icon: "💻",
    iconColor: "#e74c3c"
  },
  {
    title: "E-commerce App",
    description: "A full-featured e-commerce web application with user authentication.",
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/your_username/ecommerce-app",
    icon: "🛒",
    iconColor: "#e74c3c"
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using the OpenWeather API.",
    technologies: ["JavaScript", "API", "HTML/CSS"],
    link: "https://github.com/your_username/weather-app",
    icon: "☀️",
    iconColor: "#e74c3c"
  },
  {
    title: "Blog Platform",
    description: "A blogging platform with markdown support and user authentication.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/your_username/blog-platform",
    icon: "📝",
    iconColor: "#e74c3c"
  },
  {
    title: "Task Manager",
    description: "A simple and effective task management tool.",
    technologies: ["React", "Redux", "CSS"],
    link: "https://github.com/your_username/task-manager",
    icon: "✅",
    iconColor: "#e74c3c"
  }
];

function Projects() {
  return (
    <div className="projects" style={{ background: '#000', minHeight: '100vh', padding: '2rem 0' }}>
      <h1 style={{ color: '#fff', fontFamily: 'Oswald, Segoe UI, Arial, sans-serif', fontWeight: 700, fontSize: 28, marginBottom: 24 }}>My Projects</h1>
      <div
        className="projects-list"
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '18px',
          overflowX: 'auto',
          paddingBottom: '1.2rem',
          scrollbarWidth: 'thin',
          scrollbarColor: '#e74c3c #222',
          width: '100vw',
          maxWidth: '100vw',
        }}
      >
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              background: '#181818',
              borderRadius: '1rem',
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.13)',
              padding: '0 0 1rem 0',
              minWidth: 200,
              maxWidth: 200,
              flex: '0 0 200px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              position: 'relative',
              minHeight: 260,
              marginBottom: '0.5rem',
              border: '2px solid #222',
              overflow: 'hidden',
            }}
          >
            <div style={{ width: '100%', height: 90, background: 'linear-gradient(135deg, #232526 60%, #414345 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: '#fff',
                  boxShadow: '0 1px 3px 0 rgba(231,76,60,0.13)',
                  border: '2px solid #e74c3c',
                  fontSize: 18,
                  color: project.iconColor,
                  zIndex: 2
                }}
              >
                {project.icon}
              </span>
            </div>
            <div style={{ padding: '0.7rem 1rem 0.3rem 1rem', width: '100%' }}>
              <h2 style={{
                fontFamily: 'Oswald, Segoe UI, Arial, sans-serif',
                fontWeight: 700,
                fontSize: 14,
                margin: '0 0 7px 0',
                color: '#fff',
                lineHeight: 1.2
              }}>{project.title}</h2>
              <p style={{ color: '#e0e0e0', fontSize: 11, marginBottom: 7 }}>{project.description}</p>
              <p style={{ color: '#aaa', fontSize: 10, marginBottom: 10 }}>
                <strong style={{ color: '#e74c3c', fontWeight: 700 }}>Tech:</strong> {project.technologies.join(", ")}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: 'auto',
                  color: '#fff',
                  background: '#e74c3c',
                  padding: '0.3em 0.8em',
                  borderRadius: '0.8em',
                  fontWeight: 600,
                  fontSize: 11,
                  textDecoration: 'none',
                  letterSpacing: 1,
                  boxShadow: '0 1px 3px 0 rgba(231,76,60,0.13)',
                  transition: 'background 0.18s, color 0.18s',
                  display: 'inline-block',
                  border: 'none',
                  outline: 'none',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = '#c0392b';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = '#e74c3c';
                }}
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;