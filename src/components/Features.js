import React, { Component } from 'react';

const data = [
  {
    image: '/images/icon1.png',
    title: 'Declarative',
    text: 'React makes it painless to create interactive UIs.'
  },
  {
    image: '/images/icon2.png',
    title: 'Components',
    text: 'Build encapsulated components that manage their state.'
  },
  {
    image: '/images/icon3.png',
    title: 'Single-Way',
    text: 'A set of immutable values are passed to the component\'s.'
  },
  {
    image: '/images/icon4.png',
    title: 'JSX',
    text: 'Statically-typed designed to run on modern browsers.'
  }
];

const featuresDiv = {
  display: 'flex',
  flexDirection: 'Row',
  paddingTop: '80px',
  justifyContent: 'center',
  alignItems: 'center'
}

const container = {
  display: 'flex',
  flexDirection: 'Column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
}

class Features extends Component {
  render() {
    return (
      <div style={featuresDiv}>
        {data.map(e => {
          return <div style={container}>
            <img src={e.image} alt={e.title} />
            <h4>{e.title}</h4>
            <p>{e.text}</p>
          </div>
        })}
      </div>
    );
  }
}

export default Features;