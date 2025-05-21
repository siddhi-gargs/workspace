function checkItShouldEnterOrNot() {

  const isEqualToOneOr6 = get === 1 || get === 6;

  console.log("You got :" + time + get);
  if (isEqualToOneOr6) {
    console.log("👍you securely enter in game :");
  }

  console.log("Its ok try next time");
}

function message(playerName, totalPoints) {
  const roll = + Math.ceil(Math.random() * 6);
  const total = totalPoints + roll;
  console.log("player " + playerName + " turn : ");
  oneLineSpace();
  const play = prompt(roll);
  console.log("You got :" + play);
  oneLineSpace();
  console.log("Total Points : " + total);
  return total;
}

function startGame(player1, player2) {

  const totalPoints1 = message(player1, 0);
  const totalPoints2 = message(player2, 0);
}

function oneLineSpace() {
  console.log();
}

function enteredMessage() {
  const isReadyToPlay = confirm("Are you ready to play SNAKE AND LADDER");
  if (isReadyToPlay) {
    oneLineSpace();
    console.log("-------------------- 🐍 SNAKE AND LADDER 🪜 --------------------");
    oneLineSpace();
    const player1 = prompt("Enter Name Of Player 1:");
    oneLineSpace();
    const player2 = prompt("Enter Name Of Player 2:");

    return startGame(player1, player2);
  }

}

enteredMessage();