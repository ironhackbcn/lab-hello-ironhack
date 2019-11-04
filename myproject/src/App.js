import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Cardlist from './components/Cardlist';


class App extends Component{
  render (){
    
    return(
      <div className="todo">
         <div className="bkg">
        <Navbar />
        <Header />
         </div>
         <Cardlist />
      </div>
    )
  }
}

export default App;
