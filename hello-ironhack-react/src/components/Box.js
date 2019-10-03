import React from 'react';
import '../css/Box.css';


const Box = (props) => {
    return (    
            <div className="Box">
            <img src={props.img} className="box-img"/>
            <h2>{props.subtitle}</h2>
            <p>{props.text}</p>    
        </div>
    );
};



export default Box;