import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    console.log(this.props);
    return (
      <nav>
        {this.props.title}
        <ul>
          {this.props.another}
        </ul>
      </nav>
    )
  }
}

export default Navbar;