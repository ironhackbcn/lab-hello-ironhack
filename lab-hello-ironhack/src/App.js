import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BodySection from "./components/bodySection";
import FooterSection from "./components/FooterSection";

function App() {
  return(
    <div className="wrapper">
      <BodySection />
      <FooterSection />
    </div>
  );
}

// class Welcome extends Component{
//   render() {
//     return(
//       <div className="wrapper">
//         <BodySection />
//         <FooterSection />
//       </div>
//     );
//   }
// }

export default App;
