import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import CardsContainer from "./components/CardsContainer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <CardsContainer></CardsContainer>
      </div>
    );
  }
}

export default App;
