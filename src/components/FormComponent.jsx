import { useState } from "react";
import "./FormComponent.css";
const FormComponent = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const inputTitle = (event) => {
    setTitle(event.target.value);
    // console.log(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
    // console.log(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    const itemData = {
      title: title,
      amount: Number(amount),
    };
    console.log(itemData);
    setTitle("");
    setAmount(0);
  };
  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>Title</label>
          <input
            type="Text"
            placeholder="Input Title"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div className="form-control">
          <label>Amount value</label>
          <input
            type="number"
            placeholder="(+ Income , - Pay)"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" className="btn">
            Done
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormComponent;
