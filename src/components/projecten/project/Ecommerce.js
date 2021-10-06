import React, { useState } from "react";
import { ecommerceData } from "../sliderData";
import "./ecommerce.scss";

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
          <h3>Javascript</h3>
          <h2>Ecommerce</h2>
        </div>
        <div className="projecten__info-text">
          Op deze website heb ik gebruik gemaakt van javascript in combinatie met nodejs/mongoose en
          het MVC architectuur.<br></br>
          Daarnaast maak ik in deze applicatie gebruik van sessies, beveiligde routes,
          authenticatie, een custom admin en klanten dashboard waar de inkomende bestellingen gezien
          en afgehandeld kunnen worden.
        </div>
        <div className="projecten__info-buttons-s">
          <a href="https://github.com/Anthenny/Shop">
            <button className="btn">
              Bekijk op
              <img src="./img/github.png" alt="github logo" />
            </button>
          </a>
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
