/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

// "K" => "C" => "F"
const KELVIN = "K";
const CELCIUS = "C";
const FAHRENHEIT = "F";

function addQuote(inputToString) {
  return "\"" + inputToString + "\"";
}

function kelvinToCelciusAndfahreheit(value, to) {
  const toCelsius = value - 273.15;
  switch (to) {
    case CELCIUS:
      return toCelsius;
    case FAHRENHEIT:
      return celciusTofahrenheitAndKelvin(toCelsius, to);
    default:
      return "" + NaN;
  }

}

// "F" => "C" => "K"
function fahrenheitTocelciusAndkelvin(value, to) {
  const fahrehneitToCelcius = (value - 32) * 5 / 9;
  switch (to) {
    case CELCIUS:
      return fahrehneitToCelcius;
    case KELVIN:
      return fahrehneitToCelcius + 273.15;
    default:
      return NaN + "";
  }

}

// "C" => "F" => "K"
function celciusTofahrenheitAndKelvin(value, to) {
  const Tofahrehneit = (1.8 * value) + 32;
  switch (to) {
    case FAHRENHEIT:
      return Tofahrehneit;
    case KELVIN:
      return value + 273.15;
    default:
      return NaN + "";
  }

}

function isvalid(from) {
  return from === KELVIN || from === CELCIUS || from === FAHRENHEIT;
}

function convert(from, to, value) {
  if (!isvalid(from) || !isvalid(to)) {
    return "NaN";
  }

  switch (from) {
    case to:
      return +value;
    case CELCIUS:
      return celciusTofahrenheitAndKelvin(value, to);
    case FAHRENHEIT:
      return fahrenheitTocelciusAndkelvin(value, to);
    case KELVIN:
      return kelvinToCelciusAndfahreheit(value, to);

  }
  return NaN + "";
}

function message(mark, from, to, value, expected, actual) {
  const markAndInput = mark + " from " + addQuote(from);
  const inputPart = " to " + addQuote(to) + " value " + addQuote(value);
  const expectedMessage = " expected is " + addQuote(expected);
  const actualMessage = " actual is " + addQuote(actual);

  return markAndInput + inputPart + expectedMessage + actualMessage;
}

function getmark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function occurenceTestCase(from, to, value, expected) {
  const actual = convert(from, to, value);
  const markStatus = getmark(actual, expected);

  console.log(message(markStatus, from, to, value, expected, actual));
}


function FahrehneitTestCases() {
  occurenceTestCase("f", "f", 89, "" + NaN);
  occurenceTestCase("F", "F", "78", 78);
  occurenceTestCase("F", "C", "50", 10);
  occurenceTestCase("F", "C", "ggc", "" + NaN);
  occurenceTestCase("F", "C", 50, 10);
  occurenceTestCase("F", "K", 46, 280.928);
  occurenceTestCase("F", "K", 32, 273.15);
}

function kelvinTestCases() {
  occurenceTestCase("K", "C", 20, -253.15);
  occurenceTestCase("K", "C", 18, -255.15);
  occurenceTestCase("K", "F", 4, -452.47);
  occurenceTestCase("K", "F", 5, -450.67);
  occurenceTestCase("K", "F", 50, -369.67);
  occurenceTestCase("k", "F", 50, "" + NaN);
}

function celciusTestCases() {
  occurenceTestCase("C", "f", 34, "" + NaN);
  occurenceTestCase("C", "F", 45, 113);
  occurenceTestCase("C", "K", 20, 293.15);
  occurenceTestCase("C", "K", 23, 296.15);
  occurenceTestCase("C", "C", 0, 0);
}

function testCases() {
  FahrehneitTestCases();
  // kelvinTestCases();
  // celciusTestCases();
}

testCases();