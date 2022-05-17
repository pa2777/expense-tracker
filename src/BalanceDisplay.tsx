import React from "react";
import PropTypes from "prop-types";

type BalanceDisplayProps = { value: number };

const BalanceDisplay = ({ value }: BalanceDisplayProps) => {
  return (
    <div>
      <h4 style={{ marginBottom: "0px" }}>YOUR BALANCE</h4>{" "}
      <h1 style={{ marginTop: "0px" }}>$ {value.toFixed(2)}</h1>
    </div>
  );
};

export default BalanceDisplay;
