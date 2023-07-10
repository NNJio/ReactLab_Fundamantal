import Item from "./Item";
import "./transaction.css";
const Transaction = (props) => {
    const {items} = props
  return (
    <ul className="item-list">
      {items.map((e) => (
        // <Item title={e.title} amount={e.amount} />
        <Item {...e} key={e.id} />
      ))}
    </ul>
  );
};
export default Transaction;
