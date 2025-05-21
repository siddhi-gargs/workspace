const arr = [[[1, 2, 3], [3, 4]],[[5, 6], [7, 8]]];
const same = [[[1, 2, 3], [3, 4]],[[5, 6], [7, 8]]];


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

function isMultiDimensionalArrayEqual(arr, same) {
  if (arr.length !== same.length) {
    return false;
  }

  for (let arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
    for (let subIndex = 0; subIndex < arr[arrayIndex].length; subIndex++) {
      if (!areEqual(arr[arrayIndex][subIndex], same[arrayIndex][subIndex])) {
        return false;
      }
    }
  }

  return true;
} 

console.log(isMultiDimensionalArrayEqual(arr, same));
console.log(isMultiDimensionalArrayEqual([], []));
console.log(isMultiDimensionalArrayEqual([1, 2, 3], [1, 2, 3]));
console.log(isMultiDimensionalArrayEqual([8, 5, 10], [8, 5, 10]));
console.log(isMultiDimensionalArrayEqual([1], [1]));