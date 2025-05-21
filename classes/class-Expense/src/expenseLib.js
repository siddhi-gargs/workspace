import { Expense } from "./expenseClass.js";

const addexpense = (previousCash, currentCash) => {
  return previousCash.addTwoInstanceOfExpense(currentCash);
};

const main = (expenses) => {
  const emptyInstance = new Expense(0, 0);
  const instanceOfExpenses = expenses.map((expense) =>
    Expense.parseArgs(expense.toString())
  );

  const totalExpense = instanceOfExpenses.reduce(addexpense, emptyInstance);
  console.log(emptyInstance.display(totalExpense));
};

main([12.5, 3.45, 1.75, 2.3]);
main([4.6, 3.5, 4.9, 34.6]);
