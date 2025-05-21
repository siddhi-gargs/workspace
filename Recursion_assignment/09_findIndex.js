function indexCharInString(string, char, currentIndex) {
  if (string[currentIndex] === char) {
    return currentIndex;
  }

  if (currentIndex >= string.length) {
    return -1;
  }

  return indexCharInString(string, char, currentIndex + 1);
}

function findIndex(string, char) {
  return indexCharInString(string, char, 0);
}

function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function message(input1, input2, actualOutput, expected) {
  const input1Message = "string" + addQuote(input1);
  const input2Mesage = "char" + addQuote(input2);
  const actualOutputMsg = "actual" + addQuote(actualOutput);
  const expectedOutputMsg = "expected" + addQuote(expected);

  return input1Message + input2Mesage + actualOutputMsg + expectedOutputMsg;
}

function indcator(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function findIndexTestCase(input1, input2, expected) {
  const actualOutput = findIndex(input1, input2);
  const getMark = indcator(actualOutput, expected);
  const completeMessage = message(input1, input2, actualOutput, expected);
  
  console.log(getMark + completeMessage);
}

findIndexTestCase("u", "1", -1);
findIndexTestCase("siddhi", "i", 1);
findIndexTestCase("crowd", "w", 3);
findIndexTestCase("by", "", -1);
findIndexTestCase(" ", " ", 0);
findIndexTestCase("nameee", "e", 3);
findIndexTestCase("", "", -1);
findIndexTestCase(" ", "", -1);
findIndexTestCase("aa", "a", 0);
findIndexTestCase("index", "x", 4);
findIndexTestCase("u", "i", -1);
findIndexTestCase("abcde", "d", 3);