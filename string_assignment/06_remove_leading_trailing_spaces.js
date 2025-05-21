// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = " my name is siddhi  p ";  // 0 to 10
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let startspace = 0;
let lastspace = 0;
let output = "";

const stringIndex = string.length - 1;

for (let startinIndex = 0; startinIndex < string.length; startinIndex++) {
    if (string[startinIndex] !== " "){
        break;
    } 
    startspace++;
}

for (let lastIndex = stringIndex; lastIndex >= 0; lastIndex--) {
    if (string[lastIndex] !== " "){
        break;
    } 
    lastspace++;
}
lastspace = stringIndex - lastspace;
for (let print = startspace; print <= lastspace; print++) {
    output = output + string[print];
}
console.log(output);
