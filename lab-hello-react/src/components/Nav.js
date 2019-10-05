import React, { Component } from 'react';

const navStyle = {
  backgroundColor: '#323c60',
  margin: 0,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '30px'
}

class Nav extends React.Component {
  render() {
    return <div style={navStyle}>
      <img src={process.env.PUBLIC_URL + '/images/ironhack-logo.svg'} alt="logo"></img>
      <img src={process.env.PUBLIC_URL + '/images/menu-top.svg'} alt="menu"></img>
    </div>;
  }
}


export default Nav;