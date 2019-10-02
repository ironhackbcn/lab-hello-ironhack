import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    return (
      <div className="title" >
        <header className="Header">
          <h1>Say hello to<br></br>
            ReactJS</h1>
          <h4>You will learn a Frontend<br></br>
            framework from sratch, to<br></br>
            become a Ninja Developer.</h4>
        </header>
      </div>
    );
  }
}

export default Title;
