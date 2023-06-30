import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

export const ExpenseItem = ({ title, date, id, amount }) => {
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={date} key={id} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </>
  );
};
