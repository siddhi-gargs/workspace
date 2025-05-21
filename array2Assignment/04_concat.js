// concat the given arrays.
// concat([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 6]

function pushInArray(array1, concatenatedArray) {
  for (let indexArr1 = 0; indexArr1 < array1.length; indexArr1++) {
    concatenatedArray.push(array1[indexArr1]);
  }

  return concatenatedArray;
}

export function concat(array1, array2) {
  const emptyArray = [];
  const firstArray = pushInArray(array1, emptyArray);
  const concatenatedArray = pushInArray(array2, firstArray);

  return concatenatedArray;
}

function addQuote(string) {
  return ' "' + string + '" ';
}

function msgConcatenate(array1, array2, expected, actual) {
  const showInput = addQuote(array1) + "concatenate to" + addQuote(array2);
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

function testConcateArray(arr1, arr2, expected) {
  const actualOutput = concat(arr1, arr2);
  const isSame = areEqual(actualOutput, expected);
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, msgConcatenate(arr1, arr2, expected, actualOutput));
}

const testAll = function () {
  testConcateArray([0], [0], [0, 0]);
  testConcateArray([1], [2], [1, 2]);
  testConcateArray([1, 2], [2], [1, 2, 2]);
  testConcateArray([1, 1], [2], [1, 1, 2]);
  testConcateArray([0, 1], [2], [0, 1, 2]);
  testConcateArray([], [], []);
  testConcateArray([1, 1, 1], [2, 2, 2], [1, 1, 1, 2, 2, 2]);
  testConcateArray([0, 0], [0, 0], [0, 0, 0, 0]);
  testConcateArray([1, 2], [1, 2], [1, 2, 1, 2]);
};

// testAll();
