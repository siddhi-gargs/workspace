// Given an array of numbers and a element, return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters
function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return index;
    }
  }
  
  return -1;
}

function addQuote(string) {
  return " \"" + string + "\" ";
}

function findIndexMsg(arr1, arr2, expected, actual) {
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

function testFindLastIndex(arr1, arr2, expected) {
  const actualOutput = findIndex(arr1, arr2);
  const isSame = areEqual(actualOutput,expected);
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, findIndexMsg(arr1, arr2, expected, actualOutput));
}

testFindLastIndex(["a", "b"], "a", 0);
testFindLastIndex(["a", "b"], "b", 1);
testFindLastIndex(["a", "b"], "c", -1);
testFindLastIndex(["a", "b"], "a", 0);
testFindLastIndex(["ab", "b"], "ab", 0);
testFindLastIndex(["a", "bc"], "bc", 1);
testFindLastIndex(["a", "bc"], "c", -1);