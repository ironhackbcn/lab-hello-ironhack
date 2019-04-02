import React, { Component } from 'react';
// import Navbar from './components/Navbar';
import Article from './components/Article';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <nav>

          </nav>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch to become a Ninja Developer</p>
          <button type="button">Click Me!</button>
        </section>
        <section className='test'>
          <Article image='/images/icon1.png' alt='Declarative' title='Declarative' text='React makes it painless to create interactive UIs' />
          <Article image='/images/icon2.png' alt='Components' title='Components' text='Build encapsulated components that manage their state' />
          <Article image='/images/icon3.png' alt='Single-way' title='Single-way' text='A set of immutable values are passed to the components' />
          <Article image='/images/icon4.png' alt='JSX' title='JSX' text='Statically-type designed to run on moder browsers' />
        </section>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> */}
      </div>
    );
  }
}

export default App;
