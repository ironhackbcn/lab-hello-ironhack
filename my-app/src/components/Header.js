import React, { Component } from 'react'
// import './card.css';

class Header extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-info">
            <img src="/images/ironhack-logo.svg" className="App-logo" alt="logo" />
            <h1>
              Say hello to ReactJS
            </h1>
            <p>You will learn a Frontend framework from scratch, to becaome an Ninka Developer.</p>
            <div>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Awesome!
              </a>
            </div>
          </div>
          <div className="App-header-nav-logo">
            <img src="/images/menu-top.svg" className="menu-logo" alt="logo" />
          </div>
        </header>
      </div>
    )
  }
}

export default Header
