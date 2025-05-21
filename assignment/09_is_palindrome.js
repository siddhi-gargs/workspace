// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 11;
// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const num = a;
let num_copy = num;
let reverse = 0;
  
while (num_copy > 0) {
   const remainder = num_copy % 10;
   num_copy = (num_copy - remainder) / 10;
   reverse = reverse * 10 + remainder; 
} 
console.log(num === reverse);

/* 
121 true 
1431 false
11 true 
*/

