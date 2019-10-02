import React from "react";

const header = () => {
  return (
    <header className="App-header">
      <nav class="navbar">
        <a href="/">
          <img src="../ironhack-logo.svg" className="App-logo" alt="logo" />
        </a>
        <span class="navbar-toggle">
          <img src="../menu-top.svg" alt="Menu icon" />
        </span>
      </nav>
      <div class="hero-content">
        <h1>Say Hello to ReactJS</h1>
        <h4>
          You will learn a Frontend framework from scratch, to become a Ninja
          Developer
        </h4>
        <button>Awesome!</button>
      </div>
    </header>
  );
};

export default header;
