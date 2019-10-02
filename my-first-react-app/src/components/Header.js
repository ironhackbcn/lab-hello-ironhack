import React, { Component } from "react";
import Navbar from "./Navbar";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Navbar></Navbar>
      </header>
    );
  }
}

export default Header;
