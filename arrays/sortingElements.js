const sortNumber = [5, 7, 2];

function sortElementsOfArray(newArr) {
  
  for (let i = 0; i < newArr.length; i++) {
    
    for (let j = i + 1; j < newArr.length; j++) {
      newArr[i] = Math.min(newArr[i], newArr[j]);
      console.log("newArr[i]", newArr[i]);
      console.log("i", i, "j", j);
    }
  }
  return newArr;
}

console.log(sortElementsOfArray(sortNumber));
