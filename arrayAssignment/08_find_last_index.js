// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters

function findLastIndex(array, element) {
  for (let index = array.length - 1; index >= 0; index--) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

function addQuote(string) {
  return " \"" + string + "\" ";
}

function selectOddMsg(arr1, string, expected, actual) {
  const showInput = addQuote(arr1) + " find " + addQuote(string);
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

function testFindLastIndex(arr1, find, expected) {
  const actualOutput = findLastIndex(arr1, find);
  const isSame = areEqual(actualOutput,expected);
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, selectOddMsg(arr1, find, expected, actualOutput));
}

testFindLastIndex(["a", "b" , "a"], "a", 2);
testFindLastIndex(["a", "b"], "b", 1);
testFindLastIndex(["a", "b"], "c", -1);
testFindLastIndex(["a", "b"], "a", 0);
testFindLastIndex(["ab", "b"], "ab", 0);
testFindLastIndex(["a", "bc"], "bc", 1);
testFindLastIndex(["a", "bc"], "c", -1);
testFindLastIndex(["a", "bc", "a"], "a", 2);
testFindLastIndex(["a", "bc", "bc"], "bc", 2);
testFindLastIndex(["a", "bc"], "c", -1);
testFindLastIndex(["a", "bc", "r", "r"], "r", 3);
testFindLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea", 4);