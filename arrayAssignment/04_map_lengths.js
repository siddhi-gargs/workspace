// Given an array containing words, return a new array containing length of
// the words.
// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
// do not modify input parameters

function mapLengths(words) {
  const lengthArray = [];

  for (let index = 0; index < words.length; index++) {
    lengthArray[index] = words[index].length;
  }

  return lengthArray;
}

function addQuote(string) {
  return " \"" + string + "\" ";
}

function mapLengthMsg(inputArray, expected, actual) {
  const showInput = "input Array" + addQuote(inputArray);
  const expectedMsg = "expected array" + addQuote(expected);
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

function testMapLength(inputArray, expected) {
  const actualOutput = mapLengths(inputArray);
  const isSame = areEqual(actualOutput, expected);
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, mapLengthMsg(inputArray, expected, actualOutput));
}

testMapLength(["", "", ""], [0, 0, 0]);
testMapLength(["a", "b"], [1, 1]);
testMapLength(["ab", "b"], [2, 1]);
testMapLength(["ab", "bc"], [2, 2]);
testMapLength(["ab", "b", "c"], [2, 1, 1]);
testMapLength(["ab", "", "c"], [2, 0, 1]);
testMapLength(["ab", "b", "c"], [2, 1, 1]);
testMapLength(["ab", "bcd", "c"], [2, 3, 1]);
testMapLength(["abcd", "b", "c"], [4, 1, 1]);
testMapLength(["1", "", ""], [1, 0, 0]);
testMapLength(["ab", "b", "c"], [2, 1, 1]);