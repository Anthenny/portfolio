import React, { useState } from "react";
import ProductenN from "./ProductenN";
import "./projecten.scss";
import ProjectenSpiegel from "./project/ProjectenSpiegel";
import { ecommerceData } from "./sliderData";
import Netflix from "./project/Netflix";
import GymApp from "./project/GymApp";

const Projecten = () => {
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

  console.log(current);

  return (
    <div className="projecten" id="projecten">
      <h1>
        <span>03. </span>Projecten
      </h1>

      <Netflix />
      <ProjectenSpiegel />
      <ProductenN />
      <GymApp />
    </div>
  );
};

export default Projecten;
