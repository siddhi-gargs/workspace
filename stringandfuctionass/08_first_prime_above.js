/*
  Write a function that returns the first prime number above given number
  
  Examples:
    firstPrimeAbove(3) => 5
    firstPrimeAbove(0) => 2
    firstPrimeAbove(15) => 17

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function addQuote(inputToString) {
  return "\"" + inputToString + "\"";
}

function isDivisible(dividend, divisor) { 
  return dividend % divisor === 0;
}

function isPrime(number) {
  for (let startFactor = 2; startFactor < number; startFactor++) {
    if (isDivisible(number, startFactor)) {
      return false;
    } 
  } 

  return true;
}

function firstPrimeAbove(number) {
  let candidate = number + 1;

  if (number < 2) {
    return 2;
  }

  while (!isPrime(candidate)) {
    candidate++;
  }

  return candidate; 
}

function message(isCorrect, input, expected, actual) {
  const markAndInput = isCorrect + " Input is " + addQuote(input); 
  const expectedMessage = " expected is " + addQuote(expected); 
  const actualMessage = " actual is " + addQuote(actual);

  return markAndInput + expectedMessage + actualMessage;
}

function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function primeAboveTestCase(inputNumber, expected) {
  const actual = firstPrimeAbove(inputNumber);
  const markStatus = getMark(actual, expected);
  console.log(message(markStatus, inputNumber, expected, actual));
}  

function testCases() {
  primeAboveTestCase(15, 17);
  primeAboveTestCase(2, 3);
  primeAboveTestCase(1, 2);
  primeAboveTestCase(23, 29);
  primeAboveTestCase(11, 13 );
  primeAboveTestCase(41,  43);
  primeAboveTestCase(3, 5);
}

testCases();