function findFibonacciTerm(firstTerm, nextTerm, nth) {
  if (nth === 1) {
    return firstTerm;
  }
  
  return findFibonacciTerm(nextTerm, firstTerm + nextTerm, nth - 1);
}

function nthFibonacciTerm(n) {
  return findFibonacciTerm(0, 1, n);
}

function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function message(input1, actualOutput, expected) {
  const input1Message = "number" + addQuote(input1);
  const actualOutputMsg = "actual" + addQuote(actualOutput);
  const expectedOutputMsg = "expected" + addQuote(expected);

  return input1Message + actualOutputMsg + expectedOutputMsg;
}

function indcator(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function testCaseForFindingNthTerm(input1, expected) {
  const actualOutput = nthFibonacciTerm(input1);
  const getMark = indcator(actualOutput, expected);
  const completeMessage = message(input1, actualOutput, expected);
  console.log(getMark + completeMessage);
}

testCaseForFindingNthTerm(2, 1);
testCaseForFindingNthTerm(6, 5);
testCaseForFindingNthTerm(10, 34);
testCaseForFindingNthTerm(4, 2);
testCaseForFindingNthTerm(9, 21);
testCaseForFindingNthTerm(8, 13);
testCaseForFindingNthTerm(1, 0);
testCaseForFindingNthTerm(60, 956722026041);
