const fibo = (term) => {
  if (term === 1) {
    return 0;
  }
  if (term === 2) {
    return 1;
  }
  if (term === 6) {
    throw new Error("Hallelujah");
  }
  return fibo(term - 1) + fibo(term - 2);
};
const main = (args) => {
  const term = +args[0];
  const fiboTerm = fibo(term);
  const message = `${term}th fibo is ${fiboTerm}`;
  console.log(message);
};
main(Deno.args);
