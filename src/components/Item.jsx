import PropTypes from "prop-types";
import "./Item.css";
import DataContext from "../data/DataCcontext";
import { useContext } from "react";

const Item = ({ title, amount }) => {
  const statue = amount < 0 ? "Expense" : "Income";
  const symbol = amount < 0 ? "-" : "+";
  const name = useContext(DataContext);

  return (
    <div>
      <li className={statue}>
        {title}{" "}
        <span>
          {symbol}
          {Math.abs(amount)}
        </span>
        {name}
      </li>
    </div>
  );
};
Item.prototype = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
export default Item;
