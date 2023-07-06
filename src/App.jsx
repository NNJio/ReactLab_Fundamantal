import "./App.css";
import Transaction from "./components/Transaction";
const Title = () => <h1>App Bill Account</h1>;
const Descripiton = () => <p>Your account log daily </p>;



function App() {
  return (
    <>
      <Title />
      <Descripiton />
      <Transaction />
    </>
  );
}

export default App;
