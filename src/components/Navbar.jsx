import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          currentSection = section.getAttribute("id");
        }
      });
      if (currentSection) {
        setActiveSection(currentSection.charAt(0).toUpperCase() + currentSection.slice(1));
      } else {
        setActiveSection("");
      }
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
              <a href="#Home" className={activeSection === "Home" ? "active" : undefined}>
                Home
              </a>
            </li>
            <li>
              <a href="#About" className={activeSection === "About" ? "active" : undefined}>
                About
              </a>
            </li>
            <li>
              <a href="#Technologies" className={activeSection === "Technologies" ? "active" : undefined}>
                Technologies
              </a>
            </li>
            <li>
              <a href="#Projects" className={activeSection === "Projects" ? "active" : undefined}>
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" className={activeSection === "Contact" ? "active" : undefined}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="socialIcons">
          <a href={socialMediaUrl.Github} target="_blank" rel="noreferrer">
            <FaGithub size={24} />
          </a>
          <a href={socialMediaUrl.Linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;