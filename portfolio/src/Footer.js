import React from "react";
import "./Footer.css";
import copyrightIcon from "./assets/icon-copyright/copyright.svg"; // adjust path if needed

function Footer() {
  return (
    <footer className="footer">
      <img src={copyrightIcon} alt="Copyright Icon" width="46" height="37" />
      <p>2025 Giovanni Fonzo</p>
    </footer>
  );
}

export default Footer;

