import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <img src="./images/ironhack-logo.svg" />
        <img src="./images/menu-top.svg" />
      </nav>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">Say hello to ReactJS</h1>
        <p>
          You will learn a Frontend framework from scratch to become an Ninka Developer.
        </p>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Awesome!
        </a>
      </header>
      <main className="App-main">
        <img src="./images/icon1.png" />
        <img src="./images/icon2.png" />
        <img src="./images/icon3.png" />
        <img src="./images/icon4.png" />
      </main>
    </div>
  );
}

export default App;
