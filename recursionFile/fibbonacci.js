function findFibonacciTerm(firstTerm, nextTerm, nth) {
  if (nth === 1) {
    return firstTerm;
  }
  
  return findFibonacciTerm(nextTerm, firstTerm + nextTerm, nth - 1);
}

function nthTerm(number) {
  return findFibonacciTerm(0, 1, number);
}

function testCaseForFindingNthTerm(number, expected) {
  const actualOutput = nthTerm(number);
  const status = actualOutput === expected ? "✅" : "❌";
  console.log(status + " num " + number + " expected " + expected + " actual " + actualOutput);
}

testCaseForFindingNthTerm(2, 1);
testCaseForFindingNthTerm(6, 5);
testCaseForFindingNthTerm(10, 34);
testCaseForFindingNthTerm(4, 2);
testCaseForFindingNthTerm(9, 21);
testCaseForFindingNthTerm(8, 13);
testCaseForFindingNthTerm(1, 0);
testCaseForFindingNthTerm(60, 956722026041);
