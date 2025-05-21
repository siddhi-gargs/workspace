function getIndices(num) {
  const arr = [];
  let index = 0;
  let number = num;
  while (number !== 0) {
    if (number & 1 === 1) {
      arr.push(index);
    }  
    index++;
    number = number >> 1;
  }

  return arr;
}