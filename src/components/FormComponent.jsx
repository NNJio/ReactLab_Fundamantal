import "./FormComponent.css";
const FormComponent = () => {
  const inputTitle = (event) => {
    console.log(event.target.value);
  };
  const inputAmount = (event) => {
    console.log(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    console.log("Success");
  };
  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>Title</label>
          <input type="Text" placeholder="Input Title" onChange={inputTitle} />
        </div>
        <div className="form-control">
          <label>Amount value</label>
          <input
            type="number"
            placeholder="(+ Income , - Pay)"
            onChange={inputAmount}
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
