import React from 'react';


const Card = (props) =>  {
    return (
        <div style={cardContainer}>
         <img style={cardImage} src={props.url} alt="icon1"/>
         <h4 style={cardTitle}>{props.title}</h4>
         <p style={cardPara}>{props.description}</p>
        </div>
    )
}

export default Card;

const cardContainer = {
    maxWidth: "50%" 
}

const cardImage = {
    maxWidth: "50%"
}

const cardTitle = {
    fontSize: "20px",
    marginTop: "10px",
    letterSpacing: "0.1vw",
}

const cardPara = {
    color: "grey",
    fontSize: "15px", 
    maxWidth: "fit-content",
    paddingTop: "3px",
    maxWidth: "75%",
}