import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';

const data = [
  {
    image: 'images/icon1.png',
    title: 'Declarative',
    description: 'React makes it painless to create interactive UIs.',
  },
  {
    image: './images/icon2.png',
    title: 'Components',
    description: 'Build encapsulated components that manage their state.',
  },
  {
    image: './images/icon3.png',
    title: 'Single-Way',
    description: "A set of immutable values are passed to the component's.",
  },
  {
    image: '../images/icon4.png',
    title: 'JSX',
    description: 'Statically-typed, designed to run on modern browsers.',
  },
];

function App() {
  return (
    <>
      <Jumbotron />
      <div className="Section2">
        {data.map((item, index) => {
          return (
            <Card
              key={`Card-id-${index}`}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
      {/* 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </>
  );
}

export default App;
