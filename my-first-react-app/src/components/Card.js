import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div class="card">
        <div class="icon">
          <img src={this.props.icon} alt="React Card" />
        </div>
        <h3>{this.props.title}</h3>
        <p>{this.props.paragraph}</p>
      </div>
    );
  }
}

export default Card;
