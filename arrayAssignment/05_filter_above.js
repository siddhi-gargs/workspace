// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers above the threshold.
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
// do not modify input parameters

function filterAbove(array, threshold) {
  const filterArray = [];
  let indexOutputArray = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
      filterArray[indexOutputArray] = array[index];
      indexOutputArray++;
    }
  }
  
  return filterArray;
}

function addQuote(string) {
  return " \"" + string + "\" ";
}

function findAboveMsg(arr1, arr2, expected, actual) {
  const showInput = addQuote(arr1) + " threshold " + addQuote(arr2);
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

function testFilterBelow(arr1, arr2, expected) {
  const actualOutput = filterAbove(arr1, arr2);
  const isSame = areEqual(actualOutput, expected);
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, findAboveMsg(arr1, arr2, expected, actualOutput));
}

testFilterBelow([1, 2, 3, 4], 2, [3, 4]);
testFilterBelow([1, 2, 3], 2, [3]);
testFilterBelow([1, 2, 3], 4, []);
testFilterBelow([1, 2, 3], 1, [2, 3]);
testFilterBelow([1, 2, 3], 3, []);
testFilterBelow([6, 2, 3, 1, 4, 7], 3, [6, 4, 7]);
testFilterBelow([6, 2, 3, 1, 4, 7], 1, [6, 2, 3, 4, 7]);
testFilterBelow([6, 2, 3, 1, 4, 7], 7, []);