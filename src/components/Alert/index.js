import React from "react";
import "./style.css";

function Alert(props) {
    return (
    <span className="alert text-center">{props.children}
        <p>Click an image to begin!{props.alert}</p></span>
    )
}

export default Alert;