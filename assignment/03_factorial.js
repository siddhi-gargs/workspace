// Do not rename it, use this as input for your program.
// While testing we will change its value.
const n = 0;
// print factorial of n.
// Do not print anything else. Printing more than one output or printing anything other than factorial might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let num = n;
let factorial = n ;
num--;

if (n  === 0) {
  factorial = 1;
}

for (num; num > 1; num--) {
  factorial = factorial * num;  
}
console.log(factorial);