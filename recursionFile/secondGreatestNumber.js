function secondGreatestNumber(first, second, third) { // 30, 26, 28 / 28, 26,30
  if (first > second) {
    secondGreatestNumber(second, third, first);
  }
  if (second > third) {
    return second;  
  }
  return third;
}

console.log(secondGreatestNumber(67, 35, 78)); //
// 67 > 35
35, 78, 67
78 > 67