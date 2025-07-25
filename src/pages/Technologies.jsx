import React from "react";

function Technologies() {
  const techs = [
    { name: "Python", color: "#3776AB" },
    { name: "Java", color: "#f89820" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "HTML", color: "#e34c26" },
    { name: "CSS", color: "#264de4" },
    { name: "React", color: "#61dafb" },
    { name: "Next.js", color: "#181818" },
    { name: "Node.js", color: "#3c873a" },
    { name: "Flask", color: "#000" },
    { name: "SQL", color: "#e38c00" },
    { name: "MongoDB", color: "#47a248" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Docker", color: "#2496ed" },
    { name: "Git", color: "#f34f29" },
    { name: "AWS", color: "#ff9900" },
    { name: "Azure", color: "#007fff" },
    { name: "Google Cloud", color: "#4285f4" },
    { name: "Pandas", color: "#150458" },
    { name: "NumPy", color: "#013243" },
    { name: "scikit-learn", color: "#f7931e" },
    { name: "XGBoost", color: "#e74c3c" },
    { name: "PySpark", color: "#e25a1c" },
    { name: "Apache Spark", color: "#e25a1c" },
    { name: "TensorFlow", color: "#ff6f00" },
    { name: "Keras", color: "#d00000" },
    { name: "PyTorch", color: "#ee4c2c" },
    { name: "LLaMA", color: "#181818" },
    { name: "LangChain", color: "#00b16a" },
    { name: "ChromaDB", color: "#6e44ff" },
    { name: "NLP", color: "#e74c3c" },
    { name: "OCR", color: "#181818" },
    { name: "Tableau", color: "#e97627" },
    { name: "Power BI", color: "#f2c811" },
  ];

  return (
    <div>
      <h1 style={{ color: '#fff', fontFamily: 'Oswald, Segoe UI, Arial, sans-serif', fontWeight: 700, fontSize: 28, marginBottom: 24 }}>Technologies I Use</h1>
      <p style={{ color: '#e0e0e0', fontSize: 15, marginBottom: 18 }}>Here are some technologies and tools I am proficient with:</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
          gap: '14px',
          paddingBottom: '1.2rem',
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {techs.map((tech, idx) => (
          <div
            key={tech.name}
            style={{
              background: '#181818',
              borderRadius: '0.6rem',
              boxShadow: '0 1px 4px 0 rgba(0,0,0,0.13)',
              padding: '0.2rem 0 0.5rem 0',
              minWidth: 0,
              maxWidth: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              minHeight: 54,
              marginBottom: '0.3rem',
              border: '2px solid #222',
              overflow: 'hidden',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: '100%', height: 18, background: 'linear-gradient(135deg, #232526 60%, #414345 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              {/* Optionally add an icon here */}
            </div>
            <div style={{ padding: '0.2rem 0.5rem 0.1rem 0.5rem', width: '100%', textAlign: 'center' }}>
              <span style={{
                fontFamily: 'Oswald, Segoe UI, Arial, sans-serif',
                fontWeight: 700,
                fontSize: 13,
                color: '#fff',
                lineHeight: 1.2,
                borderRadius: '0.3em',
                padding: '0.1em 0.3em',
                display: 'inline-block',
                marginBottom: 3,
              }}>{tech.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;