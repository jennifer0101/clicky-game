import React from "react";
import "./style.css";

function MerImage(props) {
    return (
        <div className="merImage">
            <div className="img-container">
                <img alt={props.id} src={props.image} onClick={() => props.onClick()}/>
            </div>
        
        </div>
    );
}

export default MerImage;