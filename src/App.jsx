import "./App.css";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import { useState } from "react";
import DataContext from "./data/DataCcontext";

const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
const Title = () => <h1 style={design}>App Bill Account</h1>;
// const Descripiton = () => (
//   <p style={{ textAlign: "center", fontSize: "0.8 rem" }}>
//     Your account log daily{" "}
//   </p>
// );

function App() {
  const [items, setItems] = useState([]);
  const onAddNewItem = (newItem) => {
    // console.log("tttttttt", newItem);
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  return (
    <DataContext.Provider value="nnjio">
      <div className="container">
        <Title />
        <FormComponent onAddItem={onAddNewItem} />
        {/* <Descripiton /> */}
        <Transaction items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
