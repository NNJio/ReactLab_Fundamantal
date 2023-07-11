import { useContext } from "react";
import DataContext from "../data/DataCcontext";
import Item from "./Item";
import "./transaction.css";

const Transaction = (props) => {
  const { items } = props;
  const { income, expense } = useContext(DataContext);
  return (
    <div>
      <ul className="item-list">
        {items.map((e) => (
          // <Item title={e.title} amount={e.amount} />
          <Item {...e} key={e} />
        ))}
      </ul>
      <p>Income : {income}</p>
      <p>Expense : {expense}</p>

    </div>
  );
};
export default Transaction;
