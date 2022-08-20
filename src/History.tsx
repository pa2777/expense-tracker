import React from "react";
import PropTypes from "prop-types";
import {expense, recordsProps} from "./types";
import Card from "./Card";

const History = ({records, handleDelete}: recordsProps) => {
  return (
    <div style={{marginTop: "40px"}}>
      <h3>History</h3>
      <hr />
      <div style={{overflow: "auto", maxHeight: "300px"}}>
        {records.map(({text, value}) => (
          <Card
            text={text}
            value={value}
            key={text}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
