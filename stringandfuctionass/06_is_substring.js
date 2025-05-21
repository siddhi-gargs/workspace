/*
  Implement the below function that tells if astring issubstring 
  ofanother string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function addQuote(inputToString) {
  return "\"" + inputToString + "\"";
}

function isSubStringPresent(string, subString, index) {
  for (let subIndex = 0; subIndex < subString.length; subIndex++) {
    const stringIndex = index + subIndex;
    if (subString[subIndex] !== string[stringIndex]) {
      return false;
    }
  }

  return true;
}

function isSubstring(string, subString) {
  const lastStringIndex = string.length - subString.length;
  if (subString.length === 0) {
    return false;
  }

  for (let index = 0; index <= lastStringIndex; index++) {
    if (isSubStringPresent(string, subString, index)) {
      return true;
    }
  }

  return false;
}

function message(indicator, string, subString, expected, actual) {
  const markAndInput = indicator + " string is " + addQuote(string);
  const inputSegment = " substring " + addQuote(subString)
  const expectedMessage = " expected is " + addQuote(expected); 
  const actualMessage = " actual is " + addQuote(actual);
  
  return markAndInput + inputSegment + expectedMessage + actualMessage;
}
function getMark(actual, expected) { 
  return actual === expected ? "✅" : "❌";
}

function subStringTestCase(string, subString, expected) {
  const actual = isSubstring(string, subString);
  const markStatus = getMark(actual, expected);
  console.log(message(markStatus, string, subString, expected, actual));
}

function testcases() {
  subStringTestCase("", "", false);
  subStringTestCase("hello", "llo", true);
  subStringTestCase("", "sgg", false);
  subStringTestCase(" ", " ", true);
  subStringTestCase('aaaa', 'a', true);
  subStringTestCase("hello", "yu", false);
}

testcases();