import React from "react";
import "./style.css";

function Score(props) {
    return (
    <span className="score text-right">{props.children}
<p>Score: {props.score}| Top Score: 0</p></span>
    )
}

export default Score;