import React from "react";
import PropTypes from "prop-types";

type IncomeExpenseProps = { income: number; outcome: number };

const IncomeExpense = ({ income, outcome }: IncomeExpenseProps) => {
  console.log("outcome", outcome);

  const outcomeFormatted = outcome.toFixed(2).slice(1);
  // const outcomeFormatted = Math.abs(outcome).toFixed(2);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        boxShadow: "rgba(0,0,0,0.16) 0px 1px 4px",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRight: "1px solid grey",
        }}
      >
        <h4 style={{ marginBottom: "5px" }}>INCOME </h4>
        <h2 style={{ marginTop: "0px", color: "green" }}>
          $ {income.toFixed(2)}
        </h2>
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4 style={{ marginBottom: "5px" }}>EXPENSE</h4>
        <h2 style={{ marginTop: "0px", color: "red" }}>$ {outcomeFormatted}</h2>
      </div>
    </div>
  );
};

export default IncomeExpense;
