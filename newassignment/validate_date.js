const format = 'mm-dd-yyyy';
const date = '02-08-0401';
let output = "";
// Validate the given date against the format string

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let yearString = 0;
let dateString = 0;
let monthString = 0;

const is2IndexDash = (format[2] === "-") && (date[2] === "-");
const is5IndexDash = (format[5] === "-") && (date[5] === "-")
const isDashCorrectMMDD = is2IndexDash && is5IndexDash;

const is4DashIndex = (format[4] === "-") && (date[4] === "-");
const is7DashIndex = (format[7] === "-") && (date[7] === "-")
const isDashCorrectYYYY = is4DashIndex && is7DashIndex;

if (isDashCorrectYYYY) {
    if (format === "yyyy-mm-dd") {
    yearString = date[0] + date[1] + date[2] + date[3]; 
    monthString = date[5] + date[6];
    dateString = date[8] + date[9];
    }
}

if (isDashCorrectMMDD) {
    if (format === "dd-mm-yyyy") {
        dateString = date[0] + date[1];
        monthString = date[3] + date[4];
        yearString = date[6] + date[7] + date[8] + date[9]; 
        }
    if (format === "mm-dd-yyyy") {
        monthString = date[0] + date[1];
        dateString = date[3] + date[4];
        yearString = date[6] + date[7] + date[8] + date[9]; 
    }
        
}
const month = +monthString;
const year = +yearString;
const datenumeric = +dateString;

if (isDashCorrectMMDD || isDashCorrectYYYY){
    const isYearValid = year > 0 && year < 9999;
    const isMonthValid = (+ month > 0) && (+ month < 13);

    const isMonth31 = month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12;
    let NoOfdays = isMonth31 ? 31 : 30
    if(month === 2) {
        const isDiv4 = (year % 4 === 0);
        const isDiv100 = (year % 100 === 0);
        const isDiv400 = (year % 400 === 0);
        const isLeap = (!isDiv100 && isDiv4) || isDiv400;
        NoOfdays = isLeap ? 29 : 28
    }
    const isDateValid = (datenumeric > 0) && (datenumeric <= NoOfdays);
    const isEverythingvalid = isDateValid && isMonthValid && isYearValid;
    output = isEverythingvalid ? "valid" : "invalid";
} 

if (!(isDashCorrectMMDD || isDashCorrectYYYY)) {
    output = "invalid";
}

//format valid
console.log(output);
