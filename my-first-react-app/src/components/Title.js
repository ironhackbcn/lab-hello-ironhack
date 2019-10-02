import React, { Component } from "react";

class Title extends Component {
  render(props) {
    return (
      <div className="App-title">
        <h1 class="App-h1">{this.props.t1}</h1>
        <h3 class="App-h3">{this.props.t3}</h3>
        <button className="App-button-Awesome"value={this.props.comment}></button>
      </div>
    );
  }
}

export default Title;
