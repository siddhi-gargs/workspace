function addition(number1, number2){
  if (number2 < 0) {
    return addition(number2, number1);
  }

  if (number2 === 0){
    return number1;
  }

  // if (number1 < 0) {
  //   return addition(number1 - 1, number2 + 1);
  // }

  return addition(number1 + 1, number2 - 1);
}

console.log(addition(3, 5));

function additionTestCase(num1, num2, expected) {
  const actualOutput = addition(num1, num2);
  const status = actualOutput === expected ? "✅" : "❌";
  console.log(status + " num1 " + num1 + " num2 " + num2 + " actual " + actualOutput);
}


additionTestCase(-3, 67, 64);
additionTestCase(10, -11, -1);
additionTestCase(17, -12, 5);
additionTestCase(20, -5, 15);
additionTestCase(-7, 15, 8);
additionTestCase(-12, 10, -2);
additionTestCase(23, 5, 28);
additionTestCase(56, 5, 61);