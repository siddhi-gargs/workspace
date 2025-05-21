function reverseGivenString(string, currentIndex) {
  if (currentIndex === 0) {
    return string[0];
  }
  
  return string[currentIndex] + reverseGivenString(string, currentIndex - 1);
}

function reverse(string) {
  if (string.length === 0) {
    return string;
  }

  return reverseGivenString(string, string.length - 1);
}

function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function message(input1, actualOutput, expected) {
  const input1Message = "input1" + addQuote(input1);
  const actualOutputMsg = "actual" + addQuote(actualOutput);
  const expectedOutputMsg = "expected" + addQuote(expected);

  return input1Message + actualOutputMsg + expectedOutputMsg;
}

function indcator(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function testCaseReverseString(input1, expected) {
  const actualOutput = reverse(input1);
  const getMark = indcator(actualOutput, expected);
  const completeMessage = message(input1, actualOutput, expected);

  console.log(getMark + completeMessage);
}

testCaseReverseString("", "");
testCaseReverseString("s", "s");
testCaseReverseString("78", "87");
testCaseReverseString("  ", "  ");
testCaseReverseString("siddhi", "ihddis");
testCaseReverseString("space", "ecaps");
testCaseReverseString("problems", "smelborp");
testCaseReverseString("tall", "llat");
testCaseReverseString("pppppp", "pppppp");
testCaseReverseString("mom", "mom");
testCaseReverseString("malayalam", "malayalam");
testCaseReverseString("you are fine", "enif era uoy");