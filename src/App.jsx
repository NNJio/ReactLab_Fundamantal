import "./App.css";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
const Title = () => <h1 style={design}>App Bill Account</h1>;
const Descripiton = () => (
  <p style={{ textAlign: "center", fontSize: "0.8 rem" }}>
    Your account log daily{" "}
  </p>
);

function App() {
  return (
    <div className="container">
      <Title />
      <FormComponent />
      <Descripiton />
      <Transaction />
    </div>
  );
}

export default App;
