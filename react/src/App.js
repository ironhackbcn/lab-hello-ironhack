import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src="images/ironhack-logo.svg"/>
          <img id="menu" src="images/menu-top.svg"/>
        </nav>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
        <button>Awesome!</button>

      </header>
      <section className="flex-container"> 
      <article className="card"><img src="images/icon1.png"/><h3>Declarative</h3><p>React makes it painless to create interactive UIs</p></article>
      <article className="card"><img src="images/icon2.png"/><h3>Declarative</h3><p>React makes it painless to create interactive UIs</p></article>
      <article className="card"><img src="images/icon3.png"/><h3>Declarative</h3><p>React makes it painless to create interactive UIs</p></article>
      <article className="card"><img src="images/icon4.png"/><h3>Declarative</h3><p>React makes it painless to create interactive UIs</p></article>
      </section>
    </div>
  );
}

export default App;
