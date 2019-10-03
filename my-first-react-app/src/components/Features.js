import React from 'react';
import './Features.css';

function Features() {
  return (
    <div class="features-container">
      <div class="feature">
        <div class="icon">
          <img src="../images/icon1.png" alt="" />
        </div>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div class="feature">
        <div class="icon">
          <img src="../images/icon2.png" alt="" />
        </div>
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div class="feature">
        <div class="icon">
          <img src="../images/icon3.png" alt="" />
        </div>
        <h3>Single-way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div class="feature">
        <div class="icon">
          <img src="../images/icon4.png" alt="" />
        </div>
        <h3>JSX</h3>
        <p>Statically typed, designed to run on mode browsers.</p>
      </div>
    </div>
  );
}

export default Features;
