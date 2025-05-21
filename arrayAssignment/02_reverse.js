// Given an array return reverse of array.
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
// do not modify input parameters

function reverse(array) {
  const reverseArray = [];
  let indexReverseArray = 0;
  
  for (let index = array.length - 1; index >= 0; index--) {
    reverseArray[indexReverseArray] = array[index];
    indexReverseArray++;
  }

  return reverseArray;
}

// ----------- testCase check format ---------------

function addQuote(string) {
  return " \"" + string + "\" ";
}

function reverseArrayMsg(arr1, expected, actual) {
  const showInput = "arr1" + addQuote(arr1);
  const expectedMsg = "expected" + addQuote(expected);
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

function testCaseReverseAnArray(arr1, expected) {
  const actualOutput = reverse(arr1);
  const isSame = areEqual(actualOutput, expected);
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, reverseArrayMsg(arr1, expected, actualOutput));
}

testCaseReverseAnArray([], []);
testCaseReverseAnArray([1], [1]);
testCaseReverseAnArray([1, 2], [2, 1]);
testCaseReverseAnArray([1, 2, 3], [3, 2, 1]);
testCaseReverseAnArray([1, 2, 3, 4], [4, 3, 2, 1]);
testCaseReverseAnArray([], []);