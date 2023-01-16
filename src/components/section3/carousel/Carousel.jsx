import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import "./carousel.css";
import fondo1 from "../../../img/fondo.jfif";
import fondo2 from "../../../img/fondo02.png";
import logo_upap from "../../../img/upap_logo.png";
import docRevalida from "../../../img/docRevalida.png";
import revalidaTitle from "../../../img/revalidaTitle.png";

const items = [
  {
    src: fondo1,
    altText: "Slide 1",
    caption: "Slide 1",
    content: <Content01 />,
  },
  {
    src: fondo2,
    altText: "Slide 2",
    caption: "Slide 2",
    content: <Content02 />,
  },
];

class Carrosel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div
            className="slide"
            style={{ backgroundImage: `url(${item.src})`, minHeight: "450px" }}
          >
            {item.content}
          </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Carrosel;

function Content01() {
  return (
    <div className="panel-content-01">
      <img src={docRevalida} alt="ref1384354" className="imgDocRevalida" />
      <img src={revalidaTitle} alt="ref546544" className="imgRevalidaTitle" />
      <h4>
        <span>revalida brasil</span>
      </h4>
      <div className="container">
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
    <div className="panel-content-02">
      <div className="panel-content-02-img">
        <img src={logo_upap} alt="ref3516513" className="imgUpapLogo" />
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
