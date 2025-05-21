const readFile = (path) => Deno.readTextFileSync(path);

// const input = [12.5, 3.45, 1.75, 2.3];

const calculateExpenses = (input) => {
  return input.reduce(
    (initialEx, currentExpenses) => initialEx + currentExpenses,
    0
  );
};

const main = () => {
  const filedata = readFile("./expenses.txt");
  const data = filedata.split("\n").map((expense) => +expense);
  const totalExpenses = calculateExpenses(data);

  return totalExpenses.toFixed(2);
};

console.log(main());
