import React, { Component } from 'react';
import './jumbotron.css'

class Jumbotron extends Component {
  render() {
    const {
      iconOne,
      iconTwo,
      title,
      paragraph,
      buttonText
    } = this.props;
    return(
      <section className="jumbotron">
        <div className="container">
          <nav className="jumbotron-nav">
            <img src={process.env.PUBLIC_URL + `/images/${iconOne}.svg`} alt="iron-hack logo"/>
            <img src={process.env.PUBLIC_URL + `/images/${iconTwo}.svg`} alt="menu-top"/>
          </nav>
          <h1>{title}</h1>
          <p>{paragraph}</p>
          <button>{buttonText}</button>
        </div>
      </section>
    )
  }
}

export default Jumbotron;