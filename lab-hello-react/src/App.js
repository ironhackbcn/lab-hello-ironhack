import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Nav from './components/Nav';
import Card from './components/Card';
import CardSection from './components/CardSection';


class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Title
          title="Say Hello to ReactJS"
          subtitle="You will learn a frontend framework from scratch, to become a Ninja Developer"
          button="Awesome!"
        />
        <CardSection/>
      </div>

    );
  }
}

export default App;
