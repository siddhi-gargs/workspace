const below20 = ["zero", "one", "two", "three", "four", "five", "six",
  "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
  "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const below100 = ["", "", "twenty", "thirty", "forty", "fifty", "sixty",
  "seventy", "eighty", "ninety"];

const higherUnits = [
  [1000000000, "billion", null], 
  [1000000, "million", null], 
  [1000, "thousand", null], 
  [100, "hundred", null],
  [10, "", below100] // Special case for numbers below 100
];

function findHighestUnitBelow(num) {
  for (const [unit, unitName, lookupTable] of higherUnits) {
    if (num >= unit) {
      return [unit, unitName, lookupTable];
    }
  }
  
  return [1, "", null]; 
}

function splitAndConvert(num, threshold, unitName, lookupTable) {
  const majorComponent = Math.floor(num / threshold);
  const remainder = num % threshold;

  const leftWords = lookupTable ? lookupTable[majorComponent] : numberToWords(majorComponent);

  console.log("lookuptable", lookupTable);
  console.log("major comPonent", majorComponent);

  console.log("leftWords", leftWords);
  // console.log("lookupTable[majorComponent]", lookupTable[majorComponent]);
  if (remainder === 0) {
    return leftWords;
  }

  const rightWords = numberToWords(remainder);
  
  return [leftWords, unitName, rightWords].join(" ");
}

function numberToWords(num) {
  if (num < 20) {
    return below20[num];
  }

  const [threshold, unitName, lookupTable] = findHighestUnitBelow(num);
  return splitAndConvert(num, threshold, unitName, lookupTable);
}

function addQuote(string) {
  return " \"" + string + "\" ";
}

function msgForExtractingDigit(number, expected, actual) {
  const showInput = "number" + addQuote(number);
  const expectedMsg = "expected" + addQuote(expected);
  const actualOutputMsg = "actual Output" + addQuote(actual);

  return showInput + expectedMsg + actualOutputMsg;
}

function testNumberToWords(number, expected) {
  const actualOutput = numberToWords(number);
  const isSame = actualOutput === expected;
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, msgForExtractingDigit(number, expected, actualOutput));
}

function testCaseLessThanThousand() {
  testNumberToWords(0, "zero");
  testNumberToWords(6, "six");
  testNumberToWords(10, "ten");
  testNumberToWords(11, "eleven");
  testNumberToWords(16, "sixteen");
  testNumberToWords(19, "nineteen");
  testNumberToWords(20, "twenty");
  testNumberToWords(40, "forty");
  testNumberToWords(50, "fifty");
  testNumberToWords(62, "sixty two");
  testNumberToWords(71, "seventy one");
  testNumberToWords(78, "seventy eight");
  testNumberToWords(90, "ninety");
  testNumberToWords(100, "one hundred");
  testNumberToWords(110, "one hundred ten");
  testNumberToWords(111, "one hundred eleven");
  testNumberToWords(112, "one hundred twelve");
  // testNumberToWords(114, "one hundred fourteen");
  // testNumberToWords(119, "one hundred nineteen");
  // testNumberToWords(121, "one hundred twenty one");
  // testNumberToWords(140, "one hundred forty");
  // testNumberToWords(219, "two hundred nineteen");
  // testNumberToWords(313, "three hundred thirteen");
  // testNumberToWords(401, "four hundred one");
  // testNumberToWords(512, "five hundred twelve");
  // testNumberToWords(611, "six hundred eleven");
  // testNumberToWords(845, "eight hundred forty five");
  // testNumberToWords(136, "one hundred thirty six");
  // testNumberToWords(147, "one hundred forty seven");
  // testNumberToWords(167, "one hundred sixty seven");
  // testNumberToWords(150, "one hundred fifty");
  // testNumberToWords(461, "four hundred sixty one");
  // testNumberToWords(572, "five hundred seventy two");
  // testNumberToWords(683, "six hundred eighty three");
  // testNumberToWords(790, "seven hundred ninety");
  // testNumberToWords(833, "eight hundred thirty three");
  // testNumberToWords(999, "nine hundred ninety nine");
  // testNumberToWords(400, "four hundred");
  // testNumberToWords(600, "six hundred");
  // testNumberToWords(770, "seven hundred seventy");
  console.log();
}

// testCaseLessThanThousand();

function testCaseThousandToBelowOneMillion() {
  // testNumberToWords(1000, "one thousand");

  // testNumberToWords(40000, "forty thousand");
  // testNumberToWords(12000, "twelve thousand");
  // testNumberToWords(12000, "twelve thousand");
  // testNumberToWords(40000, "forty thousand");
  // testNumberToWords(1233, "one thousand two hundred thirty three");
  // testNumberToWords(2343, "two thousand three hundred forty three");
  // testNumberToWords(3458, "three thousand four hundred fifty eight");
  // testNumberToWords(4890, "four thousand eight hundred ninety");
  // testNumberToWords(5116, "five thousand one hundred sixteen");
  // testNumberToWords(6825, "six thousand eight hundred twenty five");
  // testNumberToWords(16825, "sixteen thousand eight hundred twenty five");
  // testNumberToWords(60825, "sixty thousand eight hundred twenty five");
  // testNumberToWords(10825, "ten thousand eight hundred twenty five");
  // testNumberToWords(20825, "twenty thousand eight hundred twenty five");
  // testNumberToWords(89625, "eighty nine thousand six hundred twenty five");
  testNumberToWords(289625, "two hundred eighty nine thousand six hundred twenty five");
  // testNumberToWords(816825, "eight hundred sixteen thousand eight hundred twenty five");
  // testNumberToWords(960825, "nine hundred sixty thousand eight hundred twenty five");
  // testNumberToWords(110825, "one hundred ten thousand eight hundred twenty five");
  // testNumberToWords(920825, "nine hundred twenty thousand eight hundred twenty five");
  // testNumberToWords(889625, "eight hundred eighty nine thousand six hundred twenty five");
  // console.log();
}

testCaseThousandToBelowOneMillion();