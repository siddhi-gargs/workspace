function addQuote(text) {
  return "\" " + text + " \"";
}

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function findHcf(a, b, c, result) {
  let resultCopy = result;
  if (b + 1 === c) {
    return resultCopy;
  }

  if (isDivisible(a, c) && isDivisible(b, c)) {
    resultCopy = c;
  }
  
  return findHcf(a, b, c + 1, resultCopy);
}

function hcf(a, b) {
  return findHcf(a, b, 0, 0);
}

function hcfTestcase(num1, num2, expected) {
  const actualOutput = hcf(num1, num2);
  const status = actualOutput === expected ? "✅" : "❌";
  const message = "num1" + addQuote(num1) + "num2" + addQuote(num2);
  console.log(status + message + " actual " + addQuote(actualOutput) + 'expected' + addQuote(expected));
}

hcfTestcase(67, 56, 1);
hcfTestcase(90, 10, 10);
hcfTestcase(81, 27, 27);
hcfTestcase(56, 45, 1);
hcfTestcase(0, 36, 36);
hcfTestcase(66, 24, 6);

console.log(hcf(0, 10));