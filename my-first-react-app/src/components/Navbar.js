import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="App-Navbar">
        <div className="App-logo-Ironhack">
          <img
            className="App-logo"
            src={process.env.PUBLIC_URL + "images/ironhack-logo.svg"}
            alt="Ironhack Logo"
          />
        </div>
        <div className="App-logo-Hamburguer">
          <img
            className="App-logo"
            src={process.env.PUBLIC_URL + "images/menu-top.svg"}
            alt="Menu hamburguer Logo"
          />
        </div>
      </div>
    );
  }
}

export default Navbar;

/*   */
