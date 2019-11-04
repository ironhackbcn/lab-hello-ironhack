import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Navbar />   
      <Header />   
      <Cards></Cards>

    </div>
  );
}

export default App;
