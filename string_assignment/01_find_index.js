// Do not rename string and charToFind, use them as input for your program.
// While testing we will change their values.
const string = 'abcdccefffff';
const charToFind = 'c';
// Print the first index of the character in given string. Consider case sensitivity.
// If character not present in string print -1
// If string = "abccdef" and charToFind = "c", then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE


let charIndex = -1; 
const lastIndex = string.length - 1; 
for (let decreIndex = lastIndex; decreIndex >= 0; decreIndex--) {
    if (string[decreIndex] === charToFind) {
        charIndex = decreIndex;
    }
}
console.log(charIndex);  

// for (let index = 0; index <= string.length; index++) {
//     if (index === string.length) {
//         console.log(-1);
// }
//     if (string[index] === charToFind) {
//         console.log(index);
//         break;
//     }
// }

// let index = 0; 

// let makeTrue = true;
// while (makeTrue){

//     if (string[index] === charToFind) {
//         makeTrue = false;
//     } else {
//         index++;
//     }

// }
// console.log(index);