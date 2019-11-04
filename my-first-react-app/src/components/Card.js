import React from 'react'

export default function Card(props) {
    return (
        <div className='Card-container'>
            <img src={props.img} alt=""/>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}
