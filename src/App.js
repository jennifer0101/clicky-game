import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Pics from "./components/Pics";
import Footer from "./components/Footer";
import pics from "./pics.json";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    pics,
    score: 0,
    topScore: 0,
    clickedPics: '',
  };

  shufflePics = (pics) => {
    let i,
        j,
        temp;
    for (i = pics.length -1; i > 0; i--) {
      j = Math.floor(Math.random()*(i+1));
      temp = pics[i];
      pics[i] = pics[j];
      pics[j] = temp;
    }
    return pics
  } 

  shame = () => {
    // reset the score
    // reset all states to false
  }


  gameClicks = () => {
    let newScore=this.state.score;
    newScore = newScore+1
    this.setState({ score: newScore, pics: this.shufflePics(this.state.pics), clickedPics: this.scoreGame(this.state.clickedPics) })
  };

  scoreGame = () => {
    
  }

  render() {
    return (
      <div>
      <Navbar 
        score={this.state.score}
      />
      <Jumbotron />
      <Wrapper>
          {this.state.pics.map(pics => (
        <Pics
          id={pics.id}
          key={pics.id}
          image={pics.image}
          onClick={this.gameClicks}
          onFail={this.shame}
        />
      ))}
      </Wrapper>
      <Footer />
    </div>
    );
  }
}

export default App;
