// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([], []) => true
// do not modify input parameters

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

// ---------------testCases check Format-------------

function addQuote(string) {
  return " \"" + string + "\" ";
}

function selectOddMsg(arr1, arr2, expected, actual) {
  const showInput = addQuote(arr1) + "is Equal to" + addQuote(arr2);
  const expectedMsg = "expected" + addQuote(expected);
  const actualOutputMsg = "actual Output" + addQuote(actual);

  return showInput + expectedMsg + actualOutputMsg;
}

function testAreEqual(arr1, arr2, expected) {
  const actualOutput = areEqual(arr1, arr2);
  const isSame = actualOutput === expected;
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, selectOddMsg(arr1, arr2, expected, actualOutput));
}

testAreEqual([], [], true);
testAreEqual([,], [], false);
testAreEqual([1], [1], true);
testAreEqual([1, 2], [1], false);
testAreEqual([1, 2], [1, 2], true);
testAreEqual([1, 2], [2, 1], false);
testAreEqual([1, 2, 3], [1, 2, 3], true);
testAreEqual([1, 2, 3], [1], false);
testAreEqual([1, 2, 3], [1, 2], false);
testAreEqual([1, 2, 3], [1, 2, 3], true);
testAreEqual([1, 2, 3], [1, 3, 2], false);
testAreEqual([1, 2, 3], [1, 2, 3, 4], false);