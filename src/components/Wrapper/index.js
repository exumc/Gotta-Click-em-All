import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div style={{
    backgroundImage: `url(${props.background})`,
    backgroundSize: `cover`

  }}>{props.children}</div>;
}

export default Wrapper;
