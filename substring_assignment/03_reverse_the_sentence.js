// Do not rename sentence, use it as input for your program.
// While testing we will change it's value.
const sentence = "_this is cool 1";
//  Reverse the sentence      //
// If sentence = "this is cool" then Output should be "cool is this"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// test cases 
// sentence = " check this sentence  " output = const expectedOutput = " sentence this check ";
// sentence = "this is cool" output = "cool is this";
 
// const spaceInSentence = sentence + " ";

const emptyString = "";
let word = emptyString;
let reverseSentence = emptyString;
for (let index = 0; index < sentence.length; index++) {
    word = word + sentence[index];
    if (sentence[index] === " " || index === sentence.length - 1) {
        reverseSentence = word + reverseSentence; 
        word = emptyString;
    }
}
console.log(reverseSentence);
     
console.log(sentence.length);