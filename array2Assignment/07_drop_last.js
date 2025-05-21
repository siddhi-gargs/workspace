// Remove last n elements from the array
// dropLast([1, 2, 3], 1) => [1, 2]
// dropLast([1, 2, 3], 4) => []
// Do not modify the original array

function dropLast(array, n) {
  const newArray = [];
  const endIndex = array.length - n - 1;
  for (let index = endIndex; index >= 0; index--) {
    newArray.unshift(array[index]);
  }

  return newArray;
}

function addQuote(string) {
  return " \"" + string + "\" ";
}

function msgDropLastElement(arr1, dropEle, expected, actual) {
  const showInput = addQuote(arr1) + "drop" + addQuote(dropEle) + "last";
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

function dropLastElement(arr1, eleDrop, expected) {
  const actualOutput = dropLast(arr1, eleDrop);
  const isSame = areEqual(actualOutput, expected);
  const getMark = isSame ? "✅" : "❌";
  const message = msgDropLastElement(arr1, eleDrop, expected, actualOutput);

  console.log(getMark, message);
}

dropLastElement([1, 2, 3, 4], 1, [1, 2, 3]);
dropLastElement([1, 2, 3, 4], 2, [1, 2]);
dropLastElement([1, 2, 3, 4], 3, [1]);
dropLastElement([1, 2, 3, 4], 6, []); 
dropLastElement([1, 2, 3, 4], 4, []);
dropLastElement([1, 2, 3, 4], 5, []);
dropLastElement([1, 2, 3, 4], 6, []);
dropLastElement([10], 0, [10]);
dropLastElement([1, 2, 3, 4, 5], 1, [1, 2, 3, 4]);