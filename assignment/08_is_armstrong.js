// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 1634;
// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const num = a;
let quotient = num;
let armstrong = 0;
let count = 0;
let num_copy = num; 

while (num_copy > 0) {
   let remainder = num_copy % 10;
   num_copy = (num_copy - remainder)/ 10;
   count++; 
} 

while (quotient > 0) {
    const remainder = quotient % 10;
    armstrong = armstrong + (remainder ** count );
    quotient = (quotient - remainder) / 10;
}
console.log(num === armstrong);

/*
163 false
0 true
1 true
*/
