// Do not rename sentence, use it as input for your program.
// While testing we will change it's value.
const sentence = "_this is cool 1";
//  Reverse the sentence      //
// If sentence = "this is cool" then Output should be "cool is this"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// test cases 
// sentence = " check this sentence  " output = const expectedOutput = 
//"  sentence this check ";
// sentence = "this is cool" output = "cool is this";
 
// const spaceInSentence = sentence + " ";
//const sentence = "< check this sentence  >";  const output = ">  sentence this check <"
//const sentence = "   time is flew very fast "; output = " fast very flew is time  "

const emptyString = "";
let word = emptyString;
let reverseSentence = emptyString;
let lastIndex = sentence.length - 1;

for (let index = lastIndex; index >= 0; index--) {
    if (sentence[index] !== " ") {
        word = sentence[index] + word;     
    } else {
        word = word + " ";
        reverseSentence =  reverseSentence + word; 
        word = "";
    } 
    if (index === 0) {
        reverseSentence += word;
    }
}

console.log(reverseSentence);
