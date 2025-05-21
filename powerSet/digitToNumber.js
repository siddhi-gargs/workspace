const SPACE = " ";
const EMPTY = "";

const unitDigit = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const tenToNineteen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const TWENTYTONINETY = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

const UNITS = [" hundred", " thousand", " million", " billion"];

function emptyOrSpace(num, tenPower) {
  return num % tenPower === 0 ? EMPTY : SPACE;
}

function convertOneTo99(number) {
  const onesDigit = number % 10;

  if (number > 9 && number < 20) {
    return tenToNineteen[onesDigit];
  }

  if (number > 19) {
    const tensDigit = Math.floor(number / 10);

    return TWENTYTONINETY[tensDigit - 2] + emptyOrSpace(number, 10) + unitDigit[onesDigit];
  }

  return unitDigit[number];
}

function lessThanThousand(number) {
  const hundredThDigit = unitDigit[Math.floor(number / 100)];
  const hundredInWords = hundredThDigit + UNITS[0] + emptyOrSpace(number, 100);
  const remainingPart = convertOneTo99(number % 100);

  return hundredInWords + remainingPart;
}

function convertOneTo999(number) {  
  if (number > 99) {
    return lessThanThousand(number);
  }

  return convertOneTo99(number);
}

function currentIntoWord(num, index, tenss) {
  const digit = Math.floor(num / tenss);
  const inWords = convertOneTo999(digit) + UNITS[index];
  const remain = emptyOrSpace(num, tenss) + naturalNumberInWord(num % tenss);

  return inWords + remain;
}

function naturalNumberInWord(num) {
  if (num < 1000) {
    return convertOneTo999(num);
  }
  
  if (num < 1000000) {
    return currentIntoWord(num, 1, 1000);
  }
  
  if (num < 1000000000) {
    return currentIntoWord(num, 2, 1000000);
  }
  
  if (num < 1000000000000) {
    return currentIntoWord(num, 3, 1000000000);
  }
}

function numberToWords(num) {  
  if (num === 0) {
    return "zero";
  }

  return naturalNumberInWord(num);
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
  testNumberToWords(114, "one hundred fourteen");
  testNumberToWords(119, "one hundred nineteen");
  testNumberToWords(121, "one hundred twenty one");
  testNumberToWords(140, "one hundred forty");
  testNumberToWords(219, "two hundred nineteen");
  testNumberToWords(313, "three hundred thirteen");
  testNumberToWords(401, "four hundred one");
  testNumberToWords(512, "five hundred twelve");
  testNumberToWords(611, "six hundred eleven");
  testNumberToWords(845, "eight hundred forty five");
  testNumberToWords(136, "one hundred thirty six");
  testNumberToWords(147, "one hundred forty seven");
  testNumberToWords(167, "one hundred sixty seven");
  testNumberToWords(150, "one hundred fifty");
  testNumberToWords(461, "four hundred sixty one");
  testNumberToWords(572, "five hundred seventy two");
  testNumberToWords(683, "six hundred eighty three");
  testNumberToWords(790, "seven hundred ninety");
  testNumberToWords(833, "eight hundred thirty three");
  testNumberToWords(999, "nine hundred ninety nine");
  testNumberToWords(400, "four hundred");
  testNumberToWords(600, "six hundred");
  testNumberToWords(770, "seven hundred seventy");
  console.log();
}

function testCaseThousandToBelowOneMillion() {
  testNumberToWords(1000, "one thousand");
  testNumberToWords(1233, "one thousand two hundred thirty three");
  testNumberToWords(2340, "two thousand three hundred forty");
  testNumberToWords(3458, "three thousand four hundred fifty eight");
  testNumberToWords(4890, "four thousand eight hundred ninety");
  testNumberToWords(5116, "five thousand one hundred sixteen");
  testNumberToWords(6825, "six thousand eight hundred twenty five");
  testNumberToWords(16825, "sixteen thousand eight hundred twenty five");
  testNumberToWords(60825, "sixty thousand eight hundred twenty five");
  testNumberToWords(10825, "ten thousand eight hundred twenty five");
  testNumberToWords(20825, "twenty thousand eight hundred twenty five");
  testNumberToWords(89625, "eighty nine thousand six hundred twenty five");
  testNumberToWords(289625, "two hundred eighty nine thousand six hundred twenty five");
  testNumberToWords(816825, "eight hundred sixteen thousand eight hundred twenty five");
  testNumberToWords(960825, "nine hundred sixty thousand eight hundred twenty five");
  testNumberToWords(110825, "one hundred ten thousand eight hundred twenty five");
  testNumberToWords(920825, "nine hundred twenty thousand eight hundred twenty five");
  testNumberToWords(889625, "eight hundred eighty nine thousand six hundred twenty five");
  console.log();
}

function testCaseLessThan1Billion() {
  testNumberToWords(1000000, "one million");
  testNumberToWords(1000001, "one million one");
  testNumberToWords(1000051, "one million fifty one");
  testNumberToWords(10000001, "ten million one");
  testNumberToWords(10000011, "ten million eleven");
  testNumberToWords(10010000, "ten million ten thousand");
  testNumberToWords(200000000, "two hundred million");
  testNumberToWords(200100000, "two hundred million one hundred thousand");
  testNumberToWords(309816825, "three hundred nine million eight hundred sixteen thousand eight hundred twenty five");
  testNumberToWords(470960825, "four hundred seventy million nine hundred sixty thousand eight hundred twenty five");
  testNumberToWords(100110825, "one hundred million one hundred ten thousand eight hundred twenty five");
  testNumberToWords(710920825, "seven hundred ten million nine hundred twenty thousand eight hundred twenty five");
  testNumberToWords(911889625, "nine hundred eleven million eight hundred eighty nine thousand six hundred twenty five");
  testNumberToWords(500003458, "five hundred million three thousand four hundred fifty eight");
  testNumberToWords(810004890, "eight hundred ten million four thousand eight hundred ninety");
  testNumberToWords(12005116, "twelve million five thousand one hundred sixteen");
  testNumberToWords(70006825, "seventy million six thousand eight hundred twenty five");
  console.log();
}

function billionTestCase() {
  testNumberToWords(1000000000, "one billion");  
  testNumberToWords(10010000000, "ten billion ten million");
  testNumberToWords(1001000051, "one billion one million fifty one");
  testNumberToWords(12010000001, "twelve billion ten million one");
  testNumberToWords(19010000011, "nineteen billion ten million eleven");
  testNumberToWords(2010010000, "two billion ten million ten thousand");
  testNumberToWords(34200000001, "thirty four billion two hundred million one");
  testNumberToWords(200200100000, "two hundred billion two hundred million one hundred thousand");
  testNumberToWords(310309816825, "three hundred ten billion three hundred nine million eight hundred sixteen thousand eight hundred twenty five");
  testNumberToWords(120470960825, "one hundred twenty billion four hundred seventy million nine hundred sixty thousand eight hundred twenty five");
  testNumberToWords(999999999999, "nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine")
  console.log();  
}

function allTestCase() {
  testCaseLessThanThousand();
  testCaseThousandToBelowOneMillion();
  testCaseLessThan1Billion();
  billionTestCase();
}

allTestCase();