import React from "react";
import "./style.css";

function GameCard(props) {
  return (
  

<div className="col s3 clicky">
  <div className="card small" onClick={() => props.removeCard(props.id)}>
    <div className="card-image">
      <img src={props.image} alt={props.name} class="responsive-img"/>
    </div>
    <div className="card-content">
     <h5>{props.name}</h5>
    </div>
  </div>
  </div>
  );
}

export default GameCard;
