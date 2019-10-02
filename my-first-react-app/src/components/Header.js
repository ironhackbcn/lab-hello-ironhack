import React from "react";
import Navigation from "./Navigation.js";

const header = () => {
  return (
    <header className="App-header">
      <Navigation />
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
