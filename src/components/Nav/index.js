import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav>
    <div className="nav-wrapper">
      <span className="brand-logo center">Logo</span>
      <ul id="nav-mobile" className="right">
        <li><h5>Score: {props.score}</h5></li>
        <li><h5>Top Score: {props.topscore}</h5></li>
    
      </ul>
    </div>
  </nav>
  );
}

export default Nav;
