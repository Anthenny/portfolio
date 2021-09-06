import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import "./navbar.scss";

const Navbar = ({ toggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link to="/" onClick={toggleHome}>
            <img src="./img/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="right">
          <div className="mobileIcon" onClick={toggle}>
            <FaBars />
          </div>
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500} spy={true} exact="true">
                <span>01. </span> Home
              </Link>
            </li>
            <li>
              <Link to="over-mij" smooth={true} duration={500} spy={true} exact="true">
                <span>02. </span> Over mij
              </Link>
            </li>
            <li>
              <Link to="projecten" smooth={true} duration={500} spy={true} exact="true">
                <span>03. </span> Projecten
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
