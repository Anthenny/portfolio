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
          <h3>Software Developer</h3>

          <p>
            Ik ben een software developer wonend in de omgeving van Rotterdam. Ik hou mijzelf vooral
            bezig met full stack development en haal me voldoening uit het leren van nieuwe dingen
            en het leveren van goede producten.
          </p>

          <button>Download mijn CV</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
