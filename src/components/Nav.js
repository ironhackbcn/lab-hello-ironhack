import React, { Component } from 'react';

const navStyle = {
  background: '#131b42',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 50px 0'
}


class Nav extends Component {
  render() {
    return (<div style={navStyle}>
      <img src={this.props.logoImage} alt='logo' />
      <img src={this.props.menuImage} alt='menu' />
    </div>);
  }
}

export default Nav;