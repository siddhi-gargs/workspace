function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function maximumOf3(number1, number2, number3) {  // 56, 24, 67
  if (number1 > number2) {
    return maximumOf3(number2, number3, number1); // 67, 24, 56
  }
  
  if (number3 > number2) {
    return number3;
  }

  return number2;
}

function maxOf3TestCases(num1, num2, num3, expected) {
  const actualOutput = maximumOf3(num1, num2, num3);
  const status = actualOutput === expected ? "✅" : "❌";
  const message = "num1" + addQuote(num1) + "num2" + addQuote(num2);
  console.log(status + message + "num3" + addQuote(num3) + " actual " + actualOutput);
}

maxOf3TestCases(56, 89, 20, 89);
maxOf3TestCases(786, 675, 900, 900);
maxOf3TestCases(89, 55, 23, 89);
maxOf3TestCases(567, 679, 600, 679);
maxOf3TestCases(686, 34, 900, 900);
maxOf3TestCases(56, 10, 5, 56);

