import React, { Component } from 'react';

const divStyle = {
  backgroundColor: '#323c60',
  color: 'white',
  fontSize: '4em',
  margin: 0
}

const titleStyle={
  margin: '20px 0'
}

const subtitleStyle ={
  fontSize: '30px',
  fontFamily: 'Arial, sans-serif',
  fontWeight: 200,
  width: '75%'
}

const buttonStyle ={
  backgroundColor: 'white',
  color: '#323c60',
  padding: '30px 50px',
  fontSize: '30px',
  border: 'none',
  borderRadius: '5px',
  marginTop: '50px'
}

const sectionTitle={
  width: '30%',
  padding: '150px'
}

const backgroundLogo1={
  position: 'absolute',
  right: '50px',
  bottom: '100px',
  width: '15rem'
}

const backgroundLogo2={
  position: 'absolute',
  right: '75px',
  bottom: '350px',
  width: '15rem',
}

const backgroundLogo3={
  position: 'absolute',
  right: '100px',
  bottom: '600px',
  width: '15rem'
}


const backgroundLogo4={
  position: 'absolute',
  right: '600px',
  top: '550px',
  width: '400px'
}

const backgroundLogo5={
  position: 'absolute',
  right: '500px',
  top: '50px',
  width: '500px'
}

class Title extends React.Component {
  render() {
    return <div style={divStyle}>
      <section style={sectionTitle}>
        <h1 style={titleStyle}>{this.props.title}</h1>
        <h2 style={subtitleStyle}>{this.props.subtitle}</h2>
        <button style={buttonStyle}>{this.props.button}</button>
        <img style={backgroundLogo1} src={process.env.PUBLIC_URL + '/images/react-logo.svg'} alt="logo-react"></img>
        <img style={backgroundLogo2} src={process.env.PUBLIC_URL + '/images/react-logo.svg'} alt="logo-react"></img>
        <img style={backgroundLogo3} src={process.env.PUBLIC_URL + '/images/react-logo.svg'} alt="logo-react"></img>
        <img style={backgroundLogo4} src={process.env.PUBLIC_URL + '/images/react-logo.svg'} alt="logo-react"></img>
        <img style={backgroundLogo5} src={process.env.PUBLIC_URL + '/images/react-logo.svg'} alt="logo-react"></img>
      </section>

    </div>;
  }
}


export default Title;