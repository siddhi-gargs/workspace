/*
  Implement the below function that tells if a given year is leap or not.
  Examples:
    isLeapYear(1900) => false
    isLeapYear(2020) => true
    isLeapYear(2001) => false

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function addQuote(text) {
  return "\"" + text + "\"";
}

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  const isDivby4 = isDivisible(year, 4);
  const isDivby100 = isDivisible(year, 100);
  const isDivby400 = isDivisible(year, 400);

  const isYearLeapOrNot = (isDivby4 && !isDivby100) || isDivby400;
  return isYearLeapOrNot;
}

function message(isCorrect, inputYear, expected, actual) { // ??
  const markAndInput = isCorrect + " Input is " + addQuote(inputYear);
  const expectedMessage = " expected is " + addQuote(expected); 
  const actualMessage = " actual is " + addQuote(actual);
  return markAndInput + expectedMessage + actualMessage;
}

function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function leapYearTestcase(inputYear, expected) {
  const actual = isLeapYear(inputYear);
  const indicator = getMark(actual, expected);
  console.log(message(indicator, inputYear, expected, actual));
} 

function testCases() {
  leapYearTestcase(15, false);
  leapYearTestcase(0, true);
  leapYearTestcase(2023, false);
  leapYearTestcase(2003, false);
  leapYearTestcase(400, true);
  leapYearTestcase(1600, true);
}

testCases();
