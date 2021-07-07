import React from "react"

const Card = (props) => {
    console.log(props)
    return (
        <article className="card">
            <img src={process.env.PUBLIC_URL + "images/" + props.src} alt={props.header}/>
            <h2>{props.header}</h2>
            <p>{props.text}</p>
        </article>
    )
}
export default Card;
