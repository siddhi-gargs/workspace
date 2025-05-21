function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function message(input1, input2, actualOutput, expected) {
  const input1Message = "input1" + addQuote(input1);
  const input2Mesage = "input2" + addQuote(input2);
  const actualOutputMsg = "actual" + addQuote(actualOutput);
  const expectedOutputMsg = "expected" + addQuote(expected);

  return input1Message + input2Mesage + actualOutputMsg + expectedOutputMsg;
}

function indcator(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function testCasesForRemainder(input1, input2, expected) {
  const actualOutput = b(input1, input2);
  const getMark = indcator(actualOutput, expected);
  const completeMessage = message(input1, input2, actualOutput, expected);
  console.log(getMark + completeMessage);
}