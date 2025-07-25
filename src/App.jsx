import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div style={{ background: '#000', minHeight: '100vh', width: '100vw' }}>
      <Navbar />
      <main>
        <section id="Home">
          <Home />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Technologies">
          <Technologies />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;