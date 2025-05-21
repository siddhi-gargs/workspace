// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 12;
// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const num = a;
let num_copy = num;
let prime = 2;
 
while (num_copy >= prime) {
    if (num_copy % prime == 0){
        console.log(prime);
        num_copy = num_copy /  prime;
    } else {
        prime++;
    }
    for (let not_prime = 2 ; not_prime < prime ; not_prime++) {
        if (prime % not_prime == 0){
            prime++;
        }

    }
}
/* 
2 2 3   12
2 2 2 3  24
2 3 3 7  126
1 nothing
*/      