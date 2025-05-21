function compoundInterest(p, r, t) {
  const interest = (p * r) / 100;
  if (t === 0) {
    return 0;
  }

  return interest + compoundInterest(p + interest, r, t - 1);
}

function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function message(principle, rate, time, actualOutput, expected) {
  const inputMsg1 = "principle" + addQuote(principle);
  const inputMsg2 = "rate" + addQuote(rate);
  const inputMsg3 = "time" + addQuote(time);
  const inputMessage = inputMsg1 + inputMsg2 + inputMsg3;
  const actualOutputMsg = "actual" + addQuote(actualOutput);
  const expectedOutputMsg = "expected" + addQuote(expected);

  return inputMessage + actualOutputMsg + expectedOutputMsg;
}

function indcator(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function compoundInterestTestCase(principle, rate, time, expected) {
  const output = compoundInterest(principle, rate, time);
  const getMark = indcator(output, expected);
  const completeMessage = message(principle, rate, time, output, expected);
  console.log(getMark + completeMessage);
}

compoundInterestTestCase(1000, 10, 2, 210);
compoundInterestTestCase(100, 10, 0, 0);
compoundInterestTestCase(1000, 0, 2, 0);
compoundInterestTestCase(100, 10, 3, 33.1);
compoundInterestTestCase(100, 10, 2, 21);
compoundInterestTestCase(1000, 10, 20, 5727.5);
compoundInterestTestCase(100, 20, 5, 148.83);
compoundInterestTestCase(0, 10, 2, 0);
compoundInterestTestCase(200, 20, 10, 1038.35);
compoundInterestTestCase(500, 20, 9, 2079.89);
compoundInterestTestCase(10, 1, 1, 0.1);
compoundInterestTestCase(20, 2, 1, 0.4);