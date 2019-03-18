import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Features from './components/Features';



class App extends Component {
  render() {
    return (
      [<Nav logoImage='/images/ironhack-logo.svg' menuImage='/images/menu-top.svg' />,
      <Intro />,
      <Features />
      ]
    );
  }
}

export default App;