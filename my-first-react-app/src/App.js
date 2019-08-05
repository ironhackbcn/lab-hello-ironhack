import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="site-header">
        <nav className="navbar">
          <img src="./images/ironhack-logo.svg" alt="ironhack logo" />
          <img src="./images/menu-top.svg" alt="burger menu icon" />
        </nav>
        <h1 className="site-title">Say hello to ReactJS</h1>
        <p className="site-description">You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
        <a href="/" className="button">Awesome!</a>
      </header>
      <main className="site-main">
        <article className="feature-card">
          <img className="card-image" src="./images/icon1.png" alt="Declarative feature" />
          <h2 className="card-title">Declarative</h2>
          <p className="card-description">React makes it painless to create interactive UIs</p>
        </article>
        <article className="feature-card">
          <img className="card-image" src="./images/icon2.png" alt="Components feature" />
          <h2 className="card-title">Components</h2>
          <p className="card-description">Build encapsulated components that manage their state</p>
        </article>
        <article className="feature-card">
          <img className="card-image" src="./images/icon3.png" alt="Single-Way feature" />
          <h2 className="card-title">Single-Way</h2>
          <p className="card-description">A set of immutable values are a passed to the component's</p>
        </article>
        <article className="feature-card">
          <img className="card-image" src="./images/icon4.png" alt="JSX feature" />
          <h2 className="card-title">JSX</h2>
          <p className="card-description">Statically-typed, designed to run on modern browsers</p>
        </article>
      </main>
      <footer class="site-footer">
        <p class="footer-credits">&copy;</p>
        <p class="footer-credits">Created by Esther, Jundi & Anna</p>
      </footer>
    </div>
  );
}

export default App;
