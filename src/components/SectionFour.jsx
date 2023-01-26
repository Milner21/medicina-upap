import React from "react";
import styles from "../styles/SectionFour.module.css";
import { BsCheck2Circle } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import WhatsMe from "./WhatsMe";

function SectionFour() {
  const { message, send } = WhatsMe();

  return (
    <div className={styles.containerBg}>
      <div className={`container ${styles.container}`}>
        <h3>Quer realizar seu sonho de estudar medicina?</h3>
        <h4>Na UPAP você está garantindo seu crescimento profissional.</h4>
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
            Com o credenciamento pela ANEAES, o diploma que você vai obter Com o
            diploma que vai obter, terá possibilidade de realizar a revalidação
            simplificada.
          </li>
        </ul>
        <h5>
          De fato, somos a única universidade privada em ciudad del este com
          credenciamento na carreira MEDICINA.
        </h5>
        <div className={styles.button}>
          <a href={`${send}`} onClick={() => message("messageSectionFour")}>
            <span>
              Entre em contato conosco agora
              <span className={styles.icon}>
                <BsWhatsapp />
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
