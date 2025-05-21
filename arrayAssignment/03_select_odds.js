// Given an array of numbers return a new array containing only odd elements of the
// original array.
// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
// Do not modify the input array.

function isOdd(number) {
  return number % 2 === 1;
}

function selectOdds(numbers) {
  const oddNumArray = [];
  let indexOutputArray = 0;

  for (let index = 0; index < numbers.length; index++) {
    if (isOdd(numbers[index])) {
      oddNumArray[indexOutputArray] = numbers[index];
      indexOutputArray++;
    }
  }

  return oddNumArray;
}

// ----------- testCase check format ---------------

function addQuote(string) {
  return " \"" + string + "\" ";
}

function selectOddMsg(inputArray, expected, actual) {
  const showInput = "input Array" + addQuote(inputArray);
  const expectedMsg = "expected odd Array" + addQuote(expected);
  const actualOutputMsg = "actual Output" + addQuote(actual);

  return showInput + expectedMsg + actualOutputMsg;
}

function areEqual(array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  
  return true;
}

function testFindOdd(inputArray, expected) {
  const actualOutput = selectOdds(inputArray);
  const isSame = areEqual(actualOutput, expected);
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, selectOddMsg(inputArray, expected, actualOutput));
}

testFindOdd([1,], [1]);
testFindOdd([], []);
testFindOdd([0, 1], [1]);
testFindOdd([1, 2], [1,]);
testFindOdd([1, 2, 3], [1, 3]);
testFindOdd([1, 1], [1, 1]);
testFindOdd([1, 3], [1, 3]);
testFindOdd([1, 2, 3, 4], [1, 3]);
testFindOdd([1, 2, 3, 4, 5], [1, 3, 5]);
testFindOdd([5, 4, 3, 2, 1], [5, 3, 1]);