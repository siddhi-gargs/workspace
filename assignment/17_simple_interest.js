// Do not rename p, r or t, use them as input for your program.
// While testing we will change their values.
const p = 100;
const r = 5;
const t = 2;
// Print the simple interest.
// Printing more than one output or printing anything other than simple interest might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const principle = p;
const simple_interest = (principle * r * t)/100;
console.log(simple_interest);

/*
p   r  t  res
100 5  2  10
100 15 6  90
    0   0   0
*/