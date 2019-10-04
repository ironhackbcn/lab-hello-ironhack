import React from "react";
import "./css/jumbotron.css";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Jumbotron = (props) => {
  return (
   <div className="jumbotron">
    <Navbar />
    <div className="mainContent">
        <div className="mainText">{props.title1}</div>
        <div className="secondaryText">{props.title2}</div>
      </div>
      <div className="buttonWrap">
       <Button text="Awesome!" />
      </div>

    </div>
  );
};

export default Jumbotron;

