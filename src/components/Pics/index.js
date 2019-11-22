import React from "react";
import "./style.css";

class MerImage extends React.Component {
    state ={
        clicked: false
    }

    selectedPics = () => {
        // if this has been clicked
            // run onFail()
        // else
            this.setState({ clicked: true});
            this.props.onClick();
    }

    render () {
    return (
        <div className="merImage">
            <div className="img-container">
                <img alt={this.props.id} src={this.props.image} onClick={ this.selectedPics }/>
            </div>
            <p>Ayy!{this.state.clicked ? "YEP" : "NOPE"}</p>
        
        </div>
    );
}
}

export default MerImage;