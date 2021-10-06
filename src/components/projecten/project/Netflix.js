import React, { useState } from "react";
import { netflixData } from "../sliderData";

const Netflix = () => {
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
    <div className="projecten__container">
      <div className="projecten__display">
        <div className="slider">
          {netflixData.map((slide, index) => {
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
          <h3>Javascript</h3>
          <h2>Netflix</h2>
        </div>
        <div className="projecten__info-text">
          In dit project heb ik een Netflix clone gemaakt. In deze web applicatie heb ik gebruik
          gemaakt de MERN stack en het MVC architectuur. Daarnaast kan je op de applicatie inloggen,
          registreren door alle films sliden zodra je bent ingelogd.
        </div>
        <div className="projecten__info-buttons">
          <a href="https://github.com/Anthenny/mernnetflix">
            <button className="btn">
              Bekijk op
              <img src="./img/github.png" alt="github logo" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Netflix;
