import React from 'react';

function Navbar() {
    return (
        <nav className='Nav-container'>
            <img className='Nav-logo' src="./images/ironhack-logo.svg" alt="logo" />
            <img className='Nav-burger' src='./images/menu-top.svg' alt='burger' />
        </nav>
    );
}

export default Navbar;