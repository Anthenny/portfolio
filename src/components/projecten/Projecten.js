import React from "react";
import "./projecten.scss";

const Projecten = () => {
  return (
    <div className="projecten">
      <h1>
        <span>03. </span>Projecten
      </h1>
      <div className="projecten__container">
        <div className="projecten__display">
          <img src="./img/Ecommerce.png" alt="Ecommerce overview" />
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Projecten;
