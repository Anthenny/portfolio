import React from "react";
import "./overMij.scss";

const OverMij = () => {
  return (
    <div className="over-mij" id="over-mij">
      <h1>
        <span>02. </span>Over mij
      </h1>
      <div className="over-mij__container">
        <div className="over-mij__info">
          <p>
            Tijdens de pandemie heb ik de switch gemaakt van gespecialiseerd kok naar student
            software developer. Coderen was vroeger een hobby en nu ik de kans heb om te doen wat ik
            echt leuk vind voelt het als een <span>droom die uitkomt.</span>
          </p>
          <br />
          <p>
            Omdat ik al vanaf mijn 17e al aan het koken ben kan ik goed in een team werken.
            Daarnaast kan ik niet wachten om soft/hard skills te leren van mensen die veel meer
            ervaring als mij hebben.
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

        {/* <div className="over-mij__icons">
          <img src="./img/insta.png" alt="instagram" />
          <img src="./img/github.png" alt="github" />
          <img src="./img/linked.png" alt="linked in" />
        </div> */}
      </div>
    </div>
  );
};

export default OverMij;
