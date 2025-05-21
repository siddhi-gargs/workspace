// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'm ';
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let countWords = 0;
const SPACE = " ";

const stringString = string.length - 1;
for (let index = 0; index < stringString; index++) {
    const nextIndex = index + 1;
    const isSpace = (string[index] === SPACE || index === 0);
    const notSpace = (string[nextIndex] !== SPACE);

    console.log("Iteration count - ", index, "   ", "isSPace-", isSpace, "      ", "notSpace-", notSpace);
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

