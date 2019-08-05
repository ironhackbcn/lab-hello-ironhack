import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <section className="container">
          <header>
            <nav>
              <img src='/images/ironhack-logo.svg' alt='Ironhack Logo'/>
              <section className="menu">
                <div className="burger"></div>
                <div className="burger2"></div>
              </section>
            </nav>
          </header>
          <main>
            <section className="main-section">
              <h1> Say hello to ReactJS</h1>
              <p className="subtitle">You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
              <button className="button">Awesome!</button>
            </section>
            </main>
          </section>
          <footer>
            <article>
              <img src='/images/icon1.png' alt='Icon 1'/>
              <h2>Declarative</h2>
              <p>React makes it paintless to create interactive UIs.</p>
            </article>
            <article>
              <img src='/images/icon2.png' alt='Icon 2'/>
              <h2>Components</h2>
              <p>Build encapsulated components that manahe their state.</p>
            </article>
            <article>
              <img src='/images/icon3.png' alt='Icon 3'/>
              <h2>Single-Way</h2>
              <p>A set of immutable values are passed to the component's.</p>
            </article>
            <article>
              <img src='/images/icon3.png' alt='Icon 4'/>
              <h2>JSX</h2>
              <p>Statistically-typed designed to run on modern browsers</p>
            </article>
          </footer>
    </div>
  );
}

export default App;
