import React, { Component } from 'react';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import Header from './components/Header';
import Box from './components/Box';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section>
           <Box img={icon1} subtitle="Declarative" text="React makes it painless to create interactive UIs."/>
           <Box img={icon2} subtitle="Components" text="Build encapsulated components that manage their state."/>
           <Box img={icon3} subtitle="Single-Way" text="A set of inmutable values are passed to the component's."/>
           <Box img={icon4} subtitle="JSX" text="Statically-typed, designed to run on modern browsers."/>
        </section>
        

      </div>
      
    );
  }
}

export default App;
