import React from 'react';
import './Jumbotron.css';
import Button from './Button';

function Jumbotron() {
  return (
    <div className="Jumbotron">
      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn a Frontend framework from scratch, to become a Ninja
        Developer.
      </p>
      <Button />
    </div>
  );
}

export default Jumbotron;
