import Expense from "./components/Expenses/Expense";

const App = () => {
  const saveExpenseHandler = (saveData) => {
    console.log(saveData);
  };

  return <Expense saveExpense = {saveExpenseHandler}/>;
};

export default App;
