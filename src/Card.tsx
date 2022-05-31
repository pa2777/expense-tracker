import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface Card {
  text: string;
  value: number;
  handleDelete: (text: string) => void;
}

const Card = ({ text, value, handleDelete }: Card) => {
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <div style={{ marginTop: "5px" }}>{value}</div>
        <div
          style={{ marginLeft: "20px" }}
          onClick={(event) => {
            event.preventDefault();
            handleDelete(text);
          }}
        >
          <DeleteForeverIcon />
        </div>
      </div>
    </div>
  );
};

export default Card;
