import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.image} alt=""/>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Card;