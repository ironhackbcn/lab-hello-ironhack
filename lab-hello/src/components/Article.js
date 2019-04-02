import React, { Component } from 'react';

class Article extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.image} alt={this.props.alt}/>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default Article;