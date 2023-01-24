import React from "react";
import logoFCS from "../img/fcs.png";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={`nav ${styles.nav}`}>
      <img src={logoFCS} alt="fsc" />
      <p>
        Medicina <span>UPAP</span>
      </p>
      <div className={styles.divider} />
    </nav>
  );
}

export default Navbar;
