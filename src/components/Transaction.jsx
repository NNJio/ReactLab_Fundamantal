import Item from "./Item";
import "./transaction.css";

const Transaction = () => {
  return (
    <ul className="item-list">
      <Item title="Hopitel Bill" amount="- 2000" />
      <Item title="Salary" amount="+ 50000" />
      <Item title="Tarvil" amount="- 500" />
      <Item title="Rent Room" amount="+ 8000" />


    </ul>
  );
};
export default Transaction;
