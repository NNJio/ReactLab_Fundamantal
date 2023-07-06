import Item from "./Item";
import "./transaction.css";
import { v4 as uuidv4 } from "uuid";

const Transaction = () => {
  const data = [
    { title: "Hopitel Bill", amount: "- 2000" },
    { title: "Salary", amount: "+ 50000" },
    { title: "Tarvil", amount: "- 500" },
    { title: "Rent Room", amount: "- 8000" },
    { title: "Pay Insurance", amount: "- 300" },
    { title: "Pay Internet", amount: "- 200" },
  ];
  return (
    <ul className="item-list">
      {data.map((e) => (
        // <Item title={e.title} amount={e.amount} />
        <Item {...e} key={uuidv4()}/>
      ))}
    </ul>
  );
};
export default Transaction;
