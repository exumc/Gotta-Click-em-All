import React from "react";
import "./style.css";

function GameCard(props) {
  return (
  

<div className="col s4 ">
  <div className={"clicky white center valign-wrapper " + (props.shake ? "shake" : "") } onClick={() => props.removeCard(props.id)}>
  
      <img src={props.image} alt={props.name} class="responsive-img myImg"/>
    
  </div>
  </div>
  );
}

export default GameCard;
