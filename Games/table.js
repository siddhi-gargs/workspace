function addMarkNoOfTimes(currentIndex, mark) {
  if (currentIndex === 1) {
    return mark;
  }
  return mark + addMarkNoOfTimes(currentIndex - 1, mark);
}

function makeTable(start, endIndex, timesOfunderLine) {

  let string = addMarkNoOfTimes(timesOfunderLine, "-") + "\n";
  for (let number = start; number <= endIndex; number++) {
    const input = 5;
    if (number === input) {
      string += "| " + "😎" + " ";
    } else if (number < 10) {
      string += "| 0" + number + " ";
    } else {
      if (number % 10 === 1) {
        string += "|\n" + addMarkNoOfTimes(timesOfunderLine, "-") + "\n";
      }
      string += "| " + number + " ";
    }
  }
  string += "|\n" + addMarkNoOfTimes(timesOfunderLine, "-")
  return string;
}


console.log(makeTable(1, 100, 50));