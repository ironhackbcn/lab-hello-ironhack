import React from "react";

export default function Header() {
  return (
    <header>
      <div className='Header-info-container'>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend <br/>framwork from scatch,to <br/>become a Ninja Developer</p>
        <button disabled>Awesome!</button>
      </div>
      <div className='Header-bg-img-container'>
          <div className='Header-bg-one'>
            <img src="./images/react-logo.svg" className='first-img'  alt=""/>
            <img src="./images/react-logo.svg" className='second-img' alt=""/>
            <img src="./images/react-logo.svg" className='third-img' alt=""/>
          </div>  
      </div>
    </header>
  );
}
