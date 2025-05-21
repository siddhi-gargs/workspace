// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "sssgg aaa hdkd hgss";
const subString = "";
// Print the count of occurences of a substring in the given string
// If string = "duplicate substring statement" and subString = "ate", then print 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let count = 0;

for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {

    let isCharFound = true;
    let currentIndex = stringIndex;  
    let subIndex = 0;
    let emptyString = "";
    while (isCharFound) {
        const isEqualChar = string[currentIndex] === subString[subIndex];
        isCharFound = isEqualChar && (subIndex < subString.length);
        emptyString = emptyString + string[currentIndex];
        subIndex = subIndex + 1;
        currentIndex = currentIndex + 1;

        if (emptyString === subString) {
            count++;  
        }   
    }  
}

console.log(count);