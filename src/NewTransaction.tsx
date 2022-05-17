import React, { useState } from "react";
import PropTypes from "prop-types";
import { expense } from "./types";

const NewTransaction = ({
  handleClick,
}: {
  handleClick: (newTransaction: expense) => void;
}) => {
  const [newTransaction, setNewTransaction] = useState({ text: "", value: "" });

  return (
    <div style={{ marginBottom: "10px", marginTop: "30px" }}>
      <form action="">
        <div>
          <h3>Add new transaction</h3>
          <hr />
          <h4>Text</h4>
        </div>
        <input
          style={{
            padding: "10px",
            fontSize: "15px",
            boxSizing: "border-box",
            width: "100%",
          }}
          type="text"
          onChange={(event) =>
            setNewTransaction({ ...newTransaction, text: event.target.value })
          }
          placeholder="Enter text..."
          value={newTransaction.text}
        />
        <div style={{ margin: "10px 0px" }}>
          <h4 style={{ margin: "0px" }}>Amount</h4>

          <span style={{ marginBottom: "10px" }}>
            (negative - expense, positive - income)
          </span>
        </div>
        <div>
          <input
            style={{
              padding: "10px",
              fontSize: "15px",
              boxSizing: "border-box",
              width: "100%",
            }}
            onChange={(event) =>
              setNewTransaction({
                ...newTransaction,
                value: event.target.value,
              })
            }
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={newTransaction.value}
          />
        </div>
        <button
          style={{
            backgroundColor: "#7067eb",
            cursor: "pointer",
            color: "#ffffff",
            fontSize: "20px",
            padding: "9px 23px",
            textShadow: "0px 1px 0px #263666",
            marginTop: "10px",
            width: "100%",
          }}
          onClick={(event) => {
            event.preventDefault();

            handleClick({
              ...newTransaction,
              value: parseFloat(newTransaction.value),
            });
            setNewTransaction({ text: "", value: "" });
          }}
        >
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default NewTransaction;
