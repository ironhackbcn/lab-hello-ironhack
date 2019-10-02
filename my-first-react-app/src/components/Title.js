import React, { Component } from "react";

class Title extends Component {
  render(props) {
    return (
      <div>
        <h1>{this.props.t1}</h1>
        <h3>{this.props.t3}</h3>
      </div>
    );
  }
}

export default Title;
