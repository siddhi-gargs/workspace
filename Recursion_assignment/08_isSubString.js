function findSlice(string, startIndex, endIndex) {
  if (startIndex === endIndex) {
    return string[startIndex];
  }
  
  return string[startIndex] + findSlice(string, startIndex + 1, endIndex);
}

function isSubstringInSlice(string, subString, sliceStart) {
  const rightMargin = string.length - subString.length;
  const notEnoughCharsToMatch = sliceStart > rightMargin;
  if (notEnoughCharsToMatch) {
    return false;
  }

  const sliceEndIndex = sliceStart + subString.length - 1;
  const slice = findSlice(string, sliceStart, sliceEndIndex);
  if(slice === subString) return true;

  return isSubstringInSlice(string, subString, sliceStart + 1);
}

function isSubString(string, otherString) {
  if (otherString.length === 0 || string.length === 0) {
    return false;
  }

  return isSubstringInSlice(string, otherString, 0, string.length - 1);
}

function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function message(input1, input2, actualOutput, expected) {
  const input1Message = "string" + addQuote(input1);
  const input2Mesage = "subString" + addQuote(input2);
  const actualOutputMsg = "actual" + addQuote(actualOutput);
  const expectedOutputMsg = "expected" + addQuote(expected);

  return input1Message + input2Mesage + actualOutputMsg + expectedOutputMsg;
}

function indcator(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function subStringTestCase(input1, input2, expected) {
  const actualOutput = isSubString(input1, input2);
  const getMark = indcator(actualOutput, expected);
  const completeMessage = message(input1, input2, actualOutput, expected);
  console.log(getMark + completeMessage);
}

subStringTestCase("siddhi", "id", true);
subStringTestCase("google", "le", true);
subStringTestCase("it can be wrong", "id", false);
subStringTestCase("siddhi", " ", false);
subStringTestCase("empty", "", false);
subStringTestCase("", "si", false);
subStringTestCase("hello", "lo", true);
subStringTestCase("is substring", " su", true);
subStringTestCase("is this working", " this", true);
subStringTestCase("", "", false);
