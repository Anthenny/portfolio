import React from "react";
import "./overMij.scss";

const OverMij = () => {
  return (
    <div className="over-mij">
      <h1>
        <span>02. </span>Over mij
      </h1>
      <div className="over-mij__container">
        <div className="over-mij__info">
          <p>
            Ik ben een student die tijdens corona een switch heeft gemaakt van koken naar
            programmeren. Het is als een <span>droom die uitkomt.</span> En ik kan niet wachten tot
            ik van mijn hobby mijn werk kan maken.
          </p>
          <br />
          <p>
            Ik ben gewend om hard te werken, ik kan goed in een team werken en vind het super leuk
            om dingen bij te leren en mijzelf te verbeteren.
          </p>
        </div>
        <div className="over-mij__foto">
          <div className="foto"></div>
          <div className="box" />
        </div>
      </div>
      <div className="over-mij__vaardigheden">
        <div className="over-mij__skills">
          <h6>Mijn vaardigheden:</h6>
          <div className="over-mij__lijst">
            <div className="lijst__1">
              <ul>
                <li>
                  <img src="./img/arrow-forward.png" alt="pijl" />
                  HTML & (S)CSS
                </li>
                <li>
                  <img src="./img/arrow-forward.png" alt="pijl" />
                  Javascript
                </li>
                <li>
                  <img src="./img/arrow-forward.png" alt="pijl" />
                  React Js
                </li>
                <li>
                  <img src="./img/arrow-forward.png" alt="pijl" />
                  Node Js
                </li>
              </ul>
            </div>

            <div className="lijst__2">
              <ul>
                <li>
                  <img src="./img/arrow-forward.png" alt="pijl" />
                  PHP
                </li>
                <li>
                  <img src="./img/arrow-forward.png" alt="pijl" />
                  NoSQL (MONGO DB) & MySQL
                </li>
                <li>
                  <img src="./img/arrow-forward.png" alt="pijl" />
                  Git
                </li>
                <li>
                  {" "}
                  <img src="./img/arrow-forward.png" alt="pijl" />
                  Adobe XD
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="over-mij__icons">
          <img src="./img/insta.png" alt="instagram" />
          <img src="./img/github.png" alt="github" />
          <img src="./img/linked.png" alt="linked in" />
        </div>
      </div>
    </div>
  );
};

export default OverMij;
