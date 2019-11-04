import React from 'react'

export default function Header() {
    return (
        <div className="Header">
            <div className="Header-text">
                <h1>Say hello to ReactJS</h1>
                <p> You will learn a Frontend framework from scratch, to becaome a Ninka Developer</p>
                <a href="#">Awesome!</a>
            </div>
            <div>
                <img className="Header-image image1" src="./Images/descarga.svg" />
                <img className="Header-image image2" src="./Images/descarga.svg" />
                <img className="Header-image image3" src="./Images/descarga.svg" />
            </div>
        </div>
    )
}
