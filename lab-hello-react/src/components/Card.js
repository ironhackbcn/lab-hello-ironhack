import React, { Component } from 'react';


const cardStyle={
  display: 'grid',
  padding: '50px',
  fontSize: '1.5em'
}

const imgStyle={
  justifySelf: 'center',
}

const titleStyle={
  margin: '10px',
  fontSize: '1.2em',
  color: '#323c60'
}


class Card extends React.Component {
  render() {
    return <div style={cardStyle}>
      <img style={imgStyle} src={this.props.imgUrl}></img>
      <h3 style={titleStyle}>{this.props.title}</h3>
      <p>{this.props.text}</p>
    </div>;
  }
}


export default Card;