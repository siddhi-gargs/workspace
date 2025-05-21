/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function addQuote(inputToString) {
  return "\"" + inputToString + "\"";
}

function isSubStringPresent(string, subString, index) {
  for (let subIndex = 0; subIndex < subString.length; subIndex++) {
    const increaseStringIndex = index + subIndex; 
    if (subString[subIndex] !== string[increaseStringIndex]) {
      return false;
    }
  }

  return true;
}

function endsWith(string, substring) { 
  const StringIndex = string.length - substring.length;
  const isPresent = isSubStringPresent(string, substring, StringIndex);

  return isPresent;
}

function message(mark, string, subString, expected, actual) {
  const indicator = mark + " string is " + addQuote(string); 
  const inputSegment = "substring is " + addQuote(subString);
  const expectedMessage = " expected is " + addQuote(expected); 
  const actualMessage = " actual is " + addQuote(actual);
  return indicator + inputSegment + expectedMessage + actualMessage;
}

function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function testcase(string, substring, expected) {
  const actual = endsWith(string, substring);
  const markStatus = getMark(actual, expected);
  console.log(message(markStatus, string, substring, expected, actual));
} 

function testCases() {
  testcase("siddhi", "ddhi", true);
  testcase("hello", "lo", true);
  testcase("", "sgg", false);
  testcase(" ", " ", true);
  testcase('aaaa', 'aa', true);
  testcase("hello", "yu", false);
}

testCases();

