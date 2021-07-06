import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <section className="first-section">
      <nav>
        <img className = "ih-logo" src="./images/ironhack-logo.svg" />
        <img className = "burger-menu" src="./images/menu-top.svg" />
      </nav>
      <div className="main-text">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become an Ninka Developer</p>
        <a className="main-button" href="#0">Awesome!</a>
      </div>
    </section>
    <section className="second-section">
      <article>
        <img src="./images/icon1.png" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </article>
      <article>
        <img src="./images/icon2.png" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </article>
      <article>
        <img src="./images/icon3.png" />
        <h3>Single-Way</h3>
        <p>Set of immuttable values are passed to the components.</p>
      </article>
      <article>
        <img src="./images/icon4.png" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </article>
    </section>
    </>
  );
}

export default App;
