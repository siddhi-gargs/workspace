// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'abcde';
// Reverse the given string
// If string = "reverse" then output should be "esrever"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let reverseString = "";
const lastIndex = string.length - 1;
for (let lastChar = lastIndex; lastChar >= 0; lastChar--) {
    reverseString = reverseString + string[lastChar] ;  
}
console.log(reverseString);
