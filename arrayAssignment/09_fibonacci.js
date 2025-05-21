// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters

function nthFibonacciTerm(number) {
  let firstNumber = 0;
  let lastNumber = 1;

  for (let countNth = 1; countNth <= number; countNth++) {
    firstNumber = firstNumber + lastNumber;
    lastNumber = firstNumber - lastNumber;
  }

  return lastNumber;
}

function fibonacci(n) {
  const fibbonacciArray = [];

  for (let index = 0; index < n; index++) {
    fibbonacciArray[index] = nthFibonacciTerm(index + 1);
  }

  return fibbonacciArray;
}

function addQuote(string) {
  return " \"" + string + "\" ";
}

function message(nth, expected, actual) {
  const showInput = "nth" + addQuote(nth);
  const expectedMsg = "expected" + addQuote(expected);
  const actualOutputMsg = "actual Output" + addQuote(actual);

  return showInput + expectedMsg + actualOutputMsg;
}

function areEqual(array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  
  return true;
}

function testNfibbonacciTerms(nth, expected) {
  const actualOutput = fibonacci(nth);
  const isSame = areEqual(actualOutput, expected);
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, message(nth, expected, actualOutput));
}

testNfibbonacciTerms(1, [0]);
testNfibbonacciTerms(0, []);
testNfibbonacciTerms(2, [0, 1]);
testNfibbonacciTerms(3, [0, 1, 1]);
testNfibbonacciTerms(4, [0, 1, 1, 2]);
testNfibbonacciTerms(5, [0, 1, 1, 2, 3]);
testNfibbonacciTerms(6, [0, 1, 1, 2, 3, 5]);
testNfibbonacciTerms(7, [0, 1, 1, 2, 3, 5, 8]);
testNfibbonacciTerms(8, [0, 1, 1, 2, 3, 5, 8, 13]);
testNfibbonacciTerms(9, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
