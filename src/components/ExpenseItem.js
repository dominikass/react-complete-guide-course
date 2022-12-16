import React from "react";
import DataItem from "./DateItem";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <DataItem date={props.date}></DataItem>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}zł</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
