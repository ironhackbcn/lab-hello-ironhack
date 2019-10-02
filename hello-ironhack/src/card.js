import React from 'react';
import './card.css';

const Card = () => {
  return (
    <div className="card-section">
      <div className="card">
        <div className="card-image">
          <div>
            <img src="images/icon1.png" alt="" />
          </div>
        </div>
        <div className="card-info">
          <h2>Declarative</h2>
          <p>
            React makes it ,<br />
            painless to create
            <br />
            interactive Uls.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <div>
            <img src="images/icon2.png" alt="" />
          </div>
        </div>
        <div className="card-info">
          <h2>Components</h2>
          <p>
            Build encapsulated
            <br />
            components that
            <br />
            manage their state.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <div>
            <img src="images/icon3.png" alt="" />
          </div>
        </div>
        <div className="card-info">
          <h2>Single-Way</h2>
          <p>
            A set of inmutable
            <br />
            values are passed to <br />
            the component's.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <div>
            <img src="images/icon4.png" alt="" />
          </div>
        </div>
        <div className="card-info">
          <h2>JSX</h2>
          <p>
            Statically-typed,
            <br />
            designed to run on <br />
            modern browsers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
