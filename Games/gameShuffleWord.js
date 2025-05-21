function words(n) {
  switch (n) {
    case 1: return "alternate";
    case 2: return "assemble";
    case 3: return "bandwidth";
    case 4: return "wireless";
  }
}

function oneLineSpace() {
  console.log();
}

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

function getUserInput(shuffleWord) {
  console.log("Here is Your Scrambled Word..  ", shuffleWord);
  oneLineSpace();
  const input = prompt("Guess the Word..? ");
  return input;
}

function isCorrectGuess(correctWord, userInput) {
  return correctWord === userInput;
}

function startGame() {
  // displayInstruction();

  let score = 0;
  for (let iterate = 1; iterate < 5; iterate++) {
    const correctWord = words(iterate);
    const shuffleWord = generateScrambledWord(correctWord);
    const userInput = getUserInput(shuffleWord);
    console.log(correctWord);
    score += isCorrectGuess(correctWord, userInput) ? 1 : 0;
    console.log("Current Score :", score ,"/", iterate);
  }
  console.log("Your Total Score is :", score);
  return startGame();
}

startGame();
