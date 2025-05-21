// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "ssssssss";
const subString = "ss";
// Print the count of occurences of a substring in the given string
// If string = "duplicate substring statement" and subString = "ate", then print 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let setOfSubstring = 0;
let index = 0;
let subSet = "";
for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
    let modifiedIndex = stringIndex;
    if (string[stringIndex] === subString[index]) {
        index = index + 1;
        subSet = subSet + string[stringIndex];
        if (subSet === subString) {
            setOfSubstring++ ;
            index = 0;
            subSet = ""; 
        } 
    }

}

console.log(setOfSubstring); 