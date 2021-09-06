import React from "react";
import "./mobileNav.scss";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";

const MobileNav = ({ toggle, isOpen }) => {
  return (
    <div className={isOpen ? "mobile__container isOpen" : "mobile__container"} onClick={toggle}>
      <div className="mobile__container-icon" onClick={toggle}>
        <FaTimes />
      </div>
      <div className="mobile__container-wrapper">
        <div className="mobile__container-menu">
          <Link to="home" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">
            Home
          </Link>
          <Link to="over-mij" smooth={true} duration={500} spy={true} exact="true" onClick={toggle}>
            Over mij
          </Link>
          <Link
            to="projecten"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={toggle}
          >
            Projecten
          </Link>
          <Link to="contact" smooth={true} duration={500} spy={true} exact="true" onClick={toggle}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
