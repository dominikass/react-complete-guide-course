import React from "react";
import DataItem from "./DateItem";
import "./ExpenseItem.css";

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <DataItem date = {props.date}></DataItem>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}zł</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
