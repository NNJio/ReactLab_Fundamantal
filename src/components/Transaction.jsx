import DataContext from "../data/DataCcontext";
import Item from "./Item";
import "./transaction.css";
const Transaction = (props) => {
  const { items } = props;
  return (
    <div>
      <ul className="item-list">
        {items.map((e) => (
          // <Item title={e.title} amount={e.amount} />
          <Item {...e} key={e} />
        ))}
      </ul>
      <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer>
    </div>
  );
};
export default Transaction;
