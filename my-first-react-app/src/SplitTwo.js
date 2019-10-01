import React from "react";
import "./SplitTwo.css";

function SplitTwo(props) {
  return (
    <div className="SplitTwo" className="flex">
      <info className="flex">
        <card>
          <img src="images/icon1.png" />
          <h3>Declarative</h3>
          <span>React makes it painless to create interactive UIs.</span>
        </card>
        <card>
          <img src="images/icon2.png" />
          <h3>Components</h3>
          <span>Build encapsulated components that manage their state.</span>
        </card>
        <card>
          <img src="images/icon3.png" />
          <h3>Single-Way</h3>
          <span>A set of immutable values are passed to the components.</span>
        </card>
        <card>
          <img src="images/icon4.png" />
          <h3>JSX</h3>
          <span>Statically-typed, designed to run on modern browsers.</span>
        </card>
      </info>
    </div>
  );
}

export default SplitTwo;
