import React, { Component } from "react";
import "./css/navbar.css";
import logoIronHack from "../images/ironhack-logo.svg";
import menuImg from "../images/menu-top.svg";

class Navbar extends Component {
  render() {
    return (
      <nav className="navBar">
        <img src={logoIronHack} alt="logoIronHack" />
        <img src={menuImg} alt="menu" />
      </nav>
    );
  }
}

export default Navbar;
