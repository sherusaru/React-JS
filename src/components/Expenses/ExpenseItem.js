import React, { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import "../UI/ExpenseItem.css";

const ExpenseItem = (props) => {
  //function clickhandler
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
};

export default ExpenseItem;
