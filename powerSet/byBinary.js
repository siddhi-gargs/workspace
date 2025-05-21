const charArr = [1, 2, 3, 4, 5];

function getIndices(num) {
  const arr = [];
  let index = 0;
  let number = num;
  while (number !== 0) {
    if (number & 1 === 1) {
      arr.push(index);
    }  
    index++;
    number = number >> 1;
  }

  return arr;
}

function arrayOfIndices(indexArr, arr) {
  const subSet = [];
  for (const index of indexArr) {
    subSet.push(arr[index]);
  }

  return subSet;
}

function generatePowerSet (arr) {
  const mainArr = [];
  for (let decimal = 0; decimal < Math.pow(2, arr.length); decimal++) {
    const indexs = getIndices(decimal);
    const subSet = arrayOfIndices(indexs, arr);
    mainArr.push(subSet);
    }
  
  return mainArr;
}

console.log(generatePowerSet(charArr));

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

function testGenerateSubSets(arr1, expected) {
  const actualOutput = generatePowerSet(arr1);
  const isSame = areEqual(expected, actualOutput);
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, msgForExtractingDigit(arr1, expected, actualOutput));
}

// testGenerateSubSets([1], [[], [1]]);
// testGenerateSubSets([1, 2], [[], [1], [2], [1, 2]]);
// testGenerateSubSets([1, 2, 3], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
// testGenerateSubSets(charArr, [[], ["c"], ["b"], ["b", "c"], ["a"], ["c", "a"],["b", "a"], ["b", "c"], ["a"]]);
// // testGenerateSubSets([1, 2, 3, 4, 5], [])
