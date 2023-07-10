import PropTypes from "prop-types";
import "./Item.css";
import DataContext from "../data/DataCcontext";

const Item = ({ title, amount }) => {
  const statue = amount < 0 ? "Expense" : "Income";
  const symbol = amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={statue}>
        {title}{" "}
        <span>
          {symbol}
          {Math.abs(amount)}
        </span>
      </li>
      <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer>
    </div>
  );
};
Item.prototype = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
export default Item;
