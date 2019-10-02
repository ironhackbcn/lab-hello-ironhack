import React, { Component } from 'react';
import Navbar from './Navbar';
import Button from './Button';

import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <>
        <div className="Jumbotron">
          <Navbar />
          <div className="Jumbotron-text">
            <h1>Say Hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch, to became an
              Ninka Developer.
            </p>
            <Button />
          </div>
        </div>
      </>
    );
  }
}

export default Jumbotron;
