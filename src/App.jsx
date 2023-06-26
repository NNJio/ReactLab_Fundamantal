import { useState } from "react";
import "./App.css";
import MyButton from "./components/MyButton";
import MyProfile from "./components/MyProfile";

function App() {
  //! -------------------------
  const user = {
    firstName: "Jonh",
    lastName: "Joe",
    imgPic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFblndSZeUbaKJTXoUSPh0tpT_VhOLo_UnoQ&usqp=CAU",
  };
  //! -------------------------

  const [count, setCount] = useState(0);
  // const [ifTrue, setIfTrue] = useState(true);
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  //! -------------------------

  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  //! -------------------------

  function handleIncreaseClick() {
    setCount(count + 1);
  }
  //! -------------------------

  function handleDecreaseClick() {
    setCount(count - 1);
  }

  //! -------------------------

  return (
    <>
      <h1>TestTest</h1>
      <h1 style={{ color: "red", border: "1px solid black" }}>
        Welcome to my app
      </h1>
      <MyProfile data={user} />
      <h3>{count}</h3>
      <p></p>
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>

      <MyButton />
      {/* {ifTrue ? "Yes is true " : "No is False"} */}
      <ul>{listItems}</ul>
    </>
  );
}

export default App;
