import React from 'react'

 const Card =(props) => {
    return (
        <div className="card">
            <img src ={props.URL} alt="icon"></img>
            <h2>{props.title}</h2>
            <p>{props.paraf}</p>
        
        </div>
    )
}


export default Card