import React from 'react';
const logo = "images/react-logo.svg"

const Header = () =>  {
        return (
            <section style={headerContainer}>
            <div style={content}>

                <h1 style={headerTitle}>Say hello to ReactJS</h1>
                <p style={headerPara}>You will learn a Frontend framework from scratch, to become an Ninka developer.</p>
                <button style={headerButton}>Awesome!</button>
            </div>
     
                <img src={logo} alt=""/>
  
            </section>
        )
    }


export default Header;

const headerContainer = {   
    display: "flex",
    backgroundColor: "rgb(35, 36, 57)",
    color: "white",
    height: "max-content",  
}

const content = {    
    width: "40%",
    marginLeft: "5vW",
    textAlign: "left"
}

const headerTitle = {
    fontSize: "60px"
}

const headerButton = {
    padding: "20px 30px",
    borderRadius: "9px",
    marginTop: "50px",
    marginBottom: "50px",
    fontSize: "initial",
    fontWeight: "600"
}

const headerPara ={
  fontSize: "20px",
  fontWeight:"lighter",
  maxWidth: "67%"
}
