import React from 'react';
import './Navbar.css';
import logoSvg from './images/ironhack-logo.svg';
import menuSvg from './images/menu-top.svg';

function Navbar() {
  return (
    <div className="nav">
      <img class="nav-left" src={logoSvg} alt="Ironhack logo" />
      <img class="nav-right" src={menuSvg} alt="Menu icon" />
    </div>
  );
}

export default Navbar;