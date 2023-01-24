import React from "react";
import "./section1.css";

import portada from "../../img/1533729f1d.png";

function Section1() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 initial-content">
          <h4 className="title1">Junte-se</h4>
          <h4 className="title2">Aqui estamos todos!!.</h4>
          <div className="title3">
            <h4>CONVOCATORIA 2023</h4>
          </div>
          <div className="btn">
            <a  className="btna" href="whatsapp://send?phone=595973115074&text=Hola,%20estoy%20interesado%20por%20medicina">
              <span>Entre em contato conosco agora</span>
            </a>
          </div>
        </div>
        <div className="col-lg-6 col2 img" style={{ backgroundImage: `url(${portada})` }}>
        </div>
      </div>
    </div>
  );
}

export default Section1;
//<img src={portada} />