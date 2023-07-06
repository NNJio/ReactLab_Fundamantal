const Item = () => {
  const name = "Rest in hotel";
  const amount = 5000;
  return (
    <li>
      {name} <span>-{amount}</span>
    </li>
  );
};

export default Item;
