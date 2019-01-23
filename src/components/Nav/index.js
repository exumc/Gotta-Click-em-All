import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav>
      <div class="nav-wrapper red">
        <div class="score">
          <span>
            score:
            <span>{props.score}</span>
          </span>
          <span>top score: {props.score}</span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
