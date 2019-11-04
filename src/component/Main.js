import React from 'react'

export default function Main() {
    return (
        <div className='section-img'>
            <div>
            <img style={image} src="./images/icon1.png" alt="icon1" />
            <h3>Declarative</h3>
            <p>React makes it plainess to create interactive UIs</p>
            </div>
            <div>
            <img style={image} src="./images/icon2.png" alt="icon1" />
            <h3>Components</h3>
            <p>Build encapsulate components that manager they state</p>
            </div>
            <div>
            <img style={image} src="./images/icon3.png" alt="icon1" />
            <h3>Single-Way</h3>
            <p>A set of inmutable values are passed to the component's</p>
            </div>
            <div>
            <img style={image} src="./images/icon4.png" alt="icon1" />
            <h3>JSX</h3>
            <p>Statically-typed desing to run on modern browsers</p>
            </div>
        </div>
    )
}



const image = {
    width: '150px',
    heigth: '150px'
}
