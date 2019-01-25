import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero white-text valign-wrapper container-fluid">
        {props.children}
    </div>
  );
}

export default Hero;
