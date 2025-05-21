function toFindIsPrime(number, factor) {
  if ((factor * factor > number) || number === 2) {
    return true;
  }

  if (number % factor === 0) {
    return false;
  }

  return toFindIsPrime(number, factor + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate <= 1) {
    return false;
  }

  return toFindIsPrime(primeCandidate, 2);
}

function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
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
  const actualOutput = isPrime(input1);
  const getMark = indcator(actualOutput, expected);
  const completeMessage = message(input1, actualOutput, expected);

  console.log(getMark + completeMessage);
}

primeAboveTestCase(0, false);
primeAboveTestCase(97, true);
primeAboveTestCase(1, false);
primeAboveTestCase(2, true);
primeAboveTestCase(3, true);
primeAboveTestCase(8, false);
primeAboveTestCase(41, true);
primeAboveTestCase(42, false);
primeAboveTestCase(17, true);
primeAboveTestCase(19, true);
primeAboveTestCase(101, true);
