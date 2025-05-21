// Do not rename startOfRange and endOfRange, use it as input for your program.
// Use them to find all prime numbers between startOfRange and endOfRange (both inclusive).
const startOfRange = 1;
const endOfRange = 2;
// Print all prime numbers between startOfRange and endOfRange
// For example, if startOfRange = 1 and endOfRange = 10, then the output should be
// 2
// 3
// 5
// 7
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

for (let isPrime = startOfRange; isPrime <= endOfRange; isPrime++) {
    let increment = 2;
    while (increment <= isPrime) {
        if (isPrime == increment) {
            console.log(isPrime);     
        }
        if (isPrime % increment == 0) {
            break;
        }
        increment++;
    }  
}

/* 
4 to 19
1 to 2    2
*/