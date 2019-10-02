import React, { Component } from "react";
import Card from "./Card";

class Cards extends  Component  {
  render() {
    return (
      <div className="App-Cards" >
        <Card name={process.env.PUBLIC_URL + "images/icon1.png"} titleImg="" titleCard="Declarative" comment="React makes it painless to create interactive UIs."/> 
        <Card name={process.env.PUBLIC_URL + "images/icon2.png"} titleImg="" titleCard="Components" comment="Build encapsulated components that manage theis state."/> 
        <Card name={process.env.PUBLIC_URL + "images/icon3.png"} titleImg="" titleCard="Single-Ways" comment="A set of inmutable values are passed to the component's."/> 
        <Card name={process.env.PUBLIC_URL + "images/icon4.png"} titleImg="" titleCard="JSX" comment="Statically-typed designed to run on modern browsers."/> 
      </div>

    );
  }
}

export default Cards;
