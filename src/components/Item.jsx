import PropTypes from "prop-types";
import "./Item.css";

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
    </div>
  );
};
Item.prototype = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
export default Item;
