function isDigit(digit) {
  return digit >= 0 && digit < 10 && !(digit === " ");
}

function isHyphenAndDigitAtrightPos(string, date){
  let isDateValid = 0;
  for (let index = 0; index < date.length; index++) {
    if (date[index] === string[index]) {
      isDateValid = date[index] === "-";

    } else {
      isDateValid = isDigit(date[index]);
    }
    if (!isDateValid) {
      return isDateValid;
    }
  }
  return isDateValid;
}

console.log(isDigit(7));
// console.log(isHyphenAndDigitAtrightPos(2, 5, "45-34-2334", "true"));
// console.log(isHyphenAndDigitAtrightPos(5, 6, "45334--334", "true"));
// console.log(isHyphenAndDigitAtrightPos(2, 4, "45-3-a2334", "false"));
// console.log(isHyphenAndDigitAtrightPos(4, 7, "4334-23-34", ""));
// console.log(isHyphenAndDigitAtrightPos(4, 7, "4534-34 14"));
// console.log(isHyphenAndDigitAtrightPos(2, 5, "45-34-2334"));
// console.log(isHyphenAndDigitAtrightPos(4, 7, "4534-34-23"));
// console.log(isHyphenAndDigitAtrightPos(2, 4, "45-34-2334"));
// console.log(isHyphenAndDigitAtrightPos(2, 4, "45-34-2334"));


