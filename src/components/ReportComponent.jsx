import { useContext } from "react";
import DataContext from "../data/DataCcontext";

const ReportComponent = () => {
  const name = useContext(DataContext);
  return <div>Hello {name}</div>;
};
export default ReportComponent;
