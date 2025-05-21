const word = "siddhi";

function isCharPresent(string, char) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return true;
    }
  }
  return false;
}

function generateRandomIndex(limit) {
  return Math.floor(Math.random() * limit);
}

function differentIndex(string, scrambled) {
  let randomIndex = generateRandomIndex(string.length);
  while (isCharPresent(scrambled , randomIndex)) {
    randomIndex = generateRandomIndex(string.length);
  }
  return randomIndex;
}

function generateScrambledWord(string) {
  let scrambledIndex = [];
  let scrambledString = [];

  for (let i = 0; i < string.length; i++) {
    scrambledIndex[i] = differentIndex(string, scrambledIndex);
    scrambledString += string[scrambledIndex[i]];   
  }
  
  return scrambledString;
}
//"1,2,3,4,11,12,3"
console.log(generateScrambledWord("aternate"));
console.log(generateScrambledWord("symaltaneously"));
console.log(generateScrambledWord("pratibhaa"));
console.log(generateScrambledWord("Arpita"));
console.log(generateScrambledWord("sakshi"));