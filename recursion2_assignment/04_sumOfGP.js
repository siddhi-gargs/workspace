function sumOfGP(startTerm, ratio, nthTerm) {
  if (nthTerm === 0) {
    return 0;
  }

  return startTerm + sumOfGP(startTerm * ratio, ratio, nthTerm - 1);
}

function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function message(start, ratio, nthTerm, actualOutput, expected) {
  const input1Msg = "start" + addQuote(start);
  const input2Msg = "difference" + addQuote(ratio);
  const input3Msg = "nth term" + addQuote(nthTerm);
  const inputMessage = input1Msg + input2Msg + input3Msg;
  const actualOutputMsg = "actual" + addQuote(actualOutput);
  const expectedOutputMsg = "expected" + addQuote(expected);

  return inputMessage + actualOutputMsg + expectedOutputMsg;
}

function indcator(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function testCaseForSumOfGP(start, ratio, nthTerm, expected) {
  const output = sumOfGP(start, ratio, nthTerm);
  const getMark = indcator(output, expected);
  const completeMessage = message(start, ratio, nthTerm, output, expected);
  console.log(getMark + completeMessage);
}

testCaseForSumOfGP(10, 2, 1, 10);
testCaseForSumOfGP(10, 2, 0, 0);
testCaseForSumOfGP(5, 6, 6, 46655);
testCaseForSumOfGP(1, 0, 1, 1);
testCaseForSumOfGP(0, 0, 1, 0);
testCaseForSumOfGP(4, 2, 6, 252);
testCaseForSumOfGP(0, 0, 1, 0);
testCaseForSumOfGP(14, 0 , 6, 14);
testCaseForSumOfGP(6, 3, 3, 78);
testCaseForSumOfGP(5, 2, 3, 35);
testCaseForSumOfGP(8, 2, 3, 56);
testCaseForSumOfGP(10, 1, 5, 50);
testCaseForSumOfGP(10, 5, 5, 7810);