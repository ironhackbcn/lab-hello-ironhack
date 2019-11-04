import React from 'react';
import FootBlock from './FootBlock';
import './Footer.css';

const icon1 = 'images/icon1.png';
const icon2 = 'images/icon2.png';
const icon3 = 'images/icon3.png';
const icon4 = 'images/icon4.png';

function Footer() {
  return (
    <footer className="Footer">
      <FootBlock URL={icon1} title="Declarative" text="React makes it painless to create interactive UIs."/>
      <FootBlock URL={icon2} title="Components" text="Build encapsulated components that manage their state."/>
      <FootBlock URL={icon3} title="Single-Way" text="A set of immutable values are passed to the components."/>
      <FootBlock URL={icon4} title="JSX" text="Statically-typed, designed to run on modern browsers."/>
    </footer>
  )
}

export default Footer;