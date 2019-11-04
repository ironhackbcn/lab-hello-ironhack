import React from 'react'
import Card from './Card'

const Cardlist=()=> {
    const icon1='/images/icon1.png';
    const icon2='/images/icon2.png';
    const icon3='/images/icon3.png';
    const icon4='/images/icon4.png';
    return (
        <div className="allcards">
            <Card URL={icon1} title="Declarative" paraf="React makes it painless to create interactive UIs"/>
            <Card URL={icon2} title="Components" paraf="Buid encapsulated components that manage their state"/>
            <Card URL={icon3} title="Single-Way" paraf="A set of immutable to the components"/>
            <Card URL={icon4} title="JSx" paraf="Statically-typed, designed to run on modern browsers"/>
        </div>
    )
}


export default Cardlist