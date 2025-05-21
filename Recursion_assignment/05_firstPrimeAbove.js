function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function toFindIsPrime(number, factor) {
  if (number <= 1) {
    return false;
  }
  
  if ((factor * factor > number) || number === 2) {
    return true;
  }
  
  if (number % factor === 0) {
    return false;
  }

  return toFindIsPrime(number, factor + 1);
}

function isPrime(primeCandidate) {
  return toFindIsPrime(primeCandidate, 2);
}

function firstPrimeAbove(number) {
  const nextNumber = number + 1;
  if (isPrime(nextNumber)) {
    return nextNumber;
  }

  return firstPrimeAbove(nextNumber);
}

function message(input1, actualOutput, expected) {
  const input1Message = "input1" + addQuote(input1);
  const actualOutputMsg = "actual" + addQuote(actualOutput);
  const expectedOutputMsg = "expected" + addQuote(expected);

  return input1Message + actualOutputMsg + expectedOutputMsg;
}

function indcator(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function primeAboveTestCase(input1, expected) {
  const actualOutput = firstPrimeAbove(input1);
  const getMark = indcator(actualOutput, expected);
  const completeMessage = message(input1, actualOutput, expected);

  console.log(getMark + completeMessage);
}

primeAboveTestCase(0, 2);
primeAboveTestCase(1, 2);
primeAboveTestCase(2, 3);
primeAboveTestCase(3, 5);
primeAboveTestCase(8, 11);
primeAboveTestCase(41, 43);
primeAboveTestCase(101, 103);
primeAboveTestCase(17, 19);
primeAboveTestCase(19, 23);
primeAboveTestCase(90, 97);