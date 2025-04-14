import React, { useState } from 'react';
import './Header.css';
import logo from './assets/logo/logo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home'); // State to track the active menu item

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item); // Update active item on click
    setMenuOpen(false); // Close the menu on item click
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-frame">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <nav className={`menu-frame ${menuOpen ? 'open' : ''}`}>
          <ul className="menu-items">
            <li>
              <a
                href="#hero"
                className={`nav-item ${activeItem === 'home' ? 'active' : ''}`} // Add active class conditionally
                onClick={() => handleItemClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`nav-item ${activeItem === 'about' ? 'active' : ''}`} // Add active class conditionally
                onClick={() => handleItemClick('about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-item ${activeItem === 'projects' ? 'active' : ''}`} // Add active class conditionally
                onClick={() => handleItemClick('projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`} // Add active class conditionally
                onClick={() => handleItemClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
