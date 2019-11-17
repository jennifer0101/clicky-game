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
    pics
  };

  render() {
    return (
      <div>
      <Navbar />
      <Jumbotron />
      <Wrapper>
          {this.state.pics.map(pics => (
        <Pics
          id={pics.id}
          key={pics.id}
          image={pics.image}
        />
      ))}
      </Wrapper>
      <Footer />
    </div>
    );
  }
}

export default App;
