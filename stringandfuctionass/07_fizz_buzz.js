/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function addQuote(inputToString) {
  return "\"" + inputToString + "\"";
}

function isDivisible(dividend, divisor) { 
  return dividend % divisor === 0;
}

function fizzBuzz(number) {  
  if (isDivisible(number, 15)) {
    return "fizzbuzz";
  } 

  if (isDivisible(number, 3)) {
    return "fizz";
  } 

  if (isDivisible(number, 5)) {
    return "buzz";
  } 

  return "" + number;
}

function message(mark, input, expected, actual) {
  const markAndInput = mark + "input is " + addQuote(input);
  const expectedMessage = " expected is " + addQuote(expected); 
  const actualMessage = " actual is " + addQuote(actual);
  
  return markAndInput + expectedMessage + actualMessage;
}

function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function fizzBuzzTestCase(input, expected) {
  const actualOutput = fizzBuzz(input);
  const markStatus = getMark(actualOutput, expected);
  console.log(message(markStatus, input, expected, actualOutput));
} 

function testCases() {
  fizzBuzzTestCase(15, "fizzbuzz");
  fizzBuzzTestCase(0, "fizzbuzz");
  fizzBuzzTestCase(23, "23");
  fizzBuzzTestCase(20, "buzz");
  fizzBuzzTestCase(4, "4");
  fizzBuzzTestCase(3, "fizz");
}

testCases();