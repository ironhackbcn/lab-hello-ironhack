import React from 'react';
import './App.css';

function App() {
    return(
        <>
        <section className='landing'>
            <nav>
                <ul>
                    <li>
                        <img src='/images/ironhack-logo.svg' alt='logo ironhack'/>
                    </li>
                    <li>
                        <img src='/images/menu-top.svg' alt='menu icon'/>
                    </li>
                </ul>
            </nav>
            <section className='section-1'>
                <h1>
                    Say hello to ReactJS
                </h1>
                <p>You will learn a Frontend framework from scratch to becaome an Ninka Developer.</p>
                <button>
                    Awesome!
                </button>
            </section>
        </section>
            <section className='section-2'>
                <article> 
                    <img src='/images/icon1.png' alt='Declarative'/>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </article>
                <article> 
                    <img src='/images/icon2.png' alt='Components'/>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </article>
                <article> 
                    <img src='/images/icon3.png' alt='Single-Way'/>
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the component's</p>
                </article>
                <article> 
                    <img src='/images/icon4.png' alt='JSX'/>
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </article>
            </section>
        </>
    );
}

export default App;
