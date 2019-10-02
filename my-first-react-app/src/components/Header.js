import React, { Component } from "react";
import Navbar from "./Navbar";
import Title from "./Title";

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <Navbar></Navbar>
        <Title
          t1="Say Hello to ReactJS"
          t3="You will learn a Frontend framework from scratch, to became a Ninja Developer."
          comment="Awesome!"
        ></Title>
      </div>
    );
  }
}

export default Header;
