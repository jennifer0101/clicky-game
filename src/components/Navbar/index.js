import React from "react";
import "./style.css";
import { tsPropertySignature } from "@babel/types";

function Navbar(props) {
  return (
    <nav className="navbar">{props.children}
        <div className="container">
            <a className="navbar-brand" href="/">Clicky Game!</a>
        </div>
    </nav>
  );
}

export default Navbar;
