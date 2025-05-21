import { display } from "./mainExporting.js";

const date = "2024-12-31";
const date2 = "2024-12-10";
const char = "-";
const days = 23;

const split = function (char, string) {
  return string.split(char);
};

const isDateIsInRange = function (date, another, days) {
  const checkDate = +date[2] - +another[2];
  console.log("checkDate", checkDate, "days", days);
  if (days > checkDate) return false;
};

const inputDates = function (date, isvalid, days) {
  const endDate = split(char, date);
  const anotherDate = split(char, isvalid);
  return isDateIsInRange(endDate, anotherDate, days);
};

display(inputDates(date, date2, 12));

szs;
