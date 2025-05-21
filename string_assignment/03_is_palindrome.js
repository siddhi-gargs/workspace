// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "abdccbja";
// Print true if the given string is palindrome otherwise false
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let result = true;
let lastIndex = string.length - 1;

for (let startIndex = 0; startIndex < lastIndex; startIndex++) {
    if (string[startIndex] !== string[lastIndex]) {
        result = false;     
    }
    lastIndex--;
}
console.log(result);
