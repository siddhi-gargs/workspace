// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 59;
// Print true if a is prime otherwise print false
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const prime_num = a;
let count = 0;
for (let i = 1 ; i <= prime_num ; i++) {
    if (prime_num % i == 0) {
        count++;
    }
}
console.log(count === 2);

/*
3 true
10 false
0 false
1 false
 */