import React, { Component } from 'react';
import './jumbotron.css';
import Button from './button.js';
import Header from './header';

const Jumbotron = () => {
  return (
    <div className="style-jumbotron">
      <Header />
      <h1>
        Say hello to <br />
        ReactJS
      </h1>
      <p className="info-jumbotron">
        You will learn a Frontend <br />
        framework from scratch, to
        <br />
        becaome an Ninka Developer.
      </p>
      <Button />
    </div>
  );
};

export default Jumbotron;
