import React from "react";
import "./css/card.css";

const Card1 = (props) => {
    return (
    <div className="card">
       <img src={props.pic} alt ="cardImage"/>
       <div className="textWrap">
        <h3>{props.text1}</h3>
        <p>{props.text2}</p>
       </div>

      </div>
    );
  };
  
  export default Card1;
