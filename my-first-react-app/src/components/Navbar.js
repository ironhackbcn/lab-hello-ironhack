import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="App-Navbar">
         <img
          className="App-logo"
          src={process.env.PUBLIC_URL + "images/ironhack-logo.svg"}
          alt="Ironhack Logo"
        />
        <img
          className="App-logo"
          src={process.env.PUBLIC_URL + "images/menu-top.svg"}
          alt="Menu hamburguer Logo"
        /> 
      </div>
    );
  }
}

export default Navbar;

/*   */
