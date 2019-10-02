import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div className="card-image-wrapper">
          <img src={this.props.image} alt="" />
        </div>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Card;
