import React from "react";
import "../section2/section2.css";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FiCheckSquare } from "react-icons/fi";
import { BsFileEarmarkDiff } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

function Section2() {
  return (
    <div className="panel">
      <div className="panel-title">
        <h4>Os benefícios de estudar MEDICINA na UPAP</h4>
      </div>
      <div className="panel-cards">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm col-md-3 d-flex justify-content-center p-3">
              <div className="panel-card">
                <span>
                  <BsFileEarmarkDiff />
                </span>
                <h5>sem vestibular</h5>
                <p className="text-center">
                  Basta reservar sua vaga e realizar o sonho de ser um
                  profissional.
                </p>
              </div>
            </div>
            <div className="col-sm col-md-3 d-flex justify-content-center p-3">
              <div className="panel-card">
                <span>
                  <FiCheckSquare />
                </span>
                <h5>certificação</h5>
                <p className="text-center">
                  A UPAP possui todas as certificações, habilitações e
                  acreditações exigidas pelo MEC, CONES, ANEAES, portanto os
                  títulos emitidos são 100% legais.
                </p>
              </div>
            </div>
            <div className="col-sm col-md-3 d-flex justify-content-center p-3">
              <div className="panel-card">
                <span>
                  <AiOutlineFileProtect />
                </span>
                <h5>reconhecimento</h5>
                <p className="text-center">
                  Por possuir todos os credenciamentos, os títulos emitidos têm
                  mais valor do que outras universidades do país, reconhecendo
                  você como um profissional formado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="panel-cards">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm col-md-3 d-flex justify-content-center p-3">
              <div className="panel-card">
                <span>
                  <GiTakeMyMoney />
                </span>
                <h5>mais barato</h5>
                <p className="text-center">
                  A vida no Paraguai é muito mais barata que no Brasil, como
                  aluguel, alimentação, mobilidade, etc. Além disso, por causa
                  do câmbio, é ainda melhor.
                </p>
              </div>
            </div>
            <div className="col-sm col-md-3 d-flex justify-content-center p-3">
              <div className="panel-card">
                <span>
                  <IoIosPeople />
                </span>
                <h5>cultura diversificada</h5>
                <p className="text-center">
                  Ciudad del Este é conhecida por sua diversidade cultural,
                  recebe mais de 15.000 estrangeiros por mês, a maioria deles
                  brasileiros, devido a sua fronteira com o Brasil
                </p>
              </div>
            </div>
            <div className="col-sm col-md-3 d-flex justify-content-center p-3">
              <div className="panel-card">
                <span>
                  <HiOutlineBuildingOffice2 />
                </span>
                <h5>infraestrutura</h5>
                <p className="text-center">
                  A UPAP possui toda a infraestrutura necessária para os alunos,
                  com 3 filiais em Ciudad del Este, além de um hospital
                  universitário em fase de conclusão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="panel-button">
        <a className="button-section2">
          <span>Obtenha mais informações aqui</span>
        </a>
      </div>
    </div>
  );
}

export default Section2;
