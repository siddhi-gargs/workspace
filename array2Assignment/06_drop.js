// Remove first n elements from the array
// drop([1, 2, 3], 1) => [2, 3]
// drop([1, 2, 3], 4) => []
// Do not modify the original array

function drop(arrary, n) {
  const newArray = [];
  for (let index = Math.max(n, 0); index < arrary.length; index++) {
    newArray.push(arrary[index]);
  }

  return newArray;
}

function addQuote(string) {
  return " \"" + string + "\" ";
}

function msgConcatenate(arr1, dropEle, expected, actual) {
  const showInput = addQuote(arr1) + "remove start " + addQuote(dropEle);
  const expectedMsg = "index  expected" + addQuote(expected);
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

function testDropElement(arr1, element, expected) {
  const actualOutput = drop(arr1, element);
  const isSame = areEqual(actualOutput, expected);
  const getMark = isSame ? "✅" : "❌";
  const message = msgConcatenate(arr1, element, expected, actualOutput);

  console.log(getMark, message);
}

testDropElement([1, 3, 6, 2], 1, [3, 6, 2]);
testDropElement([1, 3, 6, 2], 2, [6, 2]);
testDropElement([1, 3, 6, 2], 3, [2]);
testDropElement([1, 3, 6, 2], -3, [1, 3, 6, 2]); //Not working
testDropElement([1, 3, 6, 2], 4, []);
testDropElement([1, 3, 6, 2], 5, []);
testDropElement([1, 3, 6, 2], 6, []);
testDropElement([1, 3, 6, 2, 5, 6], 6, []);
testDropElement([1, 3, 6, 2, 5, 6], 2, [6, 2, 5, 6]);