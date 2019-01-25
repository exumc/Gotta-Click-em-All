import React from "react";
import "./style.css";

function Main(props) {

  return (
    <main className="container main">
      <div className="row">{props.children}</div>
    </main>
  );
}

export default Main;
