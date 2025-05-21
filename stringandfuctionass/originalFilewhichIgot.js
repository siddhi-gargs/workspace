
function isValidFormat(format) {
  switch (format) {
    case "yyyy-mm-dd":
    case "mm-dd-yyyy":
    case "dd-mm-yyyy":
      return true;
    default:
      return false;
  }
}

function getYear(format, date) {
  switch (format) {
    case "yyyy-mm-dd":
      return +(date[0] + date[1] + date[2] + date[3]);
    case "mm-dd-yyyy":
      return +(date[6] + date[7] + date[8] + date[9]);
    case "dd-mm-yyyy":
      return +(date[6] + date[7] + date[8] + date[9]);
  }
}

function getMonth(format, date) {
  switch (format) {
    case "yyyy-mm-dd":
      return +(date[5] + date[6]);
    case "mm-dd-yyyy":
      return +(date[0] + date[1]);
    case "dd-mm-yyyy":
      return +(date[3] + date[4]);
  }
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

function isValidDate(format, date) {
  switch (format) {
    case "yyyy-mm-dd":
      return date[4] === "-" || date[7] === "-";
    case "mm-dd-yyyy":
      return date[2] === "-" || date[5] === "-";
    case "dd-mm-yyyy":
      return date[2] === "-" || date[5] === "-";
  }
}


function validate(format, date) {
  const year = getYear(format, date);
  const month = getMonth(format, date);
  const period =  getDate(format, date);

  if (!isValidFormat(format)) {
    return 'invalid format';
  }

  if (!isValidDate(format, date)) {
    return 'date not according to format';
  }
  if(period <1 || period >31){
    return  'invalid day'
  }
  if (month < 1 || month > 12) {
    return 'invalid month';
  }

  if (year < 1 || year > 9999) {
    return 'invalid year';
  }

  return 'valid';
}


function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testAll() {
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  testValidate('mm-dd-yyyy', '01 01 2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '13-01-0000', 'invalid month');
  testValidate('mm-dd-yyyy', '01-60-0000', 'invalid day');
  testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
}

testAll();
