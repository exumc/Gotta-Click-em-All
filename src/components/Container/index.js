import React from "react";
import "./style.css";

function Container(props) {
  return (
    <div className="container main">
      <div className="row">{props.children}</div>
    </div>
  );
}

export default Container;
