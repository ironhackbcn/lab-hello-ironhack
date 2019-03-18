import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';


const data = [
  {
    image: 'images/icon1.png',
    title: "Declarative",
    description: "React makes it painless to create interactive UIs"
  },
  {
    image: './images/icon2.png',    
    title: "Components",
    description: "Build encapsulated components that manage their state."
  },
  {
    image: './images/icon3.png',    
    title: "Single-Way",
    description: "A set of immutable values are passed to the component's."
  },
  {
    image: '../images/icon4.png',    
    title: "JSX",
    description: "Statically-typed, designed to run on modern browsers"
  }  
] 



class App extends Component {
  render() {
    return  (
      <div className="container">
        <nav>
          <img src="./images/ironhack-logo.svg" alt="#"></img>
          <img src="../images/menu-top.svg" alt="#"></img> 
        </nav>
        <div className="main">
          <h1>Say hello to ReactJS</h1>
          <p> You will learn a Frontend framework from scratch, to becaome an Ninka Developer </p>
          <button> Awesome!</button>
        </div>
        <div className="section-two">
          {data.map((item, index)  => {
            return <Card key={`id-${index}`}
            image = {item.image}
            title = {item.title}
            description = {item.description} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
