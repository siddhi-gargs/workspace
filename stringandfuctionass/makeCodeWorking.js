function isValidFormat(format) {
  switch (format) {
    case "yyyy-mm-dd":
    case "mm-dd-yyyy":
    case "dd-mm-yyyy":
      return true;
  }
  return false;
}

function isValidDate(format, date) {
  const isDateFormatCorrect = date[2] === "-" && date[5] === "-";
  switch (format) {
    case "yyyy-mm-dd":
      return date[4] === "-" && date[7] === "-";
    case "mm-dd-yyyy":
      return isDateFormatCorrect;
    case "dd-mm-yyyy":
      return isDateFormatCorrect;
  }
  return false;
}

function getYear(format, date) {
  const year = date[6] + date[7] + date[8] + date[9];
  switch (format) {
    case "yyyy-mm-dd":
      return +(date[0] + date[1] + date[2] + date[3]);
    case "mm-dd-yyyy":
      return + year; 
  }

  return +year;
}

function getMonth(format, date) {
  switch (format) {
    case "yyyy-mm-dd":
      return +(date[5] + date[6]);
    case "mm-dd-yyyy":
      return +(date[0] + date[1]);
  }

  return +(date[3] + date[4]);
}

function getDate(format, date) {
  switch (format) {
    case "yyyy-mm-dd":
      return +(date[8] + date[9]);
    case "mm-dd-yyyy":
      return +(date[3] + date[4]);
    case "dd-mm-yyyy":
      return +(date[0] + date[1]);
  }
}

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

function isThirtyOrThirtyOne(month) {
  const THIRTY = month === 4 || month === 6 || month === 9 || month === 11;
  return THIRTY ? 30 : 31;
}

function lastDateOfMonth(month, year) {
  if (isLeapYear(year)) {
    if (month === 2) {
      return 29;
    }
  }
    const endDate = month === 2 ? 28 : isThirtyOrThirtyOne(month);
    
  return endDate;
}

function validate(format, date) {
  if (!isValidFormat(format)) {
    return 'invalid format';
  }

  if (!isValidDate(format, date) || date.length !== 10) {
    return 'date not according to format';
  }

  const year = getYear(format, date);
  const month = getMonth(format, date);
  const period = getDate(format, date);

  if (year < 1 || year > 9999) {
    return 'invalid year';
  }

  if (month < 1 || month > 12) {
    return 'invalid month';
  }

  if (period < 1 || period > lastDateOfMonth(month, year)) {
    return 'invalid day'
  }

  return 'valid';
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testAll() {
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