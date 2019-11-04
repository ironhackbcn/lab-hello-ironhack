import React from 'react'
import Card from './Card'

export default function Section() {
    return (
        <section className='Section-card-containers'>
            <Card img='./images/icon1.png' title='Declarative' text='React makes it painless to create interactive UIs'/>
            <Card img='./images/icon2.png' title='Components' text='Build encapsulated components that manage their state.'/>
            <Card img='./images/icon3.png' title='Single-Way' text="A set of immutable values are passed to the component's"/>
            <Card img='./images/icon4.png' title='JSX' text='Statically-typed, designed to run on modern browers.'/>
        </section>
    )
}
