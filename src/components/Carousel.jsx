import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
//import "../styles/carousel.css";
import styles from "../styles/Carousel.module.css";
import carouselItemBg01 from "../img/carouselBgImg01.jfif";
import carouselItemBg02 from "../img/carouselBgImg02.png";
import logo_upap from "../img/upap_logo.png";
import docRevalida from "../img/docRevalida.png";
import revalidaTitle from "../img/revalidaTitle.png";

const items = [
  {
    src: carouselItemBg01,
    altText: "Slide 1",
    caption: "Slide 1",
    content: <Content01 />,
  },
  {
    src: carouselItemBg02,
    altText: "Slide 2",
    caption: "Slide 2",
    content: <Content02 />,
  },
];

function Carrosel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
        <div
          className={styles.slide}
          style={{ backgroundImage: `url(${item.src})` }}
        >
          {item.content}
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      pause="hover"
      interval="5000"
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carrosel;

function Content01() {
  return (
    <div className={styles.container}>
      <img
        src={docRevalida}
        alt="ref1384354"
        className={styles.imgDocRevalida}
      />
      <img
        src={revalidaTitle}
        alt="ref546544"
        className={styles.imgRevalidaTitle}
      />
      <h4>
        <span>revalida brasil</span>
      </h4>
      <div className={styles.descContainer}>
        <h5>
          Temos um grande número de alunos aprovados no exame de revalidação de
          diploma no Brasil, bem como a possibilidade de fazer a revalidação
          simplificada.
        </h5>
      </div>
    </div>
  );
}
function Content02() {
  return (
    <div className={styles.container2}>
      <div className={styles.container2Img}>
        <img src={logo_upap} alt="ref3516513" className={styles.imgUpapLogo} />
      </div>
      <div className="container">
        <h5>
          A Universidade Artística e Politécnica foi criada pela lei nacional Nº
          954/96, além disso, a carreira de Medicina é autorizada pelo Conselho
          Nacional de Ensino Superior (CONES), resolução Nº 177/18, e
          credenciada pela Agência Nacional de Avaliação e Acreditação do Ensino
          Superior (ANEAES), pela resolução Nº 94.
        </h5>
      </div>
    </div>
  );
}
