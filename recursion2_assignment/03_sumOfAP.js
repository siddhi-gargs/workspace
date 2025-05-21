function sumOfAP(startTerm, gap, nthTerm) {
  if (nthTerm === 0) {
    return 0;
  }

  return startTerm + sumOfAP(startTerm + gap, gap, nthTerm - 1);
}

function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function message(start, difference, nthTerm, actualOutput, expected) {
  const input1Msg = "start" + addQuote(start);
  const input2Msg = "difference" + addQuote(difference);
  const input3Msg = "nth term" + addQuote(nthTerm);
  const inputMessage = input1Msg + input2Msg + input3Msg;
  const actualOutputMsg = "actual" + addQuote(actualOutput);
  const expectedOutputMsg = "expected" + addQuote(expected);

  return inputMessage + actualOutputMsg + expectedOutputMsg;
}

function indcator(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function replace(start, gap, nthTerm, expected) {
  const output = sumOfAP(start, gap, nthTerm);
  const getMark = indcator(output, expected);
  const completeMessage = message(start, gap, nthTerm, output, expected);
  console.log(getMark + completeMessage);
}

replace(5, 2, 3, 21);
replace(5, 2, 0, 0);
replace(5, 0, 3, 15);
replace(4, 0, 0, 0);
replace(0, 0, 9, 0);
replace(5, 1, 9, 81);
replace(1, -2, 10, -80);
replace(0, 2, 3, 6);
replace(10, -7, 10, -215);
replace(10, 2, 2, 22);
replace(18, 2, 1, 18);
