import React from 'react';
import "./SecondComponent.css";

function SecondComponent() {
    const elements = [
        {
            image: "../images/icon1.png",
            title: "Declarative",
            text: "React makes it painless to create interactive UIs",
        },
        {
            image: "../images/icon2.png",
            title: "Components",
            text: "Build encapsulated components that manage their state",
        },
        {
            image: "../images/icon3.png",
            title: "SIngle-way",
            text: "A set of immutable values are passed to the component's",
        },
        {
            image: "../images/icon4.png",
            title: "JSX",
            text: "Statically-typed, designed to run on modern browsers",
        }

    ]

    const cards = elements.map( (e) =>{
       return (
           <div className= "card">
                <img src={e.image}></img>
                <h1>{e.title}</h1>
                <p>{e.text}</p>
           </div>
       );
    });
  return (
    <div className="SecondComponent">
        <div className = "cards">
           {cards}
        </div>
    </div>
  );
}

export default SecondComponent;
