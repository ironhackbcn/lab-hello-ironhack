import React from 'react'
import Article from "./Article"

export default function FirstSection() {
    return (
        <div className="Article-wrapper">
            <Article image="./Images/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs." />
            <Article image="./Images/icon2.png" title="Components" text="Build encapsulated components that manage theri state." />
            <Article image="./Images/icon3.png" title="Single-Way" text="A set of immutable values are passed to the component's" />
            <Article image="./Images/icon4.png" title="JSX" text="Statically-typed. designed to run on modern browsers" />
        </div>
    )
}
