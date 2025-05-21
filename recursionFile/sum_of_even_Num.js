function sumOfFirstEvenNum(n) {
  if (n === 0) {
    return 0;
  }

  // if (n === -1) {
  //   return -2;
  // }

  return sumOfFirstEvenNum(n - 1) + 2 * (n - 1);
}
console.log(sumOfFirstEvenNum(4));

function reverseTestCase(nthNumber, expected) {
  const actualOutput = sumOfFirstEvenNum(nthNumber);
  const status = actualOutput === expected ? "✅" : "❌";
  console.log(status + " expected " + expected + " nth " + nthNumber);
}

reverseTestCase(1, 0);
reverseTestCase(2, 2);
reverseTestCase(3, 6);
reverseTestCase(4, 12);
reverseTestCase(5, 20);
reverseTestCase(6, 30);
reverseTestCase(7, 42);


