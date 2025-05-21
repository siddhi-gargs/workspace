function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function remainder(dividend, divisor) {
  if (dividend < divisor) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
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
  const actualOutput = remainder(input1, input2);
  const getMark = indcator(actualOutput, expected);
  const completeMessage = message(input1, input2, actualOutput, expected);
  console.log(getMark + completeMessage);
}

testCasesForRemainder(1, 1, 0);
testCasesForRemainder(0, 1, 0);
testCasesForRemainder(40, 8, 0);
testCasesForRemainder(90, 11, 2);
testCasesForRemainder(121, 10, 1);
testCasesForRemainder(1, 10, 1);
testCasesForRemainder(55, 22, 11);
testCasesForRemainder(87, 12, 3);
testCasesForRemainder(78, 30, 18);
testCasesForRemainder(90, 10, 0);