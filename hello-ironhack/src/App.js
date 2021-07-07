import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header> 
        <nav class="nav-bar">
          <img src="./images/ironhack-logo.svg" alt= "ironhack-logo"/>
          <img src="./images/menu-top.svg" alt="menu-top"/>
        </nav>
          <main class="main-info">
            <h1>Say hello to ReactJS
            </h1>
            <p>You will learn a Frontend framework from scrath, to become an Ninja Developer.
            </p>
            <button>Awesome!
            </button>
          </main>
      </header>
      <section class="section-info">
        <article class="article-info">
          <img src="./images/icon1.png" alt=""/>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </article>
        <article class="article-info">
          <img src="./images/icon2.png" alt=""/>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </article>
        <article class="article-info">
          <img src="./images/icon3.png" alt=""/>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </article>
        <article class="article-info">
          <img src="./images/icon4.png" alt=""/>
          <h2>JSX</h2>
          <p>Statically-typed designed to run on modern browsers.</p>
        </article>
      </section>
    </div>
  );
}

export default App;
