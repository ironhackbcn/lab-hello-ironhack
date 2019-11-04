import React from 'react';

const Navbar = () => {
    return (
        <nav style={navContainer}>
            <img className="App-logo" src="./images/ironhack-logo.svg" alt=""/>
            <img className="App-menu" src="./images/menu-top.svg" alt=""/>
        </nav>
    )
}

export default Navbar;

const navContainer = {
    display : "flex",
    justifyContent: "space-between",
    backgroundColor: "rgb(35, 36, 57)",
    padding: "20px"
}