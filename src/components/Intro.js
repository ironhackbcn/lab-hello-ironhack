import React, { Component } from 'react';

import { Anchor } from './Anchor'

const introStyle = {
  background: '#131b42',
  padding: '100px 0 70px 50px',
}

const introContentStyle = {
  color: 'white',
  width: '30%',
  alignItems: 'center'
}

const title = {
  fontSize: '64px'
}

const text = {
  fontSize: '24px'
}

class Intro extends Component {
  render() {
    return (
      <div style={introStyle}>
        <div style={introContentStyle}>
          <h1 style={title}>Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
          <Anchor text='Awesome' url='www.google.com' />
        </div>
      </div>
    );
  }
}

export default Intro;