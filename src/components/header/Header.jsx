import React from "react";
import logoFCS from '../../img/fcs.png'
import "./header.css";

function Header() {
  return (
    <nav className="nav">
      <img src={logoFCS} alt="fsc" />
      <p>
        Medicina <span>UPAP</span>
      </p>
      <div className="divider">
      </div>
    </nav>
  );
}

export default Header;
