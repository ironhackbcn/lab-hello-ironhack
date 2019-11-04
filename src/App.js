import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Header from './component/Header';
import Main from './component/Main';


class App extends Component {
  render() {
    return (
      < >
      <Navbar />
      <Header ></Header>
      <div className='div-image'>
      <Main></Main>
      </div> 
      </>
    )
  }
}



export default App;
