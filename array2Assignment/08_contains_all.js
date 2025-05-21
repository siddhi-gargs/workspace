// Return true if all elements are present in the array regardless of their order.
// Otherwise, return false.
// containsAll([1, 2, 3], [2, 1]) => true
// containsAll([1, 2, 3], [2, 1, 4]) => false

function isPresent(element, array1) {
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] === element) {
      return true;
    }
  }

  return false;
}

function containsAll(array, elements) {
  for (let index = 0; index < elements.length; index++) {
    if (!isPresent(elements[index], array)) {
      return false;
    }
  }

  return true;
}

function addQuote(string) {
  return " \"" + string + "\" ";
}

function msgContainAllElements(arr1, elements, expected, actual) {
  const showInput = addQuote(arr1) + "all Element" + addQuote(elements);
  const expectedMsg = "expected" + addQuote(expected);
  const actualOutputMsg = "actual Output" + addQuote(actual);

  return showInput + expectedMsg + actualOutputMsg;
}

function testIsAllPresentOrNot(arr1, arr2, expected) {
  const actualOutput = containsAll(arr1, arr2);
  const isSame = actualOutput === expected;
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, msgContainAllElements(arr1, arr2, expected, actualOutput));
}

testIsAllPresentOrNot([1, 2, 3, 4], [3, 1], true);
testIsAllPresentOrNot([1, 2, 3, 4], [3, 1, 2], true);
testIsAllPresentOrNot([1, 2, 3, 4], [1], true);
testIsAllPresentOrNot([1, 2, 3, 4], [3, 1, 4], true);
testIsAllPresentOrNot([1, 2, 3, 4], [3, 1, 4 , 7], false);
testIsAllPresentOrNot([1, 2, 3, 4], [], true);
testIsAllPresentOrNot([], [1, 4, 7], false);
testIsAllPresentOrNot([], [], true);