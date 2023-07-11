import DataContext from "../data/DataCcontext";
import Item from "./Item";
import "./transaction.css";
import { useContext } from "react";

const Transaction = (props) => {
  const { items } = props;
  const name = useContext(DataContext);
  return (
    <div>
      <ul className="item-list">
        {items.map((e) => (
          // <Item title={e.title} amount={e.amount} />
          <Item {...e} key={e} />
        ))}
      </ul>
      {name}
    </div>
  );
};
export default Transaction;
