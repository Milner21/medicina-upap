import React from "react";
import styles from "../styles/SectionOne.module.css";
import img01 from "../img/img01Section01.png";
import img02 from "../img/img02Section01.png";
import { BsWhatsapp } from "react-icons/bs";
import WhatsMe from "./WhatsMe";

function SectionOne() {
  const {message, send} = WhatsMe()

  return (
    <div className={styles.containerBg}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className={`col-md-6 col-lg-6 ${styles.columnOneContainer}`}>
            <h4 className={styles.title01}>Não perca esta oportunidade</h4>
            <h4 className={styles.title02}><span>por apenas</span></h4>
            <h4 className={styles.title03}>1500 R$</h4>
            <h4 className={styles.title04}>você pode realizar seu sonho de ser médico</h4>
            <h4 className={styles.title05}>só aqui na UPAP</h4>
            <h4 className={styles.title06}>
              <span>convocatoria 2023</span>
            </h4>
            <div className={styles.button}>
              <a href={`${send}`} onClick={() => message("messageSectionOne")}>
                <span>
                  Entre em contato conosco agora
                  <span className={styles.icon}>
                    <BsWhatsapp />
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className={`col-md-6 col-lg-6 ${styles.columnTwoContainer}`}>
            <img src={img01} alt="img01" className={styles.img01} />
            <img src={img02} alt="img02" className={styles.img02} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;

/*
 <div className={styles.button}>
              <a href="whatsapp://send?phone=595982789647&text=Hola,%20estoy%20muy%20interesado%20en%20estudiar%20medicina%20en%20paraguai,%20en%20la%20UPAP,%20me%20podrias%20dar%20mas%20informacion">
                <span>Entre em contato conosco agora</span>
              </a>
            </div>
            {`${send}`}
            */
