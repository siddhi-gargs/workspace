// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers which are below threshold.
// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
// do not modify input parameters

function filterBelow(array, threshold) {
  const filterArray = [];
  let indexOutputArray = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index] < threshold) {
      filterArray[indexOutputArray] = array[index];
      indexOutputArray++;
    }
  }
  
  return filterArray;
}

function addQuote(string) {
  return " \"" + string + "\" ";
}

function msgForFindBelow(arr1, target, expected, actual) {
  const showInput = addQuote(arr1) + " threshold " + addQuote(target);
  const expectedMsg = "expected" + addQuote(expected);
  const actualOutputMsg = "actual Output" + addQuote(actual);

  return showInput + expectedMsg + actualOutputMsg;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  const endIndex = Math.max(array1.length, array2.length);

  for (let index = 0; index < endIndex; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function testFilterBelow(arr1, target, expected) {
  const actualOutput = filterBelow(arr1, target);
  const isSame = areEqual(actualOutput,expected);
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, msgForFindBelow(arr1, target, expected, actualOutput));
}

testFilterBelow([], 1, []);
testFilterBelow([-1, -2, -3], -1, [-2, -3]);
testFilterBelow([1, 2, 3], 2, [1]);
testFilterBelow([1, 2, 3], 1, []);
testFilterBelow([1, 2, 3], 3, [1, 2]);
testFilterBelow([6, 2, 3, 1, 4, 7], 3, [2, 1]);
testFilterBelow([6, 2, 3, 1, 4, 7], 1, []);
testFilterBelow([6, 2, 3, 1, 4, 7], 7, [6, 2, 3, 1, 4]);