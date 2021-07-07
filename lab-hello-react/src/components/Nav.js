import React, { Component } from "react"
// import logo from "../images/ironhack-logo.svg";
// import burger from "../images/menu-top.svg"

class Nav extends Component {
    render() {
        return (
            <nav className="container">
                <ul>
                    <li><img src={process.env.PUBLIC_URL + "images/ironhack-logo.svg"} alt="img"/></li>
                    <li>
                        <span><img src={process.env.PUBLIC_URL + "images/menu-top.svg"} alt="burger"/></span>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;