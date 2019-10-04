import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Card1 from "./components/Card1";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron title1="Sey Hello to ReactJS" title2="You will learn a FrontEnd framework from scratch, to become a Ninja Developer" />
        <div className="cards">
          <Card1 text1="Declarative" text2="React makes it painless to create interactive UIs" pic="../images/icon1.png"/>
          <Card1 text1="Components" text2="Build encapsulated components that manage their state" pic="../images/icon2.png"/>
          <Card1 text1="Single-Way" text2="A set of inmutable values are passed to the component's" pic="../images/icon3.png"/>
          <Card1 text1="JSX" text2="Statically-typed, designed to run on modern browsers" pic="../images/icon4.png"/>
        </div>
      </div>
    );
  }
}

export default App;

