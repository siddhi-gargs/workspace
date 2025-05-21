function findRightIndex(string, char, currentIndex) {
  if (currentIndex < 0) {
    return -1;
  }

  if (string[currentIndex] === char) {
    return currentIndex;
  }
  
  return findRightIndex(string, char, currentIndex - 1);
}

function findLastIndex(string, char) {
  return findRightIndex(string, char, string.length - 1);
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

function lastIndexTestCases(input1, input2, expected) {
  const actualOutput = findLastIndex(input1, input2);
  const getMark = indcator(actualOutput, expected);
  const completeMessage = message(input1, input2, actualOutput, expected);
  
  console.log(getMark + completeMessage);
}

lastIndexTestCases("y", "", -1);
lastIndexTestCases("siddhi", "i", 5);
lastIndexTestCases("mango", "o", 4);
lastIndexTestCases("trenddy", "d", 5);
lastIndexTestCases("y", "", -1);
lastIndexTestCases("", "", -1);
lastIndexTestCases("roaaming", "a", 3);
lastIndexTestCases("aportable", "a", 5);
lastIndexTestCases("ashf", "a", 0);
lastIndexTestCases("oppo", "p", 2);
lastIndexTestCases("last ii", "i", 6);
lastIndexTestCases("slice", "e", 4);
