import React from "react";
import "./SplitOne.css";

function SplitOne(props) {
  return (
    <div className="SplitOne">
      <nav>
        <img src="images/ironhack-logo.svg" />
        <img src="images/menu-top.svg" />
      </nav>
      <section className="flex">
        <div>
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn a Frontend framework from scratch, to become a Ninja
            Developer.
          </p>
          <button>Awesome!</button>
        </div>
        <div>
          <img src="images/react-logo.svg" />
        </div>
      </section>
    </div>
  );
}

export default SplitOne;
