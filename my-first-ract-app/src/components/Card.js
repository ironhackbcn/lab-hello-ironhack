import React from 'react';
import '../css/card.css';

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.image} alt="" />
        <div className="text-container">
            <h2>{props.title}</h2>
            <div>{props.text}</div>
        </div>
        
    </div>
  );
};
export default Card
