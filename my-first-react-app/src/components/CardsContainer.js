import React, { Component } from "react";
import Card from "./Card.js";

class CardsContainer extends Component {
  render() {
    return (
      <div class="cards-container">
        <Card
          icon="../icon1.png"
          title="Declarative"
          paragraph="React makes it painless to create interactive UIs."
        />
        <Card
          icon="../icon2.png"
          title="Components"
          paragraph="Build encapsulated components that manage their state."
        />
        <Card
          icon="../icon3.png"
          title="Single-way"
          paragraph="A set of immutable values are passed to the component's."
        />
        <Card
          icon="../icon4.png"
          title="JSX"
          paragraph="Statically typed, designed to run on mode browsers."
        />
      </div>
    );
  }
}

export default CardsContainer;
