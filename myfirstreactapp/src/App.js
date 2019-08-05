import React from 'react';
import logo from './images/ironhack-logo.svg';
import menu from './images/menu-top.svg';
import declarative from './images/icon1.png';
import components from './images/icon2.png';
import singleway from './images/icon3.png';
import jsx from './images/icon4.png';
import logoreact from './images/react-logo.svg';


import './App.css';

function App() {
  return (
   <>
   <header className="main-header">
<header>
  <img src={logo} alt=""/>
  <img src={menu} alt=""/>
</header>

<div className="background"> 
<img src={logoreact} alt=""/>
<img src={logoreact} alt=""/>
<img src={logoreact} alt=""/>
<img src={logoreact} alt=""/>
<img src={logoreact} alt=""/>
<img src={logoreact} alt=""/></div>


<section>

<h1>Say hello to ReactJS</h1>
<h3>You will learn a Frontend framework from scratch, to become a Ninka Developer.</h3>
<a href="#0">Awesome!</a>
</section>

   </header>

   <main>
     <section>
       <article>
         <img src={declarative} alt=""/>
         <h5>Declarative</h5>
         <p>React makes it painless to create interactive UIs.</p>
       </article>
       <article>
       <img src={components} alt=""/>
         <h5>Components</h5>
         <p>Build encapsulated components that manage their state.</p>
       </article>
       <article>
       <img src={singleway} alt=""/>
         <h5>Single-Way</h5>
         <p>A set of inmutable values are passed to the component's.</p>
       </article>
       <article>
       <img src={jsx} alt=""/>
         <h5>JSX</h5>
         <p>Statically-typed, designed to run on modern browsers.</p>
       </article>
     </section>
   </main>
   </>
  );
}

export default App;
