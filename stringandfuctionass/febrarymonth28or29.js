function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  const isDivby4 = isDivisible(year, 4);
  const isDivby100 = isDivisible(year, 100);
  const isDivby400 = isDivisible(year, 400);

  const isYearLeapOrNot = (isDivby4 && !isDivby100) || isDivby400;
  return isYearLeapOrNot;
}

function lastDateOfMonth(month, year) {
  if((month === 2)) {
    return isLeapYear(year) ? 29 : 28;
  }

  const thirtyOrThitrtyOne = month === 4 || month === 6 || month == 9 || month === 11;

  return thirtyOrThitrtyOne ? 30 : 31;
}

function isDateValid(date, month, year) {
  return date > 0 && date <= lastDateOfMonth(month, year);
}

console.log(lastDateOfMonth(1, 2032));
console.log(lastDateOfMonth(2, 2007));
console.log(lastDateOfMonth(2, 2024));
console.log(lastDateOfMonth(4, 1098));
console.log(lastDateOfMonth(9, 2207));
console.log(lastDateOfMonth(2, 1909));
console.log(lastDateOfMonth(2, 400));



console.log(isDateValid(29, 2, 5684));
console.log(isDateValid(29, 2, 2028));
console.log(isDateValid(31, 1, 2028));
console.log(isDateValid(30, 4, 2056));
console.log(isDateValid(32, 2, 5687));
console.log(isDateValid(32, 3, 5687));
