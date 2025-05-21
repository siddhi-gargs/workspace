// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "   'my name is siddhi  p' ";  // 0 to 10
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE 

let newString = "";
let firstIndex = 0;
let lastIndex = string.length - 1 ;
const SPACE = " ";

while (string[firstIndex] === SPACE) {
    firstIndex++;
} 

while (string[lastIndex] === SPACE) {
    lastIndex--;
}

for (let printIndex = firstIndex; printIndex <= lastIndex; printIndex++) {
    newString = newString + string[printIndex];    
}

console.log(newString);