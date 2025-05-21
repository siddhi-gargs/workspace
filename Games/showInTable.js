function repeat(noOfTimes, mark) {
  let string = ""; 
  for (let iterate = 0; iterate < noOfTimes; iterate++) {
    string += mark;
  }

  return string;
}

repeat(12, "-");

function makeTable(userInput, represent) {
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

console.log(makeTable(100, "😎"));