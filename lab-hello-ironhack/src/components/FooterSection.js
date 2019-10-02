import React from "react";
import "../css/footer.css";

function FooterSection(){
    return(
        <div className="footer-section">
            <div className="card">
                <article className="">
                    <img src="../../images/icon1.png"></img>
                    <h2>Declarative</h2>
                    <p>React makes it painless to create interactive UIs</p>
                </article>
                <article className="">
                    <img src="../../images/icon2.png"></img>
                    <h2>Components</h2>
                    <p>Build encapsulated components that manage their state</p>
                </article>
                <article className="">
                    <img src="../../images/icon3.png"></img>
                    <h2>Single-Way</h2>
                    <p>A set of immutable values are passed to the component's</p>
                </article>
                <article className="">
                    <img src="../../images/icon4.png"></img>
                    <h2>JSX</h2>
                    <p>Statically-typed, designed to run on modern browser</p>
                </article>
            </div>

        </div>
    );
}

export default FooterSection;
