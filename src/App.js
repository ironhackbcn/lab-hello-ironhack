import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Article from './Components/Article';

const Heading = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}
const SubHeading = (props) => {
  return <div>
    {props.children}
  </div>
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <section>
          <Heading title ='Say Hello to ReactJS' />
          <SubHeading><p>You will learn a FrontEnd framework from scratch, to become a Ninka Developer</p></SubHeading>
          <button><h2>Awesome!</h2></button>
        </section>
        <section>
          <Article image='/images/icon1.png' title='Declarative'/>
          <Article image='/images/icon2.png' title='Components'/>
          <Article image='/images/icon3.png' title='Single-Way'/>
          <Article image='/images/icon4.png' title='JSX'/>
        </section>
      </div>
    );
  }
}

export default App;
