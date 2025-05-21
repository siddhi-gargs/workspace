// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = ' u';
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const SPACE = " ";
const newString = SPACE + string; 
const endOfRange = newString.length - 1;
let countWords = 0;

for (let index = 0; index < endOfRange; index++) {
    const nextIndex = index + 1;
    const isSpace = (newString[index] === SPACE);
    const notSpace = (newString[nextIndex] !== SPACE);
    const isWord = isSpace && notSpace; 
    if (isWord) {
       countWords++; 
    }
}

console.log(countWords);



// for (let index = 0; index < string.length; index++) {
//     if (string[index] !== " ") {
//         count++; 
//         index++;
//         while (string[index] !== " ") {
//             index++;
//         } 
//     } 
// } 
//   console.log(count);

