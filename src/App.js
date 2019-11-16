import React from 'react';
//import Wrapper from "./components/wrapper";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
//import Card from "./components/card";
import Footer from "./components/footer";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="containter">
      <Navbar />
      <Jumbotron />
      <Footer />
    </div>
  );
}

export default App;
