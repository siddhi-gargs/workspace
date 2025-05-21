const YY_MM_DD = "yyyy-mm-dd";
const DD_MM_YY = "dd-mm-yyyy";
const MM_DD_YY = "mm-dd-yyyy";

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

function isFormatValid(format) {
  return format === YY_MM_DD || format === DD_MM_YY || format === MM_DD_YY;
}

function isDigit(digit) {
  return digit >= 0 && digit < 10;
}

function isHyphenAndDigitAtrightPos(hyphen1, hyphen2, date){
  let isDateValid = 0;
  for (let i = 0; i < date.length; i++) {
    if (i === hyphen1 || i === hyphen2) {
      isDateValid = date[i] === "-";
    }
    isDateValid = isDigit(date[i]);
    if (!isDateValid) {
      return isDateValid;
    }
  }
  return isDateValid;
}

function isDateFormatValid(date, format) {
  if (format === MM_DD_YY || format === DD_MM_YY) {
    return isHyphenAndDigitAtrightPos(2, 5, date);
  }

  return isHyphenAndDigitAtrightPos(4, 7, date);
}

function isYearValid(year) {
  return year > 1 && year < 9999;
}

function findYear(date) {
  let stringYear = 0;

  if (date[2] === "-" && date[5] === "-") {
    stringYear = date[6] + date[7] + date[8] + date[9];

  } else {
    stringYear = date[0] + date[1] + date[2] + date[3];
  }

  return +stringYear;
}

function findMonth(format, date) {
  let stringMonth = 0;
  if (format === "dd-mm-yyyy") {
    stringMonth = date[3] + date[4];

  } else if (format === "mm-dd-yyyy") {
    stringMonth = date[0] + date[1];

  } else {
    stringMonth = date[5] + date[6];

  }
  return +stringMonth;
}

function findDate(format, date) {
  let stringDate = 0;
  if (format === "dd-mm-yyyy") {
    stringDate = date[0] + date[1];

  } else if (format === "mm-dd-yyyy") {
    stringDate = date[3] + date[4];

  } else {
    stringDate = date[8] + date[9];

  }
  return +stringDate;
}

function isMonthValid(integerMonth) {
  return integerMonth > 0 && integerMonth < 13;
}

function lastDateOfMonth(month, year) {
  if ((month === 2)) {
    return isLeapYear(year) ? 29 : 28;
  }

  const thirtyOrThitrtyOne = month === 4 || month === 6 || month == 9 || month === 11;

  return thirtyOrThitrtyOne ? 30 : 31;
}

function isDateValid(year, month, date) {
  return date > 0 && date <= lastDateOfMonth(month, year);
}

function validate(format, date) {

  if (!isFormatValid(format)) {
    return "invalid format";
  }

  if (!isDateFormatValid(date, format) || date.length !== 10) {
    return 'date not according to format';
  }

  const integerYear = findYear(date);
  const integerMonth = findMonth(format, date);
  const integerDate = findDate(format, date);
  const isValidDate = isDateValid(integerYear, integerMonth, integerDate);

  if (!isYearValid(integerYear)) {
    return "invalid year";
  }

  if (!isMonthValid(integerMonth)) {
    return "invalid month";
  }

  if (!isValidDate) {
    return 'invalid day';

  }

  return "valid";
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testAll() {

  testValidate('mm-dd-yyyy', '08-01-0056', "valid");
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  testValidate('mm-dd-yyyy', '12-32-2020', 'invalid day');
  testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '01-01-00ag', 'invalid year');
  testValidate('mm-dd-yyyy', '13-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '01-60-0090', 'invalid day');
  testValidate('dd-mm-yyyy', '01-01-2020', 'valid');


  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  testValidate('mm-dd-yyyy', '01-01 2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '04-31-4567', 'invalid day');
  testValidate('mm-dd-yyyy', '01-60-00005', 'date not according to format');
  testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
  testValidate('mm-dd-yyyy', '31-02-2020', 'invalid month');
  testValidate('mm-dd-yyyy', '31-01-0000', 'invalid year');
  testValidate('yyyy-mm-dd', '2021-02-29', 'invalid day');
  testValidate('yyyy-mm-dd', '2032-03-32', 'invalid day');
  testValidate('yyyy-mm-dd', '1009-01-31', 'valid');
  testValidate('yyyy-mm-dd', '2032-13-31', 'invalid month');
  testValidate('yyyy-mm-dd', '2022-04-30', 'valid');
  testValidate('yyyy-mm-dd', '234-03-31', 'date not according to format');
  testValidate('mm-dd-yyyy', '31-02-2020', 'invalid month');
  testValidate('mm-dd-yyyy', '02-29-2021', 'invalid day');
  testValidate('mm-dd-yyyy', '31-02-0000', 'invalid year');
  testValidate('mm-ddd-yyy', '30-13-2020', 'invalid format');
  testValidate('mm-dd-yyyy', '03-03-2021', 'valid');
  testValidate('mm-dd-yyyy', '01-01-20204', 'date not according to format');
  testValidate('dd-mm-yyyy', '89-24-3456', 'invalid month');
  testValidate('dd-mm-yyyy', '31-05-2023', 'valid');
}

testAll();