import React from 'react';
import Title from './Title';
import Button from './Button';
import Navbar from './Navbar';
import Card from './Card';
import Icon1 from './images/icon1.png';
import Icon2 from './images/icon2.png';
import Icon3 from './images/icon3.png';
import Icon4 from './images/icon4.png';
import './App.css';

function App() {
  return (
    <div class="container">
      <div className="Jumbotron">
        <Navbar />
        <Title />
        <Button />
      </div>
      <div class="card-container">
        <Card image={Icon1} sentence="Declarative" description="React makes it painless to create interactive UIs" />
        <Card image={Icon2} sentence="Components" description="Build encapsulated components that manage their state" />
        <Card image={Icon3} sentence="Single-Way" description="React makes it painless to create interactive UIs" />
        <Card image={Icon4} sentence="JSX" description="React makes it painless to create interactive UIs" />
      </div>
    </div>
  );
}

export default App;