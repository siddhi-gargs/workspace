function toFindPrime(a, b) {

  if (a <= 1) return false;
  
  if (b * b > a || a === 2) {
    return true;
  }
  
  if (a % b === 0) {
    return false;
  }

  return toFindPrime(a, b + 1);
}

function isPrime(number) {

  return toFindPrime(number, 2)
}

function reverseTestCase(number, expected) {
  const actualOutput = isPrime(number);
  const status = actualOutput === expected ? "✅" : "❌";
  console.log(status + " num " + number + " expected " + expected + " actual " + actualOutput);
}

reverseTestCase(23, true);
reverseTestCase(2, true);
reverseTestCase(3, true);
reverseTestCase(0, false);
reverseTestCase(15, false);
reverseTestCase(10, false);
reverseTestCase(23, true);