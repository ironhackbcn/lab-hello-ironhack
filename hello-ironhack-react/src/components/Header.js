import React, { Component } from 'react';
import logo from '../images/ironhack-logo.svg';
import menu from '../images/menu-top.svg';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="navbar">
          <div className="nav-left">
            <img src={logo} className="Ironhack-logo" alt="logo"/>
          </div>
          <div className="nav-right">
            <img src={menu} className="Menu" alt="menu"/>
          </div>
        </div>
        <div className="banner">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to became a Ninka Developer.</p>
          <button>Awesome!</button>
        </div>                
      </div>
    );
  }
}

export default Header;