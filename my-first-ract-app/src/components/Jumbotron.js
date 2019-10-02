import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import '../css/jumbotron.css';

const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
      <Navbar />
      <div class="text-wrapper">
        <div class="title">{props.title}</div>
        <div class="subtitle">{props.subtitle}</div>
      </div>
      <Button text="Awesome!" width="100"/>

    </div>
  );
};
export default Jumbotron;
