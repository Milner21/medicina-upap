import React from "react";
import styles from "../styles/SectionTwo.module.css";
//import icons
import { AiOutlineFileProtect } from "react-icons/ai";
import { FiCheckSquare } from "react-icons/fi";
import { BsFileEarmarkDiff } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const cardsItem = [
  {
    icon: <BsFileEarmarkDiff />,
    title: "sem vestibular",
    description:
      "Basta reservar sua vaga e realizar o sonho de ser um profissional.",
  },
  {
    icon: <FiCheckSquare />,
    title: "certificação",
    description:
      "A UPAP possui todas as certificações, habilitações e acreditações exigidas pelo MEC, CONES, ANEAES, portanto os diplomas emitidos são 100% legais.",
  },
  {
    icon: <AiOutlineFileProtect />,
    title: "reconhecimento",
    description:
      "Por possuir todos os credenciamentos, os títulos emitidos têm mais valor do que outras universidades do país, reconhecendo você como um profissional formado.",
  },
  {
    icon: <GiTakeMyMoney />,
    title: "mais barato",
    description:
      "A vida no Paraguai é muito mais barata que no Brasil, como aluguel, alimentação, mobilidade, etc. Além disso, por causa do câmbio, é ainda melhor.",
  },
  {
    icon: <IoIosPeople />,
    title: "cultura diversificada",
    description:
      "Ciudad del Este é conhecida por sua diversidade cultural, recebe mais de 15.000 estrangeiros por mês, a maioria deles brasileiros, devido a sua fronteira com o Brasil",
  },
  {
    icon: <HiOutlineBuildingOffice2 />,
    title: "infraestrutura",
    description:
      "A UPAP possui toda a infraestrutura necessária para os alunos, com 3 filiais em Ciudad del Este, além de um hospital universitário em fase de conclusão.",
  },
];

function SectionTwo() {
  return (
    <div className={styles.containerBg}>
      <div className={styles.container}>
        <h3>
          <span>Os benefícios de estudar MEDICINA na UPAP</span>
          <div className={styles.divider} />
        </h3>
        <div className="container">
          <div className={styles.CardContainer}>
            {cardsItem.map((item, i) => (
              <div
                className={styles.gridContainer}
                key={i}
              >
                <span>{item.icon}</span>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
