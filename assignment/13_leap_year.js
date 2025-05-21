// Do not rename year, use it as input for your program.
// year will be a natural number.
// While testing we will change its value.
const year = 600;
// Print true if the year is a leap year otherwise print false.
// Printing more than one output or printing anything other than leap year or not leap year might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let is_leap = false;

if (year % 4 === 0) {
  is_leap = true;
}

if (year % 100 === 0){
  is_leap = false;
}

if (year % 400 === 0){
  is_leap = true;
}

console.log(is_leap);

/* 
2000 true 
1005 false
2024 true
1900 false  
600 false
*/