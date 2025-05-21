function findSlice(string, startIndex, endIndex) {
  if (startIndex > endIndex) {
    return "";
  }
  
  return string[startIndex] + findSlice(string, startIndex + 1, endIndex);
}

function maximum(first, second) {
  return first > second ? first : second;
}

function minimum(first, second) {
  return first < second ? first : second;
}

function slice(text, start, end) {
  if (text.length === 0) {
    return "";
  }

  return findSlice(text, maximum(start, 0), minimum(text.length - 1, end));
}

function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function message(text, startIndex, end, actualOutput, expected) {
  const input1Msg = "text" + addQuote(text);
  const input2Msg = "startIndex" + addQuote(startIndex);
  const input3Msg = "endIndex" + addQuote(end);
  const inputMessage = input1Msg + input2Msg + input3Msg;
  const actualOutputMsg = "actual" + addQuote(actualOutput);
  const expectedOutputMsg = "expected" + addQuote(expected);

  return inputMessage + actualOutputMsg + expectedOutputMsg;
}

function indcator(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function sliceTestCase(text, start, endIndex, expected) {
  const output = slice(text, start, endIndex);
  const getMark = indcator(output, expected);
  const completeMessage = message(text, start, endIndex, output, expected);
  console.log(getMark + completeMessage);
}

sliceTestCase("", 0, 0, "");
sliceTestCase("a", -6, 10, "a");
sliceTestCase("siddhi", 2, 3, "dd");
sliceTestCase("siddhi", 0, 30, "siddhi");
sliceTestCase("ooo", -10, 2, "ooo");
sliceTestCase("help needed", 0, 7, "help nee");
sliceTestCase("call mee", 4, 19, " mee");
sliceTestCase("may be it will work properly", -18, 4, "may b");
sliceTestCase("color", -6, 10, "color");
sliceTestCase("combine", 0, 0, "c");
sliceTestCase("0000", 50, 100, "");
