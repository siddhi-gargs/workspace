// Do not rename a, d or n, use them as input for your program.
// While testing we will change their values.
const a = 2;
const d = 3;
const n = 5;
// Print the sum of first n terms of an AP where a is the first term and d is the common difference.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let sum = 0;
for(let iterate = 0 ; iterate < n ; iterate++){
    let nth_term = a + (iterate * d);
    sum = sum + nth_term;
}
console.log(sum);   


/* 
a d n   res
2 0 5   10
0 5 5   50
10 5 5  100
2 5 0   0
2 3 1   2
2 3 5   40
*/