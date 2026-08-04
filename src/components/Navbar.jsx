import { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="nav-left">
          <h2 className="logo"> MaCode</h2>

          <ul className="nav-links">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
          </ul>
        </div>
        <div className="right-section">
          <div className="icons">
            <a
              href="https://github.com/manisha583"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/manisha-magar-058b1336b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/muffiin__99_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          <a href="#contact" className="contact-btn">
            Let's Connect
          </a>
        </div>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
        <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>
          <ul className="nav-links">
            <li>
              <a href="#hero" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#education" onClick={() => setMenuOpen(false)}>
                Education
              </a>
            </li>
          </ul>
          <div className="icons">
            <a
              href="https://github.com/manisha583"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/manisha-magar-058b1336b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/muffiin__99_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="#contact"
              className="contact-btn"
              onClick={() => setMenuOpen(false)}
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
