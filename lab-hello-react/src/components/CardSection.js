import React, { Component } from 'react';
import Card from './Card';


const cardSection={
  display: 'flex',
  justifyContent: 'space-around',
  padding:'100px'
}


const dataCards = [
  {
    imgUrl: process.env.PUBLIC_URL + '/images/icon1.png',
    title: 'Declarative',
    text: 'React makes it painless to create interactive UIs'
  },
  {
    imgUrl:process.env.PUBLIC_URL + '/images/icon2.png',
    title: 'Components',
    text: 'Builds encapsulated components that manage their state'
  },
  {
    imgUrl:process.env.PUBLIC_URL + '/images/icon3.png',
    title: 'Single-way',
    text: `A set of inmutable values are passed to the component's`
  },
  {
    imgUrl:process.env.PUBLIC_URL + '/images/icon4.png',
    title: 'JSX',
    text: 'Statically-typed designed to run on modern browsers'
  },
]


class CardSection extends React.Component {
  renderList(){
    return dataCards.map((item, index)=>{
      return <Card
      imgUrl={item.imgUrl} 
      title={item.title}
      text={item.text}
      key={'id-'+index}
      />
    })
  }
  render() {
    return <div style={cardSection}>
      {this.renderList()}
    </div>;
  }
}

export default CardSection;