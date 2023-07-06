import Item from "./Item";
import "./transaction.css";

const Transaction = () => {
  const data = [
    { title: "Hopitel Bill", amount: "- 2000" },
    { title: "Salary", amount: "+ 50000" },
    { title: "Tarvil", amount: "- 500" },
    { title: "Rent Room", amount: "- 8000" },
  ];
  return (
    <ul className="item-list">
      <Item title={data[0].title} amount={data[0].amount} />
      <Item title={data[1].title} amount={data[1].amount} />
      <Item title={data[2].title} amount={data[2].amount} />
      <Item title={data[3].title} amount={data[3].amount} />
    </ul>
  );
};
export default Transaction;
