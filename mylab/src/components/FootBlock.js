import React from 'react'

function FootBlock(props) {
    return (
        <div className='FootBlock-container'>
            <img src={`./images/` + props.icon} alt="" />
            <h2> {props.title} </h2>
            <p> {props.paraf} </p>
        </div>
    );
}
export default FootBlock;