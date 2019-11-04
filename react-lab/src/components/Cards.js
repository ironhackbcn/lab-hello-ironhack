import React from 'react'
import Card from './Card';
const icon1 = 'images/icon1.png'
const icon2 = 'images/icon2.png'
const icon3 = 'images/icon3.png'
const icon4 = 'images/icon4.png'


function Cards() {
    return (
        <div style={styleTitle}>
            <Card url={icon1} title='Declarative' description="React makes it painless to create interactive UIs."></Card>
            <Card url={icon2} title='Components' description="Build encapsuled component that manage their state."></Card>
            <Card url={icon3} title='Single-Way' description="A set of immuable values are passed to the component's."></Card>
            <Card url={icon4} title='JSX' description="Statically-typed designed to run on modern broswers"></Card>
        </div>
    )
}

const styleTitle = {
    display: "flex",
    justifyContent: "center",
    color: "black",
    paddingTop: "110px",
    marginLeft: "6vw",
    alignItems: "center"
}

export default Cards;

