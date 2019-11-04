import React from 'react'

export default function Article(props) {
    return (
        <div style={cardStyle}>
            <img src={props.image} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

const cardStyle = {
    width: "22vw",
    minWidth: "200px"
}
