// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 7;
// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const nth_term = n;
let first_term = 0;
let last_term = 1;

for (let iterate = 1 ; iterate <= nth_term ; iterate++) {
    console.log(first_term);
    let next_term = first_term + last_term;
    first_term = last_term;
    last_term = next_term;
} 