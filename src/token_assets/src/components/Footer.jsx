// Footer.js

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
      <hr/> 
      <p className="footer-text">© 2023 TSEC Bank. All rights reserved.</p>
    </div>
  );
}

export default Footer;
