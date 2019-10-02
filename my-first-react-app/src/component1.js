import React from 'react';
import Button from './button';
import "./FirstComponent.css";

function FirstComponent() {
  return (
    <div className="FirstComponent">
        <nav>
            <img src="../images/ironhack-logo.svg" />
            <img src="../images/menu-top.svg" />
        </nav>
        <section className = "menu">
            <div>
                <h1>Say hello to ReactJS</h1>
                <p>You will learn a Frontend framework from scrach, to become a Nika Developer.</p>
                <Button/>
            </div>
        </section>
    </div>
  );
}

export default FirstComponent;
