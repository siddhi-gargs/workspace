function takeOneElement(arr) {
  const takeOneElement = [[]];
  for (let iterate = 0; iterate < arr.length; iterate++) {
   
    takeOneElement.push(arr[iterate]);
  }
  return takeOneElement;
}

function subsetsGivenNoOfElements(subSetOf, arr) {
  const setOfGivenNoOfelements = [];
  const mainLoopRunUntill = arr.length - subSetOf + 1;
  for (let iterate = 0; iterate < mainLoopRunUntill; iterate++) {
    
    let increaseRow = iterate + 1;
    while (increaseRow <= mainLoopRunUntill) {
      const empty = [];
      empty.push(arr[iterate]);
      empty.push(arr[increaseRow]);

      const times = subSetOf - 2;
      for (let remain = increaseRow + 1; remain <= increaseRow + times; remain++) {
        empty.push(arr[remain]);
      }
    
      setOfGivenNoOfelements.push(empty);
      increaseRow++;
    }
  }
  return setOfGivenNoOfelements;     
}

function generatePowerSet(arr) {
  const outputArr = [];
  outputArr.push(outputArr.concat(takeOneElement(arr)));
  for (let j = 2; j <= arr.length; j++) {
    outputArr.push(outputArr.concat(subsetsGivenNoOfElements(j, arr)));
  }
  return outputArr;
}

console.log(generatePowerSet([1, 2, 3, 4]));
