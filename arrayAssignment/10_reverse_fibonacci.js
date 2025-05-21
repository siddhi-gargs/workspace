// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
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

function reverseFibonacci(n) {
  const reverseFibboArray = [];
  let reverseFibboIndex = 0;

  for (let index = n; index >= 1; index--) {
    reverseFibboArray[reverseFibboIndex] = nthFibonacciTerm(index);
    reverseFibboIndex++;
  }

  return reverseFibboArray;
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

function testReverseFibboArray(nthTerm, expected) {
  const actualOutput = reverseFibonacci(nthTerm);
  const isSame = areEqual(actualOutput, expected);
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, message(nthTerm, expected, actualOutput));
}

testReverseFibboArray(0, []);
testReverseFibboArray(1, [0]);
testReverseFibboArray(2, [1, 0]);
testReverseFibboArray(3, [1, 1, 0]);
testReverseFibboArray(4, [2, 1, 1, 0]);
testReverseFibboArray(5, [3, 2, 1, 1, 0]);
testReverseFibboArray(6, [5, 3, 2, 1, 1, 0]);
testReverseFibboArray(7, [8, 5, 3, 2, 1, 1, 0]);
testReverseFibboArray(8, [13, 8, 5, 3, 2, 1, 1, 0]);
testReverseFibboArray(9, [21, 13, 8, 5, 3, 2, 1, 1, 0]);
testReverseFibboArray(10, [34, 21, 13, 8, 5, 3, 2, 1, 1, 0]);
