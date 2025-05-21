function subsetsGivenNoOfElements(three, arr) {
  const setOfGivenNoOfelements = [];
  const mainLoopRunUntill = arr.length - three + 1;
  for (let iterate = 0; iterate < mainLoopRunUntill; iterate++) {
    
    let increaseRow = iterate + 1;
    while (increaseRow <= mainLoopRunUntill) {
      const subSets = [];
      subSets.push(arr[iterate]);
      subSets.push(arr[increaseRow]);
      const times = three - 2;
      for (let remain = increaseRow + 1; remain <= increaseRow + times; remain++) {
        subSets.push(arr[remain]);
      }
    
      setOfGivenNoOfelements.push(subSets);
      increaseRow++;
    }

  }
  
  return setOfGivenNoOfelements;     
}

console.log(subsetsGivenNoOfElements(3, [0, 1, 2, 3, 6, 8]));

//0 1 2
//0 2 3
//1 2 3