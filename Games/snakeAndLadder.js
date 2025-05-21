let arrayOfScores = [0, 0];
let toggle = true;

function currentPersonMove(player1, player2) {
  toggle = !toggle;
  return toggle ? player1 : player2;
}

function oneLineSpace() {
  console.log();
}

function giveRepesentation(currentPlayer, player1) {
  return currentPlayer === player1 ? "😎" : "✌️";
}

function generateDiceNumber() {
  return Math.ceil(Math.random() * 6);
}

function rollDice() {
  prompt("ROLL DICE : 🎲 ");
  return generateDiceNumber();
}

function repeat(noOfTimes, mark) {
  let string = ""; 
  for (let iterate = 0; iterate < noOfTimes; iterate++) {
    string += mark;
  }

  return string;
}

repeat(12, "-");

function showInTable(userInput, represent) {
  let table = repeat(51, "-") + "\n";
  for (let number = 1; number <= 100; number++) {
    if (number === userInput) {
      table += "| " + represent + " ";
    } else if (number < 10) {
      table += "| 0" + number + " ";
    } else {
      if (number % 10 === 1) {
        table += "|\n" + repeat(50, "-") + "\n";
      }
      table += "| " + number + " ";
    }
    
  }
  table += "|\n" + repeat(51, "-");
  return table;
}

function addScore(currentPlayer, player1, userInput) {
  if (currentPlayer === player1) {
    return arrayOfScores[0] += userInput;
  } 

  return arrayOfScores[1] += userInput;;
}

function main() {

  const player1 = prompt("PLAYER1 NAME: ");
  const player2 = prompt("PLAYER2 NAME: ");

  oneLineSpace();
  while (arrayOfScores[0] <= 100 || arrayOfScores[1] <= 100) {
    
    const currentPlayer = currentPersonMove(player1, player2);
    const emoji = giveRepesentation(currentPlayer, player1);
    console.log(currentPlayer + " turn ");
    oneLineSpace();
    const userInput = rollDice();
    const currentPosition = addScore(currentPlayer, player1, userInput)
    console.log(showInTable(currentPosition, emoji));
    oneLineSpace();
  }
  if (arrayOfScores[0] > 100) {
    return player1 + "won";
  }
  return player2 + "won";
}

function letsPlay() {
  oneLineSpace();
  console.log("-----------SNAKE AND LADDER------------");
  oneLineSpace();
  console.log(main());
}

letsPlay();
