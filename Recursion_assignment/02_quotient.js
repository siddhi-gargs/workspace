function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function quotient(dividend, divisor) {
  
  if (dividend === divisor) {
    return 1;
  }
  
  if (dividend < divisor) {
    return 0;
  }
  
  return 1 + quotient(dividend - divisor, divisor); 
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

function quotientTestCase(input1, input2, expected) {
  const actualOutput = quotient(input1, input2);
  const getMark = indcator(actualOutput, expected);
  const completeMessage = message(input1, input2, actualOutput, expected);
  console.log(getMark + completeMessage);
}

quotientTestCase(0, 1, 0);
quotientTestCase(6, 5, 1);
quotientTestCase(20, 7, 2);
quotientTestCase(10, 1, 10);
quotientTestCase(11, 6, 1);
quotientTestCase(10, 67, 0);
quotientTestCase(10, 45, 0);
quotientTestCase(67, 7, 9);
quotientTestCase(24, 5, 4);
quotientTestCase(97, 12, 8);