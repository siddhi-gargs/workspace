const array = [1, 2, 3, 4, 5, 6, 7, 8];

function deleteIndex(array, removeIndex) {
  for (let index = removeIndex + 1; index < array.length; index++) {
    array[index - 1] = array[index];
  }

  return array;
}
// return array by removing particular Index.
console.log(deleteIndex(array, 1))