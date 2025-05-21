const DECIMAL = "Decimal";
const BINARY = "Binary";
const OCTAL = "Octal";
const HEXADEC = "Hexadecimal";

function decimalTOBinary(number, newNumber) {
  if (number === 1) {
    return "1" + newNumber;
  }
  console.log("number : " + number + "newNumber :" + newNumber);
  const remainder = number % 2;
  return decimalTOBinary(((number - remainder) / 2), remainder + newNumber);
}

function conversionSystem(fromRadix, toRadix, number) {
  if (fromRadix === DECIMAL && toRadix === BINARY) {
    return decimalTOBinary(+number, "");
  }

}


console.log(conversionSystem("Decimal", "Binary", "33"));