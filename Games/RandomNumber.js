function isBothIndexDifferent(generate, startIndex, endIndex, length) {
  if (generate[startIndex] === generate[endIndex]) {
    return false;
  }

  if (endIndex === length) {
    return true;
  }
  return isBothIndexDifferent(generate, startIndex, endIndex + 1, length);
}

function isEachDigitDifferent(generated, startIndex, nextIndex, length, number) {
  
  if (nextIndex > length) {
    return generated;
  }
  const a = isBothIndexDifferent(generated, startIndex, nextIndex, length);
  if (a) {
    return isEachDigitDifferent(generated, startIndex + 1, nextIndex + 1, length, number);
  }
  return differentDigitNumber(number);
}

function generateNumber(number) {
  const currentNumber = Math.floor(Math.random() * 10);
  if (number === 1) {
    return currentNumber;
  }
  return currentNumber + "" + generateNumber(number - 1);
}

function differentDigitNumber(number){
  const generate = generateNumber(number);
  const length = generate.length - 1; 
  console.log(generate);
  return isEachDigitDifferent(generate, 0, 1, length, number)
}

function userInput() {
  const a = prompt("How many digit Number you want");
  const isValid = a > 0 && a < 10;
  if (isValid) {
    return differentDigitNumber(a);
  }

  console.log();
  console.log("Enter Valid Input :");
  return userInput();
}

console.log("----- You have to enter from 2 to 9 and I will generate a number of 9 digit in which Every digit would be different------");
console.log();
console.log(userInput());