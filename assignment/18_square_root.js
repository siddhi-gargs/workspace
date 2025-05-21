// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 4;
// Print the square root of a
// Printing more than one output or printing anything other than square root might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let square = 1;
let i = 1;
while(square <= a){
    i++;
    square = i * i;
}
i--;
console.log(i);


/* 
num root
12 3
89 9
0 0 
1 1 
4 2
81 9
*/