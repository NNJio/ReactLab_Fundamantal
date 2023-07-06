import Item from "./Item";
import "./transaction.css";

const Transaction = () => {
  const data = [
    {id:1, title: "Hopitel Bill", amount: "- 2000" },
    {id:2, title: "Salary", amount: "+ 50000" },
    {id:3, title: "Tarvil", amount: "- 500" },
    {id:3, title: "Rent Room", amount: "- 8000" },
    {id:4, title: "Pay Insurance", amount: "- 300" },
    {id:5, title: "Pay Internet", amount: "- 200" },
  ];
  return (
    <ul className="item-list">
      {data.map((e) => (
        // <Item title={e.title} amount={e.amount} />
        <Item {...e} key ={e.id}/>
      ))}
    </ul>
  );
};
export default Transaction;
