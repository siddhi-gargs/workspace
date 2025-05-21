/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function addQuote(inputToString) {
  return "\"" + inputToString + "\"";
}

function isSubStringPresent(string, subString, index) {
  for (let subIndex = 0; subIndex < subString.length; subIndex++) {
    const increaseStringIndex = index + subIndex; // find a diffrent name
    if (subString[subIndex] !== string[increaseStringIndex]) {
      return false;
    }
  }
  return true;
}

function occurrences(string, subString) {
  const lastStringIndex = string.length - subString.length;
  let noOfOccurences = 0;
  for (let index = 0; index <= lastStringIndex; index++) {

    if (isSubStringPresent(string, subString, index)) {
      noOfOccurences++;
    }

  }

  return noOfOccurences;
}

function message(indicator, string, subString, expected, actual) {
  const markAndInput = indicator + " string is " + addQuote(string);
  const inputPart = " substring is " + addQuote(subString);
  const expectedMessage = " expected is " + addQuote(expected);
  const actualMessage = " actual is " + addQuote(actual);


  return markAndInput + inputPart + expectedMessage + actualMessage;
}

function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function occurenceTestCase(string, subString, expected) {
  const actual = occurrences(string, subString);
  const markStatus = getMark(actual, expected);

  console.log(message(markStatus, string, subString, expected, actual));
}

function testCases() {
  occurenceTestCase("siddhi", "i", 2);
  occurenceTestCase("hello", "lo", 1);
  occurenceTestCase("", "sgg", 0);
  occurenceTestCase(" ", " ", 1);
  occurenceTestCase('aaaa', 'a', 4);
  occurenceTestCase("hello", "yu", 0);
}

testCases();