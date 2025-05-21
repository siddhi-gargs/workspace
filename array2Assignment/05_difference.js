// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]

function isPresent(element, array2) {
  for (let index = 0; index < array2.length; index++) {
    if (array2[index] === element) {
      return true;
    }
  }

  return false;
}

export function difference(array1, array2) {
  const elementsNotPresent = [];
  for (let index = 0; index < array1.length; index++) {
    if (!isPresent(array1[index], array2)) {
      elementsNotPresent.push(array1[index]);
    }
  }

  return elementsNotPresent;
}

function addQuote(string) {
  return ' "' + string + '" ';
}

function msgDifference(arr1, arr2, expected, actual) {
  const showInput = addQuote(arr1) + "missing element in" + addQuote(arr2);
  const expectedMsg = "expected" + addQuote(expected);
  const actualOutputMsg = "actual Output" + addQuote(actual);

  return showInput + expectedMsg + actualOutputMsg;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function testDifference(arr1, arr2, expected) {
  const actualOutput = difference(arr1, arr2);
  const isSame = areEqual(actualOutput, expected);
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, msgDifference(arr1, arr2, expected, actualOutput));
}

testDifference([1, 2], [1], [2]);
testDifference([1, 2, 3], [1, 2, 3], []);
testDifference([1, 2, 9], [1, 3, 5], [2, 9]);
testDifference([1, 2, 3], [1, 3], [2]);
testDifference([1, 4], [1], [4]);
testDifference([1, 2, 7], [1], [2, 7]);
testDifference([1, 6], [4, 8], [1, 6]);
testDifference([1, 3, 5], [4, 8], [1, 3, 5]);
testDifference([1, 0], [4, 8], [1, 0]);
testDifference([1, 0, 9], [1, 0, 8], [9]);
testDifference([1, 0, 9], [1, 0, 9], []);
