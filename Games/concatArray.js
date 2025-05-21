const arr1 = [2, 3, 5, 7];
const arr2 = [5, 6, 8, 9];


function concate(arr1, arr2) {
  const emptyArray = [];
  const keepBothInOne = [arr1, arr2];
  for (let i = 0; i < keepBothInOne.length; i++) {
    const elementsInCurrentIndex = keepBothInOne[i];
    for (let j = 0; j < elementsInCurrentIndex.length; j++) {
      emptyArray.push(keepBothInOne[i][j]);
    }
  }
  return emptyArray;
}
