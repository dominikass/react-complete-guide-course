import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {

  const expenseDate = new Date(2022, 10, 21).toLocaleDateString();
  const expenseTitle = 'Hairdryer';
  const expensePrice = '119zł';

  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
