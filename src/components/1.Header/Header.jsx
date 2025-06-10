import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the menu after scrolling
  };
  return (
    <header className="header">
      <div className="header_left">
        <a href="#home" className="logo" onClick={() => handleScroll("home")}>
          <img src="/vite.svg" alt="Vite logo" className="header_logo" />
        </a>
        <button className="burger-menu" onClick={toggleMenu}></button>
      </div>
      <nav className={`header_nav${isMenuOpen ? " open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={() => handleScroll("home")}>Home</a></li>
          <li><a href="#service" onClick={() => handleScroll("service")}>Service</a></li>
          <li><a href="#project" onClick={() => handleScroll("project")}>Project</a></li>
          <li><a href="#ceo-message" onClick={() => handleScroll("ceo-message")}>Ceo Message</a></li>
          <li><a href="#contact" onClick={() => handleScroll("contact")}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
