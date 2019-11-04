import React from 'react'

export default function Header() {
    return (
        <div style={headerStyle}>
            <div style={contHeader}>
            <h1 style={h1}>Say hello to
            ReactJS</h1>
            <p style={pHeader}>You will learn a Frontend framework from scratch, to became an Ninka Developer.</p>
            <button style={button}>Awesome!</button>
            </div>
        </div>
    )
}

const headerStyle = {
    backgroundColor: '#282c34',
    width: '100%',
    margin: '0px 0px',
    color: 'white',
    height: 'auto',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column'
}
 
const contHeader = {
    width: '40%',
    margin: '100px 0px',
    marginLeft: '50px'
    
}

const h1 = {
    marginTop: '0px',
    fontSize: '70px',
    marginBottom: '0'

}
const pHeader = {
    fontSize: '20px',
    marginTop: '7px'
}

const button = {
    padding: '15px 30px',
    marginTop: '80px',
    borderRadius: '5px'
}