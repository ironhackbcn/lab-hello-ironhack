import React, { Component } from 'react'
// import './card.css';

class Main extends Component {
  render () {
    return (
      <div >
        <img src={this.props.image}/>
        <h2>{this.props.title}</h2>
        <h3>{this.props.subTitle}</h3>
        {this.props.children}
      </div>

    )
  }
}

export default Main
