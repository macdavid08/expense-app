import { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import "./Expenses.css";

export const Expenses = (props) => {
  const data = props.data;
  const [expense, setExpense] = useState(data);
  return (
    <Card className="expenses">
      {expense.map((data) => {
        return (
          <ExpenseItem
            key={data.id}
            title={data.title}
            id={data.id}
            amount={data.amount}
            date={data.date}
          />
        );
      })}
    </Card>
  );
};
