/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function addQuote(inputToString) {
  return "\"" + inputToString + "\"";
}

function findIndex(text, target) {
  for (let index = 0; index < text.length; index++) {
    if (text[index] === target) {
      return index;
    }
  }

  return -1;
}

function message(status, text, target , expected, actual) {
  const indicator = status + " text is " + addQuote(text); 
  const inputSegment = " target is " + addQuote(target);
  const expectedMessage = " expected is " + addQuote(expected); 
  const actualMessage = " actual is " + addQuote(actual);
  return indicator + inputSegment + expectedMessage + actualMessage;
}

function getMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function testCaseFindIndex(text, target, expected) {
  const actualOutput = findIndex(text, target);
  const markStatus = getMark(actualOutput, expected);
  console.log(message(markStatus, text, target, expected, actualOutput));
} 

function testCases() {
  testCaseFindIndex("siddhidd", "d", 2);
  testCaseFindIndex("hello", "o", 4);
  testCaseFindIndex("seggment", "m", 4);
  testCaseFindIndex("what is this first_", "_", 18);
  testCaseFindIndex('not found', 'z', -1);
  testCaseFindIndex("hello", "o", 4);
}

testCases();




