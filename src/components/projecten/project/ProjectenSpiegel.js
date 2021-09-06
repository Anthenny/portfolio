import React, { useState } from "react";
import { ecommerceData } from "../sliderData";
import "./projectenSpiegel.scss";

const ProjectenSpiegel = () => {
  const [current, setCurrent] = useState(0);

  const eersteDot = () => {
    setCurrent(current !== 0 ? 0 : current);
  };

  const tweedeDot = () => {
    setCurrent(current !== 1 ? 1 : current);
  };

  const derdeDot = () => {
    setCurrent(current !== 2 ? 2 : current);
  };
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
        </div>
      </div>
      <div className="projecten__display">
        <div className="slider">
          {ecommerceData.map((slide, index) => {
            return (
              <div className={index === current ? "slide active" : "slide"} key={index}>
                {index === current && (
                  <img src={slide.image} alt="Netflix project" className="image" />
                )}
              </div>
            );
          })}
        </div>
        <div className="projecten__dot-container">
          <div className={current === 0 ? "dot active" : "dot"} onClick={eersteDot}></div>
          <div className={current === 1 ? "dot active" : "dot"} onClick={tweedeDot}></div>
          <div className={current === 2 ? "dot active" : "dot"} onClick={derdeDot}></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectenSpiegel;
