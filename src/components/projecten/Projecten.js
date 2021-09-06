import Ecommerce2 from "./project/Ecommerce2";
import "./projecten.scss";
import Ecommerce from "./project/Ecommerce";
import Netflix from "./project/Netflix";
import GymApp from "./project/GymApp";

const Projecten = () => {
  return (
    <div className="projecten" id="projecten">
      <h1>
        <span>03. </span>Projecten
      </h1>

      <Netflix />
      <Ecommerce />
      <Ecommerce2 />
      <GymApp />
    </div>
  );
};

export default Projecten;
