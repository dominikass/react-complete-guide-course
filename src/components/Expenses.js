import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"


function Expenses(){
    const expenses = [
        {
          id: 1,
          title: "Hairdryer",
          price: 119,
          date: new Date(2022, 10, 21)
        },
        {
          id: 2,
          title: "Toothbrush",
          price: 75,
          date: new Date(2022, 10, 15)
        }
      ];
    
      return (
        <Card className="expenses">
          <ExpenseItem
          title={expenses[0].title}
          price={expenses[0].price}
          date={expenses[0].date}
        ></ExpenseItem>
          <ExpenseItem
          title={expenses[1].title}
          price={expenses[1].price}
          date={expenses[1].date}
        ></ExpenseItem>
        </Card>
      );
}

export default Expenses;