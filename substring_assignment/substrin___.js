// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "count substring";
const subString = "";
// Print the count of occurences of a substring in the given string
// If string = "duplicate substring statement" and subString = "ate", then print 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

//test cases 
//const string = "sssss"; const subString = "ss"; countOfOccurences = 4;
//const string = "please ease"; subString = "eas";  countOfOccurences = 2;
//const string = "duplicate substring statement"; const subString = "ate";
//  countOfOccurences = 4;
//const string = "count substring"; const subString = " "; countOfOccurences = 1;

let countOfOccurences = 0;
let index = 0;
const subStringIndex = subString.length - 1;

while (index < string.length) {
    let subIndex = 0;
    while (subString[subIndex] === string[index]) {
        if(subIndex === subStringIndex) {
            countOfOccurences++;
            index = index - subStringIndex ;
            break;
        }
        index++;
        subIndex++;
    }
    index++;
}
console.log(countOfOccurences);


