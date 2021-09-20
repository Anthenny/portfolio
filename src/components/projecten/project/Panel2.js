import React, { useState } from "react";
import { panelData } from "../sliderData";

import "./ecommerce2.scss";

const Panel2 = () => {
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
    <div className="projecten__container-n">
      <div className="projecten__display">
        <div className="slider">
          {panelData.map((slide, index) => {
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
      <div className="projecten__info">
        <div className="projecten__info-header">
          <h3>PHP</h3>
          <h2>Ecommerce</h2>
        </div>
        <div className="projecten__info-text">
          In dit project heb ik een fictief bedrijf gemaakt voor een restaurant zodat deze zijn
          personeel en leveringen kan bijhouden. Op deze website heb ik gebruik gemaakt van OOP php,
          MySQL en het MVV architectuur.<br></br>
          Je kan uiteraard alle CRUD functies vinden op de website.
        </div>
        <div className="projecten__info-buttons">
          <button className="btn">
            Bekijk op
            <img src="./img/github.png" alt="github logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Panel2;
