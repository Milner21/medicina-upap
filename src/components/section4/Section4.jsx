import React from "react";
import "./section4.css";
import { BsCheck2Circle } from "react-icons/bs";
import background from "../../img/fondoGraduacion.png";

function Section4() {
  return (
    <div
      className="panel-background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="panel-section-04">
        <h3>Quer realizar seu sonho de estudar medicina?</h3>
        <h5>Na UPAP você está garantindo seu crescimento profissional.</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span data-aos="zoom-out-up" data-aos-duration="2000">
              <BsCheck2Circle />
            </span>
            Damos-lhe todo o apoio para atingir os seus objetivos.
          </li>
          <li className="list-group-item">
            <span data-aos="zoom-out-up" data-aos-duration="2000">
              <BsCheck2Circle />
            </span>
            Temos todos os meios de ensino, sejam presenciais ou virtuais.
          </li>
          <li className="list-group-item">
            <span data-aos="zoom-out-up" data-aos-duration="2000">
              <BsCheck2Circle />
            </span>
            Com o credenciamento pela ANEAES, o diploma que você vai obter será
            reconhecido em todo o Mercosul.
          </li>
          <li className="list-group-item">
            <h5 data-aos="zoom-out-up" data-aos-duration="500">
              De fato, somos a única universidade privada em ciudad del este com
              credenciamento na carreira MEDICINA.
            </h5>
          </li>
        </ul>
        <div className="panel-section-04-button">
          <div className="btn">
            <a className="btna">
              <span>Garanta sua vaga agora mesmo aqui</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;

/*
<div className="panel-section3">
        <h3>Quer realizar seu sonho de estudar medicina?</h3>
        <div className="row d-flex justify-content-">
          <div className="col-lg-6 col1">
            <div className="panel-section3-card">
              <h5>
                Na UPAP você está garantindo seu crescimento profissional.
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span data-aos="zoom-out-up" data-aos-duration="2000">
                    <BsCheck2Circle />
                  </span>
                  Damos-lhe todo o apoio para atingir os seus objetivos.
                </li>
                <li className="list-group-item">
                  <span data-aos="zoom-out-up" data-aos-duration="2000">
                    <BsCheck2Circle />
                  </span>
                  Temos todos os meios de ensino, sejam presenciais ou virtuais.
                </li>
                <li className="list-group-item">
                  <span data-aos="zoom-out-up" data-aos-duration="2000">
                    <BsCheck2Circle />
                  </span>
                  Com o credenciamento pela ANEAES, o diploma que você vai obter
                  será reconhecido em todo o Mercosul.
                </li>
                <li className="list-group-item">
                  <h5 data-aos="zoom-out-up" data-aos-duration="500">
                    De fato, somos a única universidade privada em ciudad del
                    este com credenciamento na carreira MEDICINA.
                  </h5>
                </li>
              </ul>
              <div className="panel-section3-button">
                <div className="btn">
                  <a className="btna">
                    <span>Garanta sua vaga agora mesmo aqui</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
*/
