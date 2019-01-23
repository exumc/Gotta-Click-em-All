import React from "react";
import "./style.css";

function GameCard(props) {
  return (
   <div role="img" className="clicky col s3" onClick={() => props.removeCard(props.id)} style={ { backgroundImage: `url(${props.image})`} }>
   </div>
  );
}

export default GameCard;
