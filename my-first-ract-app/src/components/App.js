import React, { Component } from 'react';
import '../css/App.css';
import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron title="Say hello to ReactJS" subtitle="You will learn a FrontEnd framework from scratch, to become a Ninja Developer" />
        <div className="card-wrapper">
          <Card  title="Declarative" image="/img/icon1.png" text="React makes it painless to create interactive UIs"/>
          <Card  title="Components" image="/img/icon2.png" text="Build encapsulated components that manage their state"/>
          <Card  title="Single-Way" image="/img/icon3.png" text="A set of inmutable values are passed to the component's"/>
          <Card  title="JSX" image="/img/icon4.png" text="Statically-typed, designed to run on modern browsers"/>
        </div>
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
