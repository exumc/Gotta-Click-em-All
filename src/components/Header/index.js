import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="header valign-wrapper">
      <div className="container center">
        <h1 className="red-text text-darken-4">{props.children}</h1>
      </div>
    </div>
  );
}

export default Header;
