import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div> 
   <header>
     <nav>
      <img src="/images/ironhack-logo.svg" alt=""/>
      <img src="/images/menu-top.svg" alt=""/>
     </nav>
   </header>
   <section class="first">

     <div class="title">
      <h1>Say hello to ReactJS</h1>
      <div class="description">
        <p>You will learn a Frontend framework from scratch, to becacome an Ninka Developer.</p>
      </div>
     </div>
    <button>Awesome!</button>
   </section>
   <section class="description-2">
     <article>
       <img src="/images/icon1.png"></img>
       <h2>Declarative</h2>
       <p>React makes it painless to create interactive UIs.</p>
     </article>
     <article>
       <img src="/images/icon2.png"></img>
       <h2>Components</h2>
       <p>Build encapsulated components that manage their state.</p>
     </article>
     <article>
       <img src="/images/icon3.png"></img>
       <h2>Single-Way</h2>
       <p>A set of immutable values are passed to the component´s.</p>
     </article>
     <article>
       <img src="/images/icon4.png"></img>
       <h2>JSX</h2>
       <p>Staticaly-typed, designed to run on modern browsers.</p>
     </article>
   </section>
   </div>
  );
}

export default App;
