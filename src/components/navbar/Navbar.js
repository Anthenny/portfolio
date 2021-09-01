import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="./img/logo.svg" alt="logo" />
        </div>
        <div className="right">
          <ul>
            <li>
              <span>01. </span> Home
            </li>
            <li>
              <span>02. </span> Over mij
            </li>
            <li>
              <span>03. </span> Projecten
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
