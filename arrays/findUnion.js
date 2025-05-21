const arr1 = [1, 2, 3, 5, 6, 7];
const arr2 = [3, 5, 8, 6, 10];

function isPresent(element, array1) {
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] === element) {
      return true;
    }
  }

  return false;
}

function copyElements(array) {
  const emptyArray = [];
  for (let index = 0; index < array.length; index++) {
    emptyArray.push(array[index]);
  }

  return emptyArray;
}

function findUnion(arr1, arr2) {
  const elements = copyElements(arr1);
  for (let index = 0; index < arr2.length; index++) {
    if (!isPresent(arr2[index], arr1)) {
      elements.push(arr2[index]);
    }
  }

  return elements;
}

console.log(findUnion(arr1, arr2));