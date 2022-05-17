import React from "react";

interface Card {
  text: string;
  value: number;
}

const Card = ({ text, value }: Card) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "rgba(0,0,0,0.16) 0px 1px 4px",
        padding: 15,
        margin: "15px 0px",
        borderRight: "5px solid",
        borderRightColor: value > 0 ? "green" : "red",
      }}
    >
      <div>{text}</div>
      <div>{value}</div>
    </div>
  );
};

export default Card;
