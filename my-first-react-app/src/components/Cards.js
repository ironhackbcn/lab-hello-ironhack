import React from "react";
import Card from "./Card";

const Cards = () => {
  const url = process.env.PUBLIC_URL;
  const data = [
    {
      name: `${url}images/icon1.png`,
      titleImg: "Wrench",
      titleCard: "Declarative",
      comment: "React makes it painless to create interactive UIs."
    },
    {
      name: `${url}images/icon2.png`,
      titleImg: "Drawing of a fountain pen",
      titleCard: "Components",
      comment: "React makes it painless to create interactive UIs."
    },
    {
      name: `${url}images/icon3.png`,
      titleImg: "Large cogwheel",
      titleCard: "Single-Ways",
      comment: "A set of inmutable values are passed to the component's,"
    },
    {
      name: `${url}images/icon4.png`,
      titleImg: "Drawing of a scheme",
      titleCard: "JSX",
      comment: "Statically-typed designed to run on modern browsers."
    }
  ];
  return (
    <div className="App-Cards">
      {data.map(info => {
        return (
          <Card
            name={info.name}
            titleImg={info.titleImg}
            titleCard={info.titleCard}
            comment={info.comment}
          />
        );
      })}
    </div>
  );
};

export default Cards;
