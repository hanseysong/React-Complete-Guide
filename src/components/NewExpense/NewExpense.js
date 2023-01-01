import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [enterExpenseForm, setEnterExpenseForm] = useState(false);

  const expenseFormHandler = () => {
    setEnterExpenseForm(true);
  };

  const cancelEntryHandler = () => {
    setEnterExpenseForm(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      ID: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setEnterExpenseForm(false);
  };

  if (enterExpenseForm === false) {
    return (
      <div className="new-expense">
        <button onClick={expenseFormHandler}>Add new expense</button>
      </div>
    );
  } else if (enterExpenseForm === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onCancelEntry={cancelEntryHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      </div>
    );
  }
};

export default NewExpense;
