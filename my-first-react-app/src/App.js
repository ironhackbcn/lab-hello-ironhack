import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Navbar />
        <Jumbotron />
      </div>
      <Features />
    </div>
  );
}

export default App;
