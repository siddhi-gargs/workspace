function generatePowerSet(arr) {
  const outputArr = [[]];
  for (let i = 0; i < arr.length; i++) {
    const length = outputArr.length;

    for (let j = 0; j < length; j++) {
      outputArr.push(outputArr[j].concat([arr[i]]))
    }

  }
  return outputArr;
}

function addQuote(string) {
  return " \"" + string + "\" ";
}

function msgForExtractingDigit(inputNumber, expected, actual) {
  const showInput = "Input" + addQuote(inputNumber);
  const expectedMsg = "expected" + addQuote(expected);
  const actualOutputMsg = "actual Output" + addQuote(actual);

  return showInput + expectedMsg + actualOutputMsg;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[ index ] !== array2[ index ]) {
      return false;
    }
  }

  return true;
}

function testGenerateSets(arr1, expected) {
  const actualOutput = generatePowerSet(arr1);
  const isSame = areEqual(expected, actualOutput);
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, msgForExtractingDigit(arr1, expected, actualOutput));
}

testGenerateSets([1], [[], [1]]);
testGenerateSets([1, 2], [[], [1], [2], [1, 2]]);
testGenerateSets([1, 2, 3], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);