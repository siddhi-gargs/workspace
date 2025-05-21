// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "r     m o t r";
// Replace all spaces with underscore "_"
// If string = "statement with spaces"
// Then print "statement_with_spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const stringSize = string.length;
let underscoredString = "";
const SPACE = " ";
const UNDERSCORE = "_";

for (let iterate = 0; iterate < stringSize; iterate++) {
	const isThereIsSpace = string[iterate] !== SPACE;
    underscoredString += isThereIsSpace ? string[iterate] : UNDERSCORE;
    
}
console.log(underscoredString); 

  // if (string[iterate] !== " ") {
    //     stringWithSpace = stringWithSpace + string[iterate];
    // } else {
    //     stringWithSpace = stringWithSpace + "_";
    // } 

