// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 14;
// Print the nth Fibonacci term
// Printing more than one output or printing anything other than the nth Fibonacci term might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let first_term = 0;
let last_term = 1;
let current_term = 0;

for (let iterate = 1 ; iterate <= n ; iterate++) {
    current_term = first_term;
    let next_term = first_term + last_term;
    first_term = last_term;
    last_term = next_term;
} 
console.log(current_term);

/*
7 8 
1 0   
2 1   
14 233
*/ 