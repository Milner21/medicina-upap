import React from "react";
import Carousel from "../components/Carousel";
import styles from "../styles/SectionThree.module.css";

function SectionThree() {
  return (
    <div className={styles.containerBg}>
      <div className={styles.divider} />
      <div className="container">
        <Carousel />
      </div>
    </div>
  );
}

export default SectionThree;
