import React, { Component } from 'react';

const anchorAwesome = {
  color: '#131b42',
  background: 'white',
  textAlign: 'center',
  textDecoration: 'none',
  width: '30%',
  padding: '14px 7px',
  display: 'inline-block',
  marginTop: '40px'
}


export class Anchor extends Component {
  render() {
    return (
      <a style={anchorAwesome} href={this.props.url}>{this.props.text}</a>
    );
  }
}