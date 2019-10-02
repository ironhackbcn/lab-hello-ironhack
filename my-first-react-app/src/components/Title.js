import React, { Component } from "react";

class Title extends Component {
  render(props) {
    return (
      <div className="App-title">
        <h1 className="App-h1">{this.props.t1}</h1>
        <h5 className="App-h3">{this.props.t3}</h5>
        <button className="App-button-Awesome">{this.props.comment}</button>
      </div>
    );
  }
}

export default Title;
