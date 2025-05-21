// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "   we    are    working     in a   company ";
// Replace duplicate spaces with single space
// If string = "statement      with    two spaces"
// Then print "statement with two spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const DOUBLESPACE = "  ";
let stringSingleSpace = "";

for (let index = 0; index < string.length; index++) {
    const nextIndex = index + 1;
    const consecutivePair = string[index] + string[nextIndex];

    if (consecutivePair !== DOUBLESPACE) {
        stringSingleSpace = stringSingleSpace + string[index];
    }
}

console.log(stringSingleSpace);