import React, { useState } from 'react';
import './Header.css';
import logo from './assets/logo/logo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-frame">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <nav className={`menu-frame ${menuOpen ? 'open' : ''}`}>
          <ul className="menu-items">
            <li><a href="#hero" className="nav-item" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-item" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#projects" className="nav-item" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="nav-item" onClick={() => setMenuOpen(false)}>Contact</a></li>
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
