// Given an array of numbers true if numbers are in strictly descending order
// otherwise false.
// isStrictlyDescending([5, 4, 2, 1]) => true
// isStrictlyDescending([5, 4, 6, 1]) => false
// isStrictlyDescending([5, 4, 4, 1]) => false

export function isStrictlyDescending(numbers) {
  for (let index = 1; index < numbers.length; index++) {
    const isPreviousNumberGreater = numbers[index - 1] > numbers[index];
    if (!isPreviousNumberGreater) {
      return false;
    }
  }

  return true;
}

function addQuote(string) {
  return ' "' + string + '" ';
}

function msgForIsInDescendingOrder(array, expected, actual) {
  const showInput = "Is In descending Order" + addQuote(array);
  const expectedMsg = "expected" + addQuote(expected);
  const actualOutputMsg = "actual Output" + addQuote(actual);

  return showInput + expectedMsg + actualOutputMsg;
}

function testExtractDigit(array, expected) {
  const actualOutput = isStrictlyDescending(array);
  const isSame = actualOutput === expected;
  const getMark = isSame ? "✅" : "❌";
  const message = msgForIsInDescendingOrder(array, expected, actualOutput);

  console.log(getMark, message);
}
const testAll = function () {
  testExtractDigit([2, 1], true);
  testExtractDigit([2, 2], false);
  testExtractDigit([1], true);
  testExtractDigit([3, 2, 1], true);
  testExtractDigit([3, 3, 1], false);
  testExtractDigit([4, 3, 2, 1], true);
  testExtractDigit([4, 4, 3, 2, 1], false);
  testExtractDigit([5, 4, 3, 2, 1], true);
  testExtractDigit([5, 4, 3, 2, 1, 1], false);
  testExtractDigit([5, 4, 3, 2, 1, 0], true);
};

// testAll();
