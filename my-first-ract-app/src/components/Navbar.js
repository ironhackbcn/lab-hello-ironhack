import React, { Component } from 'react';
import '../css/navbar.css';
import ironLogo from '../img/ironhack-logo.svg';
import menuBurguer from '../img/menu-top.svg';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img src={ironLogo} alt="IronHack" />
        <img src={menuBurguer} alt="Menu" />
      </nav>
    );
  }
}

export default Navbar;
