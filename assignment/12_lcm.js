// Do not rename a and b, use them as input for your program.
// a and b will be natural numbers.
// While testing we will change their values.
const a = 10;
const b = 4;
// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let max = a;
let min = b;

let multiple = 0;
const product = a * b;
if (b > a) {
    max = b;
    min = a;
} 
for (let iterate = 1; iterate <= product; iterate++) {
    multiple = max * iterate;
    if (multiple % min == 0) {
        break;
    }
}

console.log(multiple);

/*  
a b res
2 3 6
12 30 60
6 0 0
0 0 0
1 1 1
12 1 12

*/