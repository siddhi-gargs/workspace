// While testing we will change it's value.
// Do not rename string, use it as input for your program.
const string = "this is' afgdsgdsjg";
const start = 13;
const end = 45;
// Print the substring from the given string using start index and end index.
// If string = "this is a statement", start = 3 and end = 9, then print "s is a "
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const lastIndex = string.length - 1; 
let subString = "";

let endOfIndex = (lastIndex < end) ? lastIndex : end

let startOfString = start;
if (start < 0) {
    startOfString = 0;
}

for (let startIndex = startOfString; startIndex <= endOfIndex; startIndex++) {
    subString = subString + string[startIndex];
}

console.log(subString);

// let endOfIndex = end;
// if (lastIndex < end) {
//     endOfIndex = lastIndex;
// }

    // if (startIndex < 0) {
    //     subString = subString + ""; 
    // } else {
    //     subString = subString + string[startIndex]; 
    // }


    // const isNegativeIndex = startIndex < 0;
    // subString += isNegativeIndex ? subString : string[startIndex];
