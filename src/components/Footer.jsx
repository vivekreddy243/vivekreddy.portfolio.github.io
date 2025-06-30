import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/your_username" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/your_username" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://twitter.com/your_username" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;