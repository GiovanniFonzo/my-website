import React from "react";
import "./Footer.css";
import copyrightIcon from "./assets/icon-copyright/copyright.svg";

function Footer() {
  return (
    <footer className="footer section">
      <img 
        src={copyrightIcon} 
        alt="" 
        aria-hidden="true" 
        width="46" 
        height="37" 
        className="footer-icon"
      />
      <p className="footer-text">2025 Giovanni Fonzo</p>
    </footer>
  );
}

export default Footer;
