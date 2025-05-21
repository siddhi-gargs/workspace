const arr1 = [23, 56, 83, 45, 1, 3];
const arr2 = [67, 76, 1, 3, 6, 9, 23, 56];

function findIntersection(arr1, arr2) {
  const unionArray = [];
  let unionIndex = 0;
  for (let indexArr1 = 0; indexArr1 < arr1.length; indexArr1++) {
    for (let indexArr2 = 0; indexArr2 < arr2.length; indexArr2++) {
      if (arr1[indexArr1] === arr2[indexArr2]) {
        unionArray[unionIndex] = arr1[indexArr1];
        unionIndex++;
      }
    }
  }
  return unionArray;
}

console.log(findIntersection(arr1, arr2));