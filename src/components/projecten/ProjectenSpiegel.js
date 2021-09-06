import React from "react";
import "./projectenSpiegel.scss";

const ProjectenSpiegel = () => {
  return (
    <div className="projecten__container-spiegelbeeld">
      <div className="projecten__info">
        <div className="projecten__info-header-spiegelbeeld">
          <h3>Featured</h3>
          <h2>Ecommerce</h2>
        </div>
        <div className="projecten__info-text">
          Dit is een ecommerce website voor een kleine ondernemer. Op de website heb ik gebruik
          gemaakt van sessies, beveiligde routes, verificatie met inloggen en stripe.
        </div>
        <div className="projecten__info-buttons-s">
          <button className="btn">
            Bekijk op
            <img src="./img/github.png" alt="github logo" />
          </button>
          <ul className="projecten__ul-spiegelbeeld">
            <li>HTML</li>
            <li>SCSS</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
      <div className="projecten__display">
        <img src="./img/Ecommerce.png" alt="Ecommerce overview" />
        <div className="projecten__dot-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectenSpiegel;
