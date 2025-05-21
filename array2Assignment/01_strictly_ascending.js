// Given an array of numbers true if numbers are in strictly ascending order
// otherwise false.
// isStrictlyAscending([1, 3, 4, 5, 16]) => true
// isStrictlyAscending([1, 3, 2, 4]) => false
// isStrictlyAscending([1, 3, 3, 4]) => false

export function isStrictlyAscending(numbers) {
  for (let index = 1; index < numbers.length; index++) {
    const isNextIndexGreater = numbers[index - 1] < numbers[index];
    if (!isNextIndexGreater) {
      return false;
    }
  }

  return true;
}

function addQuote(string) {
  return ' "' + string + '" ';
}

function msgIsInAscendingOrder(arr1, expected, actual) {
  const showInput = "Is In Ascending Order" + addQuote(arr1);
  const expectedMsg = "expected" + addQuote(expected);
  const actualOutputMsg = "actual Output" + addQuote(actual);

  return showInput + expectedMsg + actualOutputMsg;
}

function testIsAscending(arr1, expected) {
  const actualOutput = isStrictlyAscending(arr1);
  const isSame = actualOutput === expected;
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, msgIsInAscendingOrder(arr1, expected, actualOutput));
}

const testAll = function () {
  testIsAscending([1], true);
  testIsAscending([], true);
  testIsAscending([1, 2], true);
  testIsAscending([1, 2, 2], false);
  testIsAscending([1, 2, 3, 3, 5, 6], false);
  testIsAscending([1, 2, 3], true);
  testIsAscending([1, 2, 3, 4, 5, 6], true);
  testIsAscending([11, 2, 3, 4, 5], false);
  testIsAscending([1, 2, 3, 4, 5, 5], false);
};

// testAll();
