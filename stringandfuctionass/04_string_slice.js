/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function addQuote(inputToString) {
  return "\"" + inputToString + "\"";
}

function minimum(firstNumber, secondNumber) {
  const endIndex = firstNumber > secondNumber ? secondNumber : firstNumber;
  return endIndex;
}

function maximum(firstNumber, secondNumber) {
  return secondNumber < firstNumber ? firstNumber : secondNumber;
}

function slice(text, start, end) {
  let substring = "";
  const lastIndex = text.length - 1;
  const startOfIndex = maximum(0, start);
  const endOfIndex = minimum(end, lastIndex);

  for (let index = startOfIndex; index <= endOfIndex; index++) {
    substring = substring + text[index];
  }

  return substring;
}

function message(mark, string, to, end, expected, actual) {
  const indicator = mark + " string is " + addQuote(string);
  const inputSegment = " to " + addQuote(to) + " end " + addQuote(end);
  const expectedMessage = " expected is " + addQuote(expected);  
  const actualMessage = " actual is " + addQuote(actual);

  return indicator + inputSegment + expectedMessage + actualMessage;
}

function getMark(actual, expected) {
  const isEqual = actual === expected;
  return isEqual ? "✅" : "❌"
}

function testcase(string, to,end, expected) {
  const actual = slice(string, to, end);
  const mark = getMark(actual, expected);
  console.log(message(mark, string, to, end, expected, actual));
} 

function testCases() {
  testcase("negative start", -1, 8, "negative ");
  testcase('do the slices', -6, 3, "do t");
  testcase('do the slices', 8, 36, "lices");
  testcase(" ", 0 , 1, " ");
  testcase("pratibha", 5, 6, "bh");
  testcase('pieces', 0, 3, "piec");
}

testCases();



   
   