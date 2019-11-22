import React from "react";
import Score from "../Score";
import Alert from "../Alert";
import "./style.css";
import { tsPropertySignature } from "@babel/types";

function Navbar(props) {
  return (
    <nav className="navbar">{props.children}
        <div className="container">
            <a className="navbar-brand" href="/">Clicky Game!</a>
            <Alert />
            <Score
              score={props.score}
            />
        </div>
    </nav>
  );
}

export default Navbar;
