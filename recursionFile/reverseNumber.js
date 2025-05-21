function numberOfDigit(number) {

  let noOfDigit = 0;
  let goIntoLoop = true;
  while (goIntoLoop) {

    number = (number - (number % 10)) / 10;
    noOfDigit++;
    
    if (number <= 0) {
      goIntoLoop = false;
    }

  }
  return noOfDigit;
}

function reverseNumber(n) { 
  if (n < 10) {
    return n;
  }
  const remainder = n % 10;
  let number = (n - remainder) / 10;
  const noOfDigit = numberOfDigit(number)
  return remainder * (10 ** noOfDigit) + reverseNumber(number);
}

function testCaseReverseNumber(input, expected) {
  const actualOutput = reverseNumber(input);
  const status = actualOutput === expected ? "✅" : "❌";
  console.log(status + " input '" + input + "' expected '" + expected);
}

testCaseReverseNumber(2346, 6432);
testCaseReverseNumber(8638, 8368);
testCaseReverseNumber(4566, 6654);
testCaseReverseNumber(4672, 2764);
testCaseReverseNumber(23469, 96432);
testCaseReverseNumber(53758, 85735);