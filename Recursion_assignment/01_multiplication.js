// function maximum(first, second) {
//   return first > second ? first : second;
// }

function findIndex(multiplier, multiplicand) {
  if (multiplicand === 0) {
    return 0;
  }
  
  return multiplier + findIndex(multiplier, multiplicand - 1);
}
  
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

function multiplicationTestCases(input1, input2, expected) {
  const actualOutput = findIndex(input1, input2);
  const getMark = indcator(actualOutput, expected);
  const completeMessage = message(input1, input2, actualOutput, expected);
  console.log(getMark + completeMessage);
}

multiplicationTestCases(0, 1, 0);
multiplicationTestCases(1, 0, 0);
multiplicationTestCases(1, 1, 1);
multiplicationTestCases(6, 7, 42);
multiplicationTestCases(8, 6, 48);
multiplicationTestCases(9, 20, 180);
multiplicationTestCases(0, 0, 0);
multiplicationTestCases(2, 10, 20);
multiplicationTestCases(5, 19, 95);
multiplicationTestCases(5, 10, 50);
// multiplicationTestCases(-2, 6, -12);
// multiplicationTestCases(6, -2, -12);
// multiplicationTestCases(-90, 1, -90);

