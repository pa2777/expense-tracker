import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BalanceDisplay from "./BalanceDisplay";
import IncomeExpense from "./IncomeExpense";
import History from "./History";
import NewTransaction from "./NewTransaction";
import { tab } from "@testing-library/user-event/dist/tab";
import { expense, recordsProps } from "./types";

const expenses = [
  { text: "Cash", value: 500 },
  { text: "Book", value: -40 },
  { text: "Camera", value: -200 },
];

const App = () => {
  const [expenseList, setExpenseList] = useState<expense[]>(expenses);
  const [total, setTotal] = useState({ income: 0, charge: 0 });

  useEffect(() => {
    counter(expenseList);
  }, [expenseList.length]);

  const counter = (expenses: expense[]) => {
    let income = 0;
    let charge = 0;
    expenses.forEach(({ text, value }) => {
      value > 0 ? (income += value) : (charge += value);
    });

    setTotal({ income, charge });
  };

  const handleClick = (newTransaction: expense) => {
    setExpenseList([...expenseList, newTransaction]);
  };

  return (
    <div style={{ margin: 150 }}>
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          Expense Tracker
        </h1>
      </div>
      <BalanceDisplay value={total.income + total.charge} />
      <div>
        <IncomeExpense income={total.income} charge={total.charge} />
      </div>
      <div>
        <History records={expenseList} />
      </div>
      <div>
        <NewTransaction handleClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
