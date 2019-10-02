import React, { Component } from "react";

class Card extends Component {
  render(props) {
    return (
      <div className="App-card">
        <img className="App-image-card"src={this.props.name} alt={this.props.titleImg}/>
        <h2 clasName="App-title-card">{this.props.titleCard}</h2>
        <p className="App-comment-card">{this.props.comment}</p>
      </div>
    );
  }
}

export default Card;

