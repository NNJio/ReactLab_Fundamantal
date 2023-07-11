import "./App.css";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import { useState, useEffect } from "react";
import DataContext from "./data/DataCcontext";
import ReportComponent from "./components/ReportComponent";

function App() {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
  const Title = () => <h1 style={design}>App Bill Account</h1>;
  // const initState = [
  //   { id: 1, title: "Rent condo", amount: -2000 },
  //   { id: 2, title: "Salary", amount: 12000 },
  //   { id: 3, title: "Tarvel", amount: -500 },
  //   { id: 4, title: "Online Sale", amount: 2000 },
  // ];
  const [items, setItems] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((e) => e > 0)
      .reduce((total, e) => (total += e), 0);
    const expense =
      amounts.filter((e) => e < 0).reduce((total, e) => (total += e), 0) * -1;
    setReportIncome(income);
    setReportExpense(expense);
  }, [items, reportIncome, reportExpense]);
  return (
    <DataContext.Provider
      value={{ income: reportIncome, expense: reportExpense }}
    >
      <div className="container">
        <Title />
        <ReportComponent />
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
