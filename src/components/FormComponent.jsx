import "./FormComponent.css";
const FormComponent = () => {
  return (
    <div>
      <form>
        <div className="form-control">
          <label>Topic</label>
          <input type="Text" placeholder="Input Topic" />
        </div>
        <div className="form-control">
          <label>Currency value</label>
          <input type="number" placeholder="(+ Income , - Pay)" />
        </div>
        <div>
          <button type="submit" className="btn" >Done</button>
        </div>
      </form>
    </div>
  );
};
export default FormComponent;
