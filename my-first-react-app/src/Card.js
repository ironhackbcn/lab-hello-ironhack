import React, { Component } from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card" >
      <img class="card-img" src={props.image} alt="image" />
      <h5>{props.sentence}</h5>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;