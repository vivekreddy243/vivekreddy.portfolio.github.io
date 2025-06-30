import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "Home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection.charAt(0).toUpperCase() + currentSection.slice(1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialMediaUrl = {
    Linkedin: "https://linkedin.com/in/your_username",
    Github: "https://github.com/your_username",
    Twitter: "https://twitter.com/your_username",
  };

  return (
    <header className="navbar">
      <div className="navContainer">
        <nav className="nav">
          <ul className="navList">
            <li>
              <a href="#Home" className={activeSection === "Home" ? "active" : ""}>
                Home
              </a>
            </li>
            <li>
              <a href="#About" className={activeSection === "About" ? "active" : ""}>
                About
              </a>
            </li>
            <li>
              <a href="#Technologies" className={activeSection === "Technologies" ? "active" : ""}>
                Technologies
              </a>
            </li>
            <li>
              <a href="#Projects" className={activeSection === "Projects" ? "active" : ""}>
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" className={activeSection === "Contact" ? "active" : ""}>
                Contact
              </a>
            </li>
          </ul>
          <div className="socialIcons">
            <a href={socialMediaUrl.Twitter} target="_blank" rel="noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href={socialMediaUrl.Linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href={socialMediaUrl.Github} target="_blank" rel="noreferrer">
              <FaGithub size={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;