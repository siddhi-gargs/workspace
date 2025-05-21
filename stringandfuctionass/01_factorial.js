/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(5) => 120
    factorial(0) => 1

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function addQuote(inputToString) {
  return "\"" + inputToString + "\"";
}

function factorial(number) {
  let factorialResult = 1;

  for (let multiplier = number; multiplier > 1; multiplier--) {
    factorialResult = factorialResult * multiplier;
  }

  return factorialResult;
}

function message(status, number, expected, actual) {
  const markAndInput = status + " Input is " + addQuote(number);
  const expectedMessage = " expected is " + addQuote(expected); 
  const actualMessage = " actual is " + addQuote(actual);
  return markAndInput + expectedMessage + actualMessage;
}

function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function factorialTestCase(number, expected) {
  const actual = factorial(number);
  const indicator = getMark(actual, expected);
  console.log(message(indicator, number, expected, actual));
}

// testcase(input, expectedOutput)
function testCases() {
  factorialTestCase(5, 120);
  factorialTestCase(0, 1);
  factorialTestCase(7, 5040);
  factorialTestCase(1, 1);
  factorialTestCase(6, 720);
  factorialTestCase(10, 3628800);
}

testCases();