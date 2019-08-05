import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="header-section"> 
        <nav>
          <img src="./images/ironhack-logo.svg" alt="ironhack logo" />
          <a href="/#"><img src="./images/menu-top.svg" alt="menu" /></a>
        </nav>
        <section>
          <h1>Say hello to ReactJS</h1>
          <h3>You will learn a Frontend framework from scratch, to become an Ninka Developer</h3>
          <a href="/#">Awesome!</a>
        </section>
      </section>
      <section className="body-section"> 
        <article>
          <img src="./images/icon1.png" alt="Declarative"/>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </article>
        <article>
          <img src="./images/icon2.png" alt="Components"/>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </article>
        <article>
          <img src="./images/icon3.png" alt="Single-Way"/>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </article>
        <article>
          <img src="./images/icon4.png" alt="JSX"/>
          <h2>JSX</h2>
          <p>Statically-typed, desogned to run on modern browsers.</p>
        </article>
      </section>
    </div>
  );
}

export default App;
