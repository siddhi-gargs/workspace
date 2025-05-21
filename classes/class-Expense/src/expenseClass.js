export class Expense {
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
    const centsInformat = totalExpense.#cents.toString().padEnd(2, "0");
    return `${totalExpense.#dollar}.${centsInformat}`;
  }
}
