/*
  Write a function that returns the nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function addQuote(inputToString) {
  return "\"" + inputToString + "\"";
}

function nthFibonacciTerm(number) {
  let firstNumber = 0;
  let lastNumber = 1;

  for (let countNth = 1; countNth <= number; countNth++) {
    firstNumber = firstNumber + lastNumber;
    lastNumber = firstNumber - lastNumber;
  }

  return lastNumber;
}

function message(mark, input, expected, actual) {
  const markAndInput = mark + " Input is " + addQuote(input);
  const expectedMessage = " expected is " + addQuote(expected);
  const actualMessage = " actual is " + addQuote(actual);

  return markAndInput + expectedMessage + actualMessage;
}

function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function fibbonacciTestCase(input, expected) {
  const actual = nthFibonacciTerm(input);
  const markStatus = getMark(actual, expected);

  console.log(message(markStatus, input, expected, actual));
}

function testCases() {
  fibbonacciTestCase(1, 0);
  fibbonacciTestCase(4, 2);
  fibbonacciTestCase(5, 3);
  fibbonacciTestCase(7, 8);
  fibbonacciTestCase(10, 34);
  fibbonacciTestCase(15, 377);
}

testCases();