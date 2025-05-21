class Expense {
  #dollar;
  #cents;

  constructor(dollar, cents) {
    this.#dollar = dollar;
    this.#cents = cents;
  }

  addTwoInstanceOfExpense(anotherExpense) {
    const cents = (this.#cents + anotherExpense.#cents) % 100;
    const dollar =
      this.#dollar +
      anotherExpense.#dollar +
      Math.floor((this.#cents + anotherExpense.#cents) / 100);

    return new Expense(dollar, cents);
  }

  static parseArgs(cash) {
    const [dollar, cent] = cash.split(".");
    const cents = cent.padEnd(2, "0");
    return new Expense(+dollar, +cents);
  }

  isExpectedActualEqual(expected) {
    return this.#dollar === expected.#dollar && this.#cents === expected.#cents;
  }

  display(totalExpense) {
    return `${totalExpense.#dollar}.${totalExpense.#cents}`;
  }
}

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
