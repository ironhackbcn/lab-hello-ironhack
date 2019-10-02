import React from "react";
import Card from "./Card";

const Cards = () => {
  const url = process.env.PUBLIC_URL;
  const data = [
    {
      name: `${url}images/icon1.png`,
      titleImg: "",
      titleCard: "Declarative",
      comment: "React makes it painless to create interactive UIs."
    },
    {
      name: `${url}images/icon2.png`,
      titleImg: "",
      titleCard: "Components",
      comment: "React makes it painless to create interactive UIs."
    },
    {
      name: `${url}images/icon3.png`,
      titleImg: "",
      titleCard: "Single-Ways",
      comment: "A set of inmutable values are passed to the component's,"
    },
    {
      name: `${url}images/icon4.png`,
      titleImg: "",
      titleCard: "JSX",
      comment: "Statically-typed designed to run on modern browsers."
    }
  ];
  return (
    <div className="App-Cards">
      data.forEach((info) =>
      {
        <Card
          name={info.name}
          titleImg={info.titleImg}
          titleCard={info.titleCard}
          comment={info.comment}
        />
      });
    </div>
  );
};

export default Cards;
