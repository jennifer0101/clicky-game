import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">{props.children}
            <div className="container">
                <p className="display-4">Clicky Game!</p>
                <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    );
}

export default Jumbotron;
