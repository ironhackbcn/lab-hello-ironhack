import React, { Component } from 'react';
import logoIron from '../images/ironhack-logo.svg';
import IconMenu from '../images/menu-top.svg';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-image-wrapper">
          <img src={logoIron} alt="logo" />
          {/* <img src="../../public/images/ironhack-logo.svg" alt="IronHack" /> */}
        </div>
        <div className="Navbar-image-wrapper">
          {/* <img
            src="/my-first-react-app/public/images/menu-top.svg"
            alt="Menu"
          /> */}
          <img src={IconMenu} alt="logo" />
        </div>
      </div>
    );
  }
}

export default Navbar;
