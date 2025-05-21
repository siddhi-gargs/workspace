function repeat(string, n) {
  if (n === 0) {
    return "";
  }
  return string + repeat(string, n - 1);
}

function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function message(string, noOfTimes, actualOutput, expected) {
  const input1Message = "input1" + addQuote(string);
  const input2Mesage = "input2" + addQuote(noOfTimes);
  const actualOutputMsg = "actual" + addQuote(actualOutput);
  const expectedOutputMsg = "expected" + addQuote(expected);

  return input1Message + input2Mesage + actualOutputMsg + expectedOutputMsg;
}

function indcator(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function repeatStringTestCase(string, noOfTimes, expected) {
  const actualOutput = repeat(string, noOfTimes);
  const getMark = indcator(actualOutput, expected);
  const completeMessage = message(string, noOfTimes, actualOutput, expected);
  console.log(getMark + completeMessage);
}

repeatStringTestCase("siddhi", 0, "");
repeatStringTestCase("i", 1, "i");
repeatStringTestCase("0", 0, "");
repeatStringTestCase("s", 5, "sssss");
repeatStringTestCase("a", 4, "aaaa");
repeatStringTestCase("1", 5, "11111");
repeatStringTestCase("order", 4, "orderorderorderorder");
repeatStringTestCase("f", 10, "ffffffffff");
repeatStringTestCase("m", 4, "mmmm");
repeatStringTestCase("k", 2, "kk");