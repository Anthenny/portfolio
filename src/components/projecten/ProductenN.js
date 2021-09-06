import React from "react";
import "./productenN.scss";

const ProductenN = () => {
  return (
    <div className="projecten__container-n">
      <div className="projecten__display">
        <img src="./img/Ecommerce.png" alt="Ecommerce overview" />
        <div className="projecten__dot-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="projecten__info">
        <div className="projecten__info-header">
          <h3>Featured</h3>
          <h2>Ecommerce</h2>
        </div>
        <div className="projecten__info-text">
          Dit is een ecommerce website voor een kleine ondernemer. Op de website heb ik gebruik
          gemaakt van sessies, beveiligde routes, verificatie met inloggen en stripe.
        </div>
        <div className="projecten__info-buttons">
          <ul className="projecten__ul">
            <li>HTML</li>
            <li>SCSS</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
          <button className="btn">
            Bekijk op
            <img src="./img/github.png" alt="github logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductenN;
