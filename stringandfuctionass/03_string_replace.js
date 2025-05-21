/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno wornd'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function addQuote(inputToString) {
  return "\"" + inputToString + "\"";
}

function replace(text, match, replacement) {
  let changedText = "";

  for (let index = 0; index < text.length; index++) {
    const isCharMatch = text[index] === match;
    changedText += isCharMatch ? replacement : text[index];
  }

  return changedText;
}

function message(mark, text, match, replacement, expected, actual) {
  const indicator = mark + " text is " + addQuote(text) + " match ";
  const inputSegment = addQuote(match) + " replace " + addQuote(replacement);
  const expectedMessage = " expected " + addQuote(expected); 
  const actualMessage = " actual " + addQuote(actual);
  return indicator + inputSegment + expectedMessage + actualMessage;
}

function getMark(actual, expected) { // capital E why ?
  const isEqual = actual === expected;
  return isEqual ? "✅" : "❌";
}

function testcase(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  const mark = getMark(actual, expected);
  console.log(message(mark, text, match, replacement, expected, actual));
}

function testCases() {
  testcase("siddhi garg", "i", "e", "seddhe garg");
  testcase(" d", 'd', 'e', " e");
  testcase("number", "t", "o", "number");
  testcase("this is right", " ", "_", "this_is_right");
  testcase("pratibha", "i", "t", "prattbha");
  testcase("hello", "o", "i", "helli");
}

testCases();



