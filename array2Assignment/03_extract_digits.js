// Give an number extract its digit into array
// Number can positive, negative, floating point.
// extractDigits(123) => [1, 2, 3]
// extractDigits(-123) => [1, 2, 3]
// extractDigits(12.3) => [1, 2, 3]

function initialisedArray(number) {
  return number === 0 ? [0] : [];
}

function multiplyBy10(floating) {
  let convertIntoNumber = floating;
  while (convertIntoNumber !== Math.floor(convertIntoNumber)) {
    convertIntoNumber *= 10;
  }

  return convertIntoNumber;
}

export function extractDigits(number) {
  let absoluteNumber = Math.abs(number);
  if (absoluteNumber !== Math.floor(absoluteNumber)) {
    absoluteNumber = multiplyBy10(absoluteNumber);
  }

  const arrayofDigit = initialisedArray(number);
  while (absoluteNumber > 0) {
    arrayofDigit.unshift(absoluteNumber % 10);
    absoluteNumber = Math.floor(absoluteNumber / 10);
  }

  return arrayofDigit;
}

function addQuote(string) {
  return ' "' + string + '" ';
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
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function testExtractDigit(arr1, expected) {
  const actualOutput = extractDigits(arr1);
  const isSame = areEqual(expected, actualOutput);
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, msgForExtractingDigit(arr1, expected, actualOutput));
}

const testAll = function () {
  testExtractDigit(0, [0]);
  testExtractDigit(-1, [1]);
  testExtractDigit(2, [2]);
  testExtractDigit(22, [2, 2]);
  testExtractDigit(-22, [2, 2]);
  testExtractDigit(-2, [2]);
  testExtractDigit(234, [2, 3, 4]);
  testExtractDigit(-123, [1, 2, 3]);
  testExtractDigit(-10, [1, 0]);
  testExtractDigit(19.4, [1, 9, 4]);
  testExtractDigit(19.43, [1, 9, 4, 3]);
  testExtractDigit(19.436, [1, 9, 4, 3, 6]);
};

// testAll();
