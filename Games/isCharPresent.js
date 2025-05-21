function isCharPresent(string, char) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return true;
    }
  }
  return false;
}

isCharPresent("siddhii", "s");
isCharPresent("s", "s");
isCharPresent("t", "s");
isCharPresent("si", "s");


// function isRepeating(random, number) {
//   console.log("Checking isRepeating for Random =", random, "Current Unique Number=", number);
//   let generateNumber = random;
//   let i = 0;
//   while (i <= number.length) {
//     // const duplicateFound = "" + generateNumber ===  number[i];
//     console.log("generatedNumber","" + generateNumber, "number[i]", number[i]);
//     if ("" + generateNumber ===  number[i]) {
//       generateNumber = generateSingleDigit();
//       i = 0;
//     }
//     i++;
//   }
//   console.log("Current Unique Number was", number, "New Unique Digit=", generateNumber);
//   return generateNumber;
// }