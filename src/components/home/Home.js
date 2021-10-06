import React from "react";
import { Link } from "react-scroll";
import "./home.scss";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="home__left">
          <div className="home_scroll">
            <p>Scroll naar beneden!</p>
            <Link to="over-mij" smooth={true} duration={500} spy={true} exact="true">
              <img src="./img/arrow-down.png" alt="pijl naar beneden" />
            </Link>
          </div>
        </div>
        <div className="home__right">
          <h1>Anthenny de Hoon</h1>
          <h1 className="h3">Software Developer</h1>

          <p>
            Ik ben een software developer woonachtig in de omgeving van Rotterdam. mijn interesses
            liggen voornamelijk bij full stack development. Ik haal veel voldoening uit het
            verbreden van mijn kennis en het leveren van goede projecten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
