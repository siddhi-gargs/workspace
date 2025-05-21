function convertIntoNumber(string, currentIndex, inNumber) {
  const currentNumber = inNumber * 10 + (+string[currentIndex]);

  if (currentIndex === string.length - 1) {
    return currentNumber;
  }
  
  return convertIntoNumber(string, currentIndex + 1, currentNumber);
}

function stringToNumber(string) {
  if (string[0] === "-") {
    return -convertIntoNumber(string, 1, 0);
  }
  
  return convertIntoNumber(string, 0, 0);
}

function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function message(input1, actualOutput, expected) {
  const input1Message = "input1" + addQuote(input1);
  const actualOutputMsg = "actual" + addQuote(actualOutput);
  const expectedOutputMsg = "expected" + addQuote(expected);

  return input1Message + actualOutputMsg + expectedOutputMsg;
}

function indcator(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function convertIntoNumTestCase(input1, expected) {
  const actualOutput = stringToNumber(input1);
  const getMark = indcator(actualOutput, expected);
  const completeMessage = message(input1, actualOutput, expected);
  console.log(getMark + completeMessage);
}

convertIntoNumTestCase("0", 0);
convertIntoNumTestCase("-1", -1);
convertIntoNumTestCase("-10", -10);
convertIntoNumTestCase("-23", -23);
convertIntoNumTestCase("1283", 1283);
convertIntoNumTestCase("-1283", -1283);
convertIntoNumTestCase("-6756", -6756);
convertIntoNumTestCase("1010", 1010);
convertIntoNumTestCase("56", 56);
convertIntoNumTestCase("10229", 10229);
