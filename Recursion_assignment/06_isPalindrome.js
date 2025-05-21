function isIndexEqual(string, leftIndex, rightIndex) {
  if (string[leftIndex] !== string[rightIndex]) {
    return false;
  }

  if (leftIndex > rightIndex) {
    return true;
  }

  return isIndexEqual(string, leftIndex + 1, rightIndex - 1);
}

function isPalindrome(palindromeCandidate) {
  return isIndexEqual(palindromeCandidate, 0, palindromeCandidate.length - 1);
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

function palindromeTestCase(input1, expected) {
  const actualOutput = isPalindrome(input1);
  const getMark = indcator(actualOutput, expected);
  const completeMessage = message(input1, actualOutput, expected);

  console.log(getMark + completeMessage);
}

palindromeTestCase("", true);
palindromeTestCase(" ", true);
palindromeTestCase("0", true);
palindromeTestCase("siddhi", false);
palindromeTestCase("abccba", true);
palindromeTestCase("123321", true);
palindromeTestCase("a1b2c33c2b1a", true);
palindromeTestCase("00", true);
palindromeTestCase("true", false);
palindromeTestCase("z26y2552y62z", true);
