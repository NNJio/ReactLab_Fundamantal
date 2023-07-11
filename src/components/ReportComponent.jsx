
import { useContext } from "react";
import DataContext from "../data/DataCcontext";

const ReportComponent = () => {
  const {income,expense}= useContext(DataContext)
  return (
    <div>
        <p>Income : {income}</p>
        <p>Expense : {expense}</p>
      {/* <DataContext.Consumer>
        {(context) => (
          <p>
            Income : {context.income} Expenes : {context.expense}
          </p>
        )}
      </DataContext.Consumer> */}
    </div>
  );
};
export default ReportComponent;
