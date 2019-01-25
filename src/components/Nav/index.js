import React from "react";
import "./style.css";

function Nav(props) {
  return (

    <div className="row red white-text valign-wrapper myRow">
      <div className="col s12 m2">
        <h3 className="flow-text center-align">Click a Pokemon to begin!</h3>
      </div>
      <div className="col s12 m8">
        <h1 className="center"><a href="/" className="mainTitle">Gotta Click 'Em All!</a></h1>
      </div>
      <div className="col s12 m2">
        <h4 className="flow-text">Score: {props.score}</h4>
        <h4 className="flow-text">Top Score: {(props.topscore > props.score) ? props.topscore : props.score}</h4>
      </div>
    </div>
  );
}

export default Nav;
