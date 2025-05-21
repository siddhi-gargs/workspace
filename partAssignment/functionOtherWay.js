const nearestEven = function(num) {
  return (num & 1) === 0 ? num : num - 1; 
}

const addEven = function(nearestEven, number1, number2) {
  return nearestEven(number1) + nearestEven(number2);
}

const add = function(num1, num2) {
  return addEven(nearestEven, num1, num2);
}

const testAddEven = function(operand1, operand2, expected, FAILED) {
  const actual = add(operand1, operand2);
  
  if (actual !== expected) {
    FAILED.push([operand1, operand2, actual, expected]);
  }
  
}

const testCases = function() {
  const FAILED = [];
  testAddEven(7, 9, 14, FAILED);
  testAddEven(7, 19, 14, FAILED);
  testAddEven(7, 19, 4, FAILED);
  testAddEven(17, 19, 34, FAILED);
  testAddEven(2, 3, 4, FAILED);
  testAddEven(1, 3, 2, FAILED);
  
  console.table(FAILED);
}

testCases();