import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-header">
          <a href="#"><img src={process.env.PUBLIC_URL + '/images/ironhack-logo.svg'} alt="iron-hack logo"/></a>
          <a href="#"><img src={process.env.PUBLIC_URL + '/images/menu-top.svg'} alt="menu-top"/></a>
        </nav>
        <section className="main">
          <h1>Say Hello to ReactJS</h1>
          <p>You will learn a Frontend framework form scratch to became a Ninka Developer.</p>
          <button>Awesome!</button>
        </section>
        <section className="articles">
          <article>
            <img src={process.env.PUBLIC_URL + '/images/icon1.png'} alt="icon1"/>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </article>
          <article>
            <img src={process.env.PUBLIC_URL + '/images/icon2.png'} alt="icon2"/>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </article>
          <article>
            <img src={process.env.PUBLIC_URL + '/images/icon3.png'} alt="icon3"/>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
          </article>
          <article>
            <img src={process.env.PUBLIC_URL + '/images/icon4.png'} alt="icon4"/>
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </article>
        </section>
      </div>
    );
  }
}

export default App;
