import React, { Component } from "react";
import "./css/jumbotron.css";
import Navbar from "../components/Navbar";

const Jumbotron = props => {
  return (
    <div className="jumbotron">
      <Navbar />
      <div className="mainContent">
        <div className="mainText">{props.title1}</div>
        <div className="secondaryText">{props.title2}</div>
      </div>
      {/* <Button text="Awesome!" /> */}
    </div>
  );
};

export default Jumbotron;

