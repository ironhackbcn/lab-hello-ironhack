import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
        <img src="images/ironhack-logo.svg" />
        <img id="menu" src="images/menu-top.svg" />
      </nav>
      <section className="landing">
        <img id="react-logo" src="images/react-logo.svg" ></img>
      <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
        <button>Awesome!</button>
      </section>
      </header>
      <section className="flex-container">
        <article>
          <img src="images/icon1.png"></img>
          <header>
            <h3>Declarative</h3>
            </header>
          <p>React makes it painless to create interactive UIs.</p>
        </article>
        <article>
        <img src="images/icon2.png"></img>
        <header>
          <h3>Components</h3>
          </header>
          <p>Build encapsulated components that manage their state.</p>
        </article>
        <article>
        <img src="images/icon3.png"></img>
        <header>
          <h3>Sigle-Way</h3>
          </header>
          <p>A set of immutable values are passed to the component's.</p>
        </article>
        <article>
        <img src="images/icon4.png"></img>
        <header>
          <h3>JSX</h3>
          </header>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </article>
      </section>
    </div>
  );
}

export default App;
